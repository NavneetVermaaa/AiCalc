import { useMemo, useState } from "react";
import SEO from "../components/SEO.jsx";
import CardLink from "../components/CardLink.jsx";
import { calculators, categories } from "../data/calculators.js";
import { getPublishedPosts } from "../data/blogs.js";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const calculatorResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return calculators.filter(
      (calc) =>
        calc.title.toLowerCase().includes(q) ||
        calc.description.toLowerCase().includes(q) ||
        calc.slug.toLowerCase().includes(q) ||
        (calc.keywords && calc.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  }, [query]);

  const blogResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return getPublishedPosts().filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)))
    );
  }, [query]);

  const totalResults = calculatorResults.length + blogResults.length;

  return (
    <>
      <SEO title="Search — Find Calculators and Articles on Calcio" description="Search 60+ free business calculators and 20+ in-depth guides on AI costs, startup metrics, marketing ROI, and finance." path="/search" noindex />
      <section className="container-page py-12">
        <p className="eyebrow">Search</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Search</h1>
        <div className="mt-6">
          <input
            className="min-h-12 w-full rounded-md border border-line bg-panel px-4 text-white outline-none focus:border-mint"
            placeholder="Search calculators and articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        {query.trim() && (
          <div className="mt-8">
            <p className="text-sm text-slate-400">{totalResults} result{totalResults !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;</p>
            {totalResults > 0 ? (
              <>
                {calculatorResults.length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-lg font-bold text-white">Calculators</h2>
                    <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {calculatorResults.map((calc) => (
                        <CardLink
                          key={calc.slug}
                          to={`/calculator/${calc.slug}`}
                          title={calc.title}
                          description={calc.description}
                          meta={categories.find((c) => c.id === calc.category)?.title || calc.category}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {blogResults.length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-lg font-bold text-white">Articles</h2>
                    <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {blogResults.map((post) => (
                        <CardLink
                          key={post.slug}
                          to={`/blog/${post.slug}`}
                          title={post.title}
                          description={post.description}
                          meta={`${post.readingTime} min read`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="mt-8 text-slate-400">No results found. Try a different search term.</p>
            )}
          </div>
        )}
        {!query.trim() && (
          <div className="mt-8">
            <p className="text-slate-400">Type a keyword to search calculators and articles. Try &ldquo;MRR&rdquo;, &ldquo;ARR&rdquo;, &ldquo;Gross Margin&rdquo;, or &ldquo;OpenAI&rdquo;.</p>
          </div>
        )}
      </section>
    </>
  );
}
