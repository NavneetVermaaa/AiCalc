import { writeFileSync } from "node:fs";
import { calculators, categories } from "../src/data/calculators.js";
import { blogCategories, getPublishedPosts } from "../src/data/blogs.js";

const siteUrl = process.env.VITE_SITE_URL || "https://calciocalc.com";
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/blog", priority: "0.8" },
  { path: "/about", priority: "0.7" },
  { path: "/contact", priority: "0.7" },
  { path: "/privacy-policy", priority: "0.5" },
  { path: "/terms", priority: "0.5" },
  { path: "/cookie-policy", priority: "0.5" },
  { path: "/disclaimer", priority: "0.5" },
  { path: "/editorial-policy", priority: "0.5" },
  ...categories.map((item) => ({ path: `/calculators/${item.id}`, priority: "0.9" })),
  ...calculators.map((item) => ({ path: `/calculator/${item.slug}`, priority: "0.9" })),
  ...blogCategories.map((item) => ({ path: `/blog/category/${item.id}`, priority: "0.7" })),
  ...getPublishedPosts().filter((item) => item.wordCount > 1000).map((item) => ({ path: `/blog/${item.slug}`, priority: "0.6" }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route.path}</loc><priority>${route.priority}</priority></url>`).join("\n")}
</urlset>
`;

writeFileSync("dist/sitemap.xml", xml);
