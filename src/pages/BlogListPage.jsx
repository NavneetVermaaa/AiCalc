import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import CardLink from "../components/CardLink.jsx";
import { blogCategories, getPublishedPosts } from "../data/blogs.js";
import { SITE_URL } from "../config/site";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Calcio Blog",
  description: "Guides for AI costs, startup finance, SaaS metrics, and marketing calculator strategy.",
  url: `${SITE_URL}/blog`
};

export default function BlogListPage() {
  const [query, setQuery] = useState("");
  const posts = getPublishedPosts();
  const filtered = useMemo(() => posts.filter((post) => `${post.title} ${post.description} ${post.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())).slice(0, 24), [query]);

  return (
    <>
      <SEO title="Calcio Blog" description="Guides for AI costs, startup finance, SaaS metrics, and marketing calculator strategy." path="/blog" schema={[blogSchema]} />
      <section className="container-page py-12">
        <p className="eyebrow">Content hub</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Blog</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
          <input className="min-h-12 rounded-md border border-line bg-panel px-4 text-white outline-none focus:border-mint" placeholder="Search 100 planned articles..." value={query} onChange={(event) => setQuery(event.target.value)} />
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => <Link key={category.id} className="button-secondary" to={`/blog/category/${category.id}`}>{category.title}</Link>)}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => <CardLink key={post.slug} to={`/blog/${post.slug}`} title={post.title} description={post.description} meta={`${post.readingTime} min read`} />)}
        </div>
      </section>
    </>
  );
}
