import { readFileSync, readdirSync, writeFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const dist = resolve("dist");

const isHome = (rel) => {
  const p = rel.replace(/\\/g, "/").replace(/^\.?\/?/, "");
  return p === "index.html" || p === "";
};

const isBlogOrSearch = (rel) => {
  const p = rel.replace(/\\/g, "/").replace(/^\.?\/?/, "");
  const segs = p.split("/").filter(Boolean);
  return segs[0] === "blog" || segs[0] === "search";
};

const LINK_RE = /<link rel="modulepreload"[^>]*href="([^"]+)"[^>]*>/g;

let strippedTotal = 0;
let filesScanned = 0;

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (!name.endsWith(".html")) continue;
    filesScanned++;
    const rel = full.slice(dist.length + 1);
    const blogOrSearch = isBlogOrSearch(rel);
    if (isHome(rel)) continue;
    const html = readFileSync(full, "utf8");
    let stripped = 0;
    const cleaned = html.replace(LINK_RE, (tag, href) => {
      const foreign = blogOrSearch
        ? /\/(?:Home)-[^/"]+\.js$/.test(href)
        : /\/(?:Home|blogs)-[^/"]+\.js$/.test(href);
      if (!foreign) return tag;
      stripped++;
      return "";
    });
    if (stripped > 0) {
      writeFileSync(full, cleaned);
      strippedTotal += stripped;
      console.log(`stripped ${stripped} foreign preload(s) from ${rel}`);
    }
  }
};

walk(dist);
console.log(`\nscanned ${filesScanned} html file(s); stripped ${strippedTotal} foreign preload link(s)`);