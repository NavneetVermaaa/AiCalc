#!/usr/bin/env node
// Prerender every route of the CalcioCalc SPA into real static HTML inside dist/.
// Runs after `vite build`: boots a local preview server, renders each route in headless
// Chrome, and writes the fully-rendered document (content + helmet <head> tags) to
// dist/<path>/index.html so crawlers see content without executing JavaScript.
//
// Fails hard (non-zero exit) if ANY route fails to prerender or if a written file still
// looks like the empty SPA shell — a broken build must never deploy silently.
//
// Browser strategy: only puppeteer-core is used (no `puppeteer` package, no download of a
// bundled Chrome at install time).
//   - linux (Vercel build containers run Amazon Linux 2023, which lacks the system libs
//     Chrome needs, e.g. libnss3.so / libdrm.so.2) -> @sparticuz/chromium, a Chromium
//     build packaged specifically for serverless/CI environments.
//   - win32/macOS (local dev) -> puppeteer-core launches the system browser (Edge on
//     Windows — preinstalled — otherwise Google Chrome).
// Override with PRERENDER_BROWSER=local to force the system-browser path even on linux.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
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

// Markers that prove React actually mounted: the app shell has <div id="root"> only,
// Layout renders <main id="main"> (src/components/Layout.jsx) and every page sets a
// non-empty <title> via <SEO> (src/components/SEO.jsx). Absence = unrendered shell.
const looksLikeShell = (html, meta) =>
  !html.includes("<main") || !meta.title || html.includes("Loading Calcio");

async function launchBrowser() {
  const { default: puppeteerCore } = await import("puppeteer-core");
  const forceLocal = process.env.PRERENDER_BROWSER === "local";

  if (process.platform === "linux" && !forceLocal) {
    console.log("[prerender] browser: @sparticuz/chromium + puppeteer-core (serverless linux build container)");
    try {
      const { default: chromium } = await import("@sparticuz/chromium");
      return puppeteerCore.launch({
        executablePath: await chromium.executablePath(),
        args: chromium.args,
        headless: true
      });
    } catch (error) {
      console.error(
        "\n[prerender] FATAL: @sparticuz/chromium failed to start on this linux build container."
      );
      console.error(
        "[prerender] This is the Chromium build packaged for serverless/CI (Vercel, AWS Lambda)"
      );
      console.error(
        "[prerender] and should work out of the box. Underlying error: " + error.message
      );
      throw error;
    }
  }

  // Local dev: puppeteer-core reuses the system browser — no bundled Chromium downloaded
  // and no extra dependency. Edge ships preinstalled with Windows.
  const channels = process.platform === "win32" ? ["msedge", "chrome"] : ["chrome"];
  let lastError = null;
  for (const channel of channels) {
    try {
      console.log(`[prerender] browser: system ${channel} (local)`);
      return await puppeteerCore.launch({ channel, headless: true, args: ["--no-sandbox"] });
    } catch (error) {
      lastError = error;
      console.warn(`[prerender] system ${channel} unavailable: ${error.message}`);
    }
  }
  throw lastError;
}

const waitForRenderedApp = () =>
  document.querySelector("main") !== null && !document.body.textContent.includes("Loading Calcio");

async function renderAllRoutes(page, baseUrl, routes) {
  const results = [];
  for (const route of routes) {
    const target = route === "/" ? resolve(DIST, "index.html") : resolve(DIST, route.slice(1), "index.html");
    let reason = "";
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

      if (looksLikeShell(html, meta)) {
        if (!meta.title) reason = "no <title> — page never hydrated, wrote the empty SPA shell?";
        else if (!html.includes("<main")) reason = "no <main> — page never hydrated, wrote the empty SPA shell?";
        else reason = "still contains the 'Loading Calcio' fallback — pre-render left the shell";
        results.push({ route, ok: false, error: reason });
        continue;
      }

      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, html, "utf8");
      // Remove stale precompressed twins produced for the shell index.html by vite-plugin-compression2.
      rmSync(`${target}.gz`, { force: true });
      rmSync(`${target}.br`, { force: true });

      // Read back what was actually written — it must exist and be a rendered page, not a
      // shell or empty file, otherwise the deploy would silently ship a broken route.
      const onDisk = readFileSync(target, "utf8");
      if (!onDisk.includes("<main") || !onDisk.includes("</html>")) {
        results.push({ route, ok: false, error: "written file failed on-disk verification (no <main>/</html>)" });
        continue;
      }
      results.push({ route, ok: true, meta });
    } catch (error) {
      results.push({ route, ok: false, error: error.message });
    }
  }
  return results;
}

async function verifyInteractivity(baseUrl, browser) {
  // Load a prerendered page in a fresh browser and confirm the client bundle hydrates:
  // no hydration mismatch errors, and editing an input live-updates the result.
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

  await page.close();
  return { before, after, consoleErrors, hydrationErrors };
}

async function main() {
  const routes = buildRoutes();
  if (routes.length === 0) {
    console.error("[prerender] FATAL: route list is empty — refusing to continue (data files broken?)");
    return 1;
  }
  console.log(`[prerender] ${routes.length} routes to pre-render`);

  const server = await preview({ preview: { host: "127.0.0.1", port: 0 } });
  const baseUrl = `http://127.0.0.1:${server.httpServer.address().port}`;

  const browser = await launchBrowser();
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
    console.error(`\n[prerender] FAILED: ${failed.length}/${routes.length} routes failed — build is broken, refusing to ship.`);
    await browser.close();
    await closeServer(server);
    return 1;
  }

  console.log(`\n[prerender] ${routes.length} HTML files written to dist/`);

  const verification = await verifyInteractivity(baseUrl, browser);
  const interactivityOk = verification.hydrationErrors.length === 0 && verification.before && verification.before !== verification.after;

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

  if (!interactivityOk) {
    console.error("\n[prerender] FAILED: hydration/interactivity verification failed — build is broken, refusing to ship.");
    return 1;
  }

  console.log("\n[prerender] SUCCESS: every route prerendered and verified.");
  return 0;
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