import { writeFileSync } from "node:fs";
import { calculators, categories } from "../src/data/calculators.js";
import { blogCategories, posts } from "../src/data/blogs.js";

const siteUrl = process.env.VITE_SITE_URL || "https://ai-calc-one.vercel.app";
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/blog", priority: "0.8" },
  ...categories.map((item) => ({ path: `/calculators/${item.id}`, priority: "0.9" })),
  ...calculators.map((item) => ({ path: `/calculator/${item.slug}`, priority: "0.9" })),
  ...blogCategories.map((item) => ({ path: `/blog/category/${item.id}`, priority: "0.7" })),
  ...posts.map((item) => ({ path: `/blog/${item.slug}`, priority: "0.6" }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route.path}</loc><priority>${route.priority}</priority></url>`).join("\n")}
</urlset>
`;

writeFileSync("dist/sitemap.xml", xml);
