#!/usr/bin/env node
// Prerender every route of the CalcioCalc SPA into real static HTML inside dist/.
// Runs after `vite build`: boots a local preview server, renders each route in headless
// Chrome, and writes the fully-rendered document (content + helmet <head> tags) to
// dist/<path>/index.html so crawlers see content without executing JavaScript.
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import puppeteer from "puppeteer";
import { calculators, categories } from "../src/data/calculators.js";
import { blogCategories, getPublishedPosts } from "../src/data/blogs.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = resolve(ROOT, "dist");

// Keep in sync with scripts/generate-sitemap.mjs (static pages).
const STATIC_ROUTES = [
  "/",
  "/blog",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/disclaimer",
  "/editorial-policy",
  "/search"
];

// Route list is generated from the same data files the router uses — never hardcoded.
const buildRoutes = () => {
  const routes = new Set(STATIC_ROUTES);
  categories.forEach((item) => routes.add(`/calculators/${item.id}`));
  calculators.forEach((item) => routes.add(`/calculator/${item.slug}`));
  blogCategories.forEach((item) => routes.add(`/blog/category/${item.id}`));
  getPublishedPosts().forEach((item) => routes.add(`/blog/${item.slug}`));
  return [...routes];
};

// External trackers/fonts are irrelevant to the static HTML and only slow the build down.
const BLOCKED = /(?:pagead2\.googlesyndication\.com|googletagmanager\.com|google-analytics\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|adsbygoogle|doubleclick\.net)/i;

const waitForRenderedApp = () =>
  document.querySelector("main") !== null && !document.body.textContent.includes("Loading Calcio");

async function renderAllRoutes(page, baseUrl, routes) {
  const results = [];
  for (const route of routes) {
    const target = route === "/" ? resolve(DIST, "index.html") : resolve(DIST, route.slice(1), "index.html");
    try {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForFunction(waitForRenderedApp, { timeout: 45000 });
      const html = await page.content();
      const meta = await page.evaluate(() => ({
        title: document.title?.trim() || "",
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
        description: document.querySelector('meta[name="description"]')?.content || "",
        h1: document.querySelector("h1")?.textContent?.trim() || ""
      }));
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, html, "utf8");
      // Remove stale precompressed twins produced for the shell index.html by vite-plugin-compression2.
      rmSync(`${target}.gz`, { force: true });
      rmSync(`${target}.br`, { force: true });
      results.push({ route, ok: true, meta });
    } catch (error) {
      results.push({ route, ok: false, error: error.message });
    }
  }
  return results;
}

async function verifyInteractivity(baseUrl) {
  // Load a prerendered page in a fresh browser and confirm the client bundle hydrates:
  // no hydration mismatch errors, and editing an input live-updates the result.
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(`pageerror: ${err.message}`));

  await page.goto(`${baseUrl}/calculator/roas-calculator`, { waitUntil: "networkidle2", timeout: 60000 });
  await page.waitForSelector('input[type="number"]', { timeout: 30000 });

// ROAS renders as e.g. "4x" or "3.5x" (toLocaleString trims trailing zeros). Take the
// first match in body order — the calculator result block precedes any benchmark text.
const roasPattern = /\d+(?:\.\d+)?x/;
const before = await page.$eval("body", (body) => (body.innerText.match(/\d+(?:\.\d+)?x/) || [""])[0]);
await page.$$eval('input[type="number"]', (inputs) => {
  // calculator.fields order: revenue first, ad spend second. Both must be valid
  // before the calculator switches from the example result to a real calculation.
  const values = ["90000", "30000"]; // ROAS should update 4x -> 3x
  inputs.forEach((input, index) => {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    setter.call(input, values[index] ?? "1");
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
});
await new Promise((resolvePromise) => setTimeout(resolvePromise, 600));
const after = await page.$eval("body", (body) => (body.innerText.match(/\d+(?:\.\d+)?x/) || [""])[0]);

  const hydrationErrors = consoleErrors.filter(
    (text) => /hydrat|did not match|rehydrat/i.test(text)
  );

  await browser.close();
  return { before, after, consoleErrors, hydrationErrors };
}

async function main() {
  const routes = buildRoutes();
  console.log(`[prerender] ${routes.length} routes to pre-render`);

  const server = await preview({ preview: { host: "127.0.0.1", port: 0 } });
  const baseUrl = `http://127.0.0.1:${server.httpServer.address().port}`;

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (BLOCKED.test(req.url())) req.abort();
    else req.continue();
  });

  const results = await renderAllRoutes(page, baseUrl, routes);

  const failed = results.filter((result) => !result.ok);
  results.forEach(({ route, ok, meta, error }) => {
    if (ok) {
      console.log(`  ok    ${route}  (title: ${meta.title || "(empty)"})`);
    } else {
      console.log(`  FAIL  ${route}  (${error})`);
    }
  });

  const samples = {
    homepage: results.find((r) => r.route === "/"),
    calculator: results.find((r) => r.route === "/calculator/roas-calculator"),
    blogPost: results.find((r) => r.route === "/blog/openai-api-pricing-guide")
  };
  console.log("\n[prerender] helmet verification (static HTML, no JS needed):");
  for (const [label, result] of Object.entries(samples)) {
    if (!result || !result.ok) {
      console.log(`  ${label}: ROUTE MISSING OR FAILED`);
      continue;
    }
    console.log(`  ${label}:\n    title:       ${result.meta.title}\n    canonical:   ${result.meta.canonical}\n    description: ${result.meta.description?.slice(0, 90)}...\n    h1:          ${result.meta.h1.slice(0, 80)}`);
  }

  if (failed.length > 0) {
    console.error(`\n[prerender] ${failed.length}/${routes.length} routes failed`);
    await browser.close();
    await closeServer(server);
    return 1;
  }

  console.log(`\n[prerender] ${routes.length} HTML files written to dist/`);

  const verification = await verifyInteractivity(baseUrl);
  const exitCode = verification.hydrationErrors.length > 0 || (!verification.before || verification.before === verification.after) ? 1 : 0;

  console.log("\n[prerender] hydration/interactivity verification (/calculator/roas-calculator):");
  console.log(`  ROAS before edit: ${verification.before}  ->  after edit: ${verification.after}`);
  console.log(`  console errors: ${verification.consoleErrors.length} (hydration-related: ${verification.hydrationErrors.length})`);
  if (verification.hydrationErrors.length > 0) {
    verification.hydrationErrors.forEach((error) => console.error(`  HYDRATION: ${error}`));
  }
  if (!verification.before || verification.before === verification.after) {
    console.error("  FAIL: calculator result did not update after input change (JS not hydrating?)");
  } else {
    console.log(`  PASS: result updated after editing an input`);
  }

  await browser.close();
  await closeServer(server);
  return exitCode;
}

async function closeServer(server) {
  await new Promise((resolvePromise) => {
    server.httpServer.close(resolvePromise);
    // Force-close any lingering keep-alive sockets so the process can exit cleanly.
    setTimeout(resolvePromise, 3000);
  });
}

main().then((exitCode) => process.exit(exitCode)).catch((error) => {
  console.error(error);
  process.exit(1);
});
