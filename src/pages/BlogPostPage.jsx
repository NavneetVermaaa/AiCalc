import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import FAQ from "../components/FAQ.jsx";
import CardLink from "../components/CardLink.jsx";
import { getPost, relatedPosts } from "../data/blogs.js";
import { calculators } from "../data/calculators.js";
import { articleSchema, faqSchema } from "../utils/schema.js";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/404" replace />;
  const related = relatedPosts(post);
  const suggestedCalculators = calculators.filter((_, index) => index % 3 === post.title.length % 3).slice(0, 3);
  const toc = ["Overview", "How to use the metric", "Examples", "FAQ"];

  return (
    <>
      <SEO title={post.title} description={post.description} path={`/blog/${post.slug}`} type="article" schema={[articleSchema(post), faqSchema(post.faq)]} />
      <article className="container-page grid gap-8 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="panel h-fit p-5 lg:sticky lg:top-24">
          <p className="eyebrow">{post.readingTime} min read</p>
          <h2 className="mt-4 font-black text-white">Table of contents</h2>
          <nav className="mt-4 grid gap-2 text-sm text-slate-300">
            {toc.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-mint">{item}</a>)}
          </nav>
        </aside>
        <div>
          <p className="eyebrow">{post.categoryTitle}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">{post.description}</p>
          <section id="overview" className="mt-10 leading-8 text-slate-300">
            <h2 className="text-2xl font-black text-white">Overview</h2>
            {post.body.map((paragraph) => <p key={paragraph} className="mt-4">{paragraph}</p>)}
          </section>
          <section id="how-to-use-the-metric" className="mt-10 leading-8 text-slate-300">
            <h2 className="text-2xl font-black text-white">How to use the metric</h2>
            <p className="mt-4">Start with a simple baseline, then model best case and conservative scenarios. Link each article to a calculator page so readers can move from explanation to action.</p>
          </section>
          <section id="examples" className="mt-10">
            <h2 className="text-2xl font-black text-white">Internal linking suggestions</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {suggestedCalculators.map((item) => <Link key={item.slug} to={`/calculator/${item.slug}`} className="button-secondary">{item.title}</Link>)}
            </div>
          </section>
        </div>
      </article>
      <FAQ faqs={post.faq} />
      <section className="container-page py-10">
        <h2 className="text-2xl font-black text-white">Related posts</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {related.map((item) => <CardLink key={item.slug} to={`/blog/${item.slug}`} title={item.title} description={item.description} meta={`${item.readingTime} min read`} />)}
        </div>
      </section>
    </>
  );
}
