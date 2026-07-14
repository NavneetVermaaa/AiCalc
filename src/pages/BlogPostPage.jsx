import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import FAQ from "../components/FAQ.jsx";
import CardLink from "../components/CardLink.jsx";
import FormulaCard from "../components/FormulaCard.jsx";
import CalculatorCTA from "../components/CalculatorCTA.jsx";
import KeyTakeaways from "../components/KeyTakeaways.jsx";
import ProTip from "../components/ProTip.jsx";
import WarningBox from "../components/WarningBox.jsx";
import BenchmarkTable from "../components/BenchmarkTable.jsx";
import ComparisonTable from "../components/ComparisonTable.jsx";
import DefinitionCard from "../components/DefinitionCard.jsx";
import RelatedMetrics from "../components/RelatedMetrics.jsx";
import { getPost, getPublishedPosts, getPublishedRelatedPosts } from "../data/blogs.js";
import { calculators } from "../data/calculators.js";
import { articleSchema, faqSchema } from "../utils/schema.js";

const entityLinks = [
  ...calculators.map((c) => ({ name: c.title, to: `/calculator/${c.slug}` })),
  ...getPublishedPosts().map((p) => ({ name: p.title, to: `/blog/${p.slug}` })),
];

const sortedEntities = entityLinks
  .filter((e, i, a) => a.findIndex((x) => x.name === e.name) === i)
  .sort((a, b) => b.name.length - a.name.length);

function SmartText({ text }) {
  const parts = useMemo(() => {
    const result = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      let earliest = null;
      let matched = null;

      for (const entity of sortedEntities) {
        const idx = remaining.indexOf(entity.name);
        if (idx !== -1 && (earliest === null || idx < earliest)) {
          earliest = idx;
          matched = entity;
        }
      }

      if (earliest === null) {
        result.push(remaining);
        break;
      }

      if (earliest > 0) {
        result.push(remaining.slice(0, earliest));
      }

      result.push(
        <Link key={key++} to={matched.to} className="text-mint underline underline-offset-2 hover:brightness-110 decoration-mint/40">
          {matched.name}
        </Link>
      );

      remaining = remaining.slice(earliest + matched.name.length);
    }

    return result;
  }, [text]);

  return <>{parts}</>;
}

const sectionRenderers = {
  heading(s, i) {
    const id = s.content.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return <h2 key={i} id={id} className="mt-10 scroll-mt-24 text-2xl font-black text-white">{s.content}</h2>;
  },
  text(s, i) {
    return <p key={i} className="mt-4 leading-8 text-slate-300"><SmartText text={s.content} /></p>;
  },
  takeaways(s, i) {
    return <KeyTakeaways key={i} items={s.items} />;
  },
  formula(s, i) {
    return <FormulaCard key={i} label={s.label} formula={s.formula} note={s.note} />;
  },
  cta(s, i) {
    return <CalculatorCTA key={i} slug={s.slug} title={s.title} description={s.description} />;
  },
  benchmark(s, i) {
    return <BenchmarkTable key={i} caption={s.caption} headers={s.headers} rows={s.rows} />;
  },
  comparison(s, i) {
    return <ComparisonTable key={i} caption={s.caption} headers={s.headers} rows={s.rows} />;
  },
  warning(s, i) {
    return <WarningBox key={i}>{s.content}</WarningBox>;
  },
  proTip(s, i) {
    return <ProTip key={i}>{s.content}</ProTip>;
  },
  definition(s, i) {
    return <DefinitionCard key={i} term={s.term} definition={s.definition} />;
  },
  relatedMetrics(s, i) {
    return <RelatedMetrics key={i} items={s.items} />;
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/404" replace />;
  const related = getPublishedRelatedPosts(post);

  const hasSections = Array.isArray(post.sections);
  const sections = post.sections || [];
  const body = post.body || [];

  const tocItems = useMemo(() => {
    if (hasSections) {
      return sections
        .filter((s) => s.type === "heading")
        .map((s) => ({ label: s.content, id: s.content.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") }));
    }
    return [];
  }, [hasSections, sections]);

  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const headings = document.querySelectorAll("h2[id]");
    if (headings.length === 0) return;

    const visibleIds = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });

        const firstMatch = Array.from(headings).find((h) => visibleIds.has(h.id));
        if (firstMatch) {
          setActiveId(firstMatch.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    headings.forEach((h) => observer.observe(h));
    setActiveId(headings[0].id);

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-line/40">
        <div className="h-full bg-mint transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>
      <SEO title={post.metaTitle || post.title} description={post.description} path={`/blog/${post.slug}`} type="article" schema={[articleSchema(post), faqSchema(post.faq)]} noindex={!post.published} />
      <article className="container-page grid gap-8 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="panel h-fit p-5 lg:sticky lg:top-[100px]">
          <p className="eyebrow">{post.readingTime} min read</p>
          {tocItems.length > 0 && (
            <>
              <h2 className="mt-4 font-black text-white">Table of contents</h2>
              <nav className="mt-4 grid gap-2 text-sm">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`transition-colors ${activeId === item.id ? "font-semibold text-mint" : "text-slate-300 hover:text-mint"}`}
                  >
                    {activeId === item.id ? "\u2713 " : "\u25CB "}{item.label}
                  </a>
                ))}
              </nav>
            </>
          )}
        </aside>
        <div>
          <p className="eyebrow">{post.categoryTitle}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-400">
            <span>By {post.author}</span>
            <span>Published {new Date(post.publishedDate || post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            {(post.updatedDate && post.updatedDate !== (post.publishedDate || post.date)) && <span className="rounded border border-mint/20 bg-mint/5 px-2 py-0.5 font-medium text-mint">Updated {new Date(post.updatedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>}
            <span>{post.readingTime} min read</span>
          </div>

          {hasSections
            ? sections.map((s, i) => {
                const render = sectionRenderers[s.type];
                return render ? render(s, i) : null;
              })
            : <div className="mt-10">{body.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-slate-300"><SmartText text={paragraph} /></p>)}</div>
          }

          <section className="mt-10">
            <h2 className="text-2xl font-black text-white">Related Calculators</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {calculators.filter((_, index) => index % 3 === post.title.length % 3).slice(0, 3).map((item) => (
                <CardLink key={item.slug} to={`/calculator/${item.slug}`} title={item.title} description={item.description} />
              ))}
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
