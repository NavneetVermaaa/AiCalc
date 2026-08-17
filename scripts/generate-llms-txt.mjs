import { writeFileSync } from "node:fs";
import { calculators, categories } from "../src/data/calculators.js";
import { getPublishedPosts } from "../src/data/blogs.js";

const siteUrl = (process.env.VITE_SITE_URL || "https://www.calciocalc.com").replace(/\/+$/, "");

const CATEGORY_ORDER = ["ai", "startup", "marketing", "finance"];

const orderedCategories = CATEGORY_ORDER
  .map((id) => categories.find((category) => category.id === id))
  .filter(Boolean);

const orderedCalculators = [...calculators].sort(
  (a, b) =>
    CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category) ||
    a.title.localeCompare(b.title)
);

const publishedPosts = getPublishedPosts().sort(
  (a, b) => String(b.publishedDate || b.date).localeCompare(String(a.publishedDate || a.date))
);

const link = (name, url, description) =>
  description ? `- [${name}](${url}): ${description}` : `- [${name}](${url})`;

const lines = [];
lines.push("# Calcio — Free Business, AI & Marketing Calculators");
lines.push("");
lines.push("> Calcio provides 60+ free online calculators for AI costs, startup metrics, marketing performance, and everyday finance. No sign-up required. All computation happens in your browser.");
lines.push("");
lines.push("## Calculators");
lines.push("");
for (const category of orderedCategories) {
  lines.push(link(category.title, `${siteUrl}/calculators/${category.id}`, category.description));
}
for (const calculator of orderedCalculators) {
  lines.push(link(calculator.title, `${siteUrl}/calculator/${calculator.slug}`, calculator.description));
}
lines.push("");
lines.push("## Guides");
lines.push("");
for (const post of publishedPosts) {
  lines.push(link(post.title, `${siteUrl}/blog/${post.slug}`, post.description));
}
lines.push("");
lines.push("## Optional");
lines.push("");
lines.push(link("Blog", `${siteUrl}/blog`));
lines.push(link("About", `${siteUrl}/about`));
lines.push(link("Contact", `${siteUrl}/contact`));
lines.push(link("Editorial Policy", `${siteUrl}/editorial-policy`));

writeFileSync("dist/llms.txt", `${lines.join("\n")}\n`);

console.log(`llms.txt written to dist/ (base: ${siteUrl})`);
console.log(`  category hubs: ${orderedCategories.length}`);
console.log(`  calculators: ${orderedCalculators.length}`);
console.log(`  blog posts: ${publishedPosts.length}`);