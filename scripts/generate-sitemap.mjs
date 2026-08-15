import { writeFileSync } from "node:fs";
import { calculators, categories } from "../src/data/calculators.js";
import { blogCategories, getPublishedPosts } from "../src/data/blogs.js";

const siteUrl = (process.env.VITE_SITE_URL || "https://www.calciocalc.com").replace(/\/+$/, "");
const now = new Date();
const TODAY = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

const MONTHS = {
  january: "01", february: "02", march: "03", april: "04", may: "05", june: "06",
  july: "07", august: "08", september: "09", october: "10", november: "11", december: "12"
};

const monthToLastmod = (value) => {
  const match = /^([A-Za-z]+)\s+(\d{4})$/.exec(String(value || ""));
  if (match) {
    const month = MONTHS[match[1].toLowerCase()];
    if (month) return `${match[2]}-${month}-01`;
  }
const iso = /^(\d{4}-\d{2}-\d{2})/.exec(String(value || ""));
return iso ? iso[1] : null;
};

const clampToToday = (lastmod) => (lastmod && lastmod <= TODAY ? lastmod : TODAY);

const STATIC_ROUTES = [
  { path: "/", priority: "1.0" },
  { path: "/blog", priority: "0.9" },
  { path: "/about", priority: "0.5" },
  { path: "/contact", priority: "0.5" },
  { path: "/privacy-policy", priority: "0.3" },
  { path: "/terms", priority: "0.3" },
  { path: "/cookie-policy", priority: "0.3" },
  { path: "/disclaimer", priority: "0.3" },
  { path: "/editorial-policy", priority: "0.5" }
];

const NO_INDEX_ROUTES = new Set(["/search", "/404"]);

const routes = [];

for (const route of STATIC_ROUTES) {
  if (!NO_INDEX_ROUTES.has(route.path)) routes.push({ ...route, lastmod: TODAY });
}

for (const category of categories) {
  routes.push({ path: `/calculators/${category.id}`, priority: "0.9", lastmod: TODAY });
}

for (const calculator of calculators) {
  routes.push({
    path: `/calculator/${calculator.slug}`,
    priority: "0.8",
    lastmod: clampToToday(monthToLastmod(calculator.lastUpdated)) || TODAY
  });
}

for (const blogCategory of blogCategories) {
  routes.push({ path: `/blog/category/${blogCategory.id}`, priority: "0.7", lastmod: TODAY });
}

for (const post of getPublishedPosts()) {
  routes.push({
    path: `/blog/${post.slug}`,
    priority: "0.8",
    lastmod: clampToToday(monthToLastmod(post.updatedDate || post.publishedDate || post.date)) || TODAY
  });
}

const seen = new Set();
const unique = [];
for (const route of routes) {
  if (seen.has(route.path)) continue;
  seen.add(route.path);
  unique.push(route);
}

unique.sort((a, b) => a.path.localeCompare(b.path));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map((route) => `  <url><loc>${siteUrl}${route.path}</loc><lastmod>${route.lastmod}</lastmod><priority>${route.priority}</priority></url>`).join("\n")}
</urlset>
`;

writeFileSync("dist/sitemap.xml", xml);

const count = (predicate) => unique.filter(predicate).length;
console.log(`Sitemap written (base: ${siteUrl}): ${unique.length} URLs (${unique.length - routes.length} duplicates removed if any)`);
console.log(`  static: ${STATIC_ROUTES.length}`);
console.log(`  calculator category hubs: ${categories.length}`);
console.log(`  calculators: ${calculators.length}`);
console.log(`  blog category hubs: ${blogCategories.length}`);
console.log(`  blog posts: ${getPublishedPosts().length}`);
console.log(`  real lastmods from data: ${count((r) => r.lastmod !== TODAY)} / ${unique.length}`);