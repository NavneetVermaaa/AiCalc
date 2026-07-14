import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import CalculatorTool from "../components/CalculatorTool.jsx";
import FAQ from "../components/FAQ.jsx";
import CardLink from "../components/CardLink.jsx";
import { calculatorsByCategory, getCalculator, getCategory } from "../data/calculators.js";
import { getInternalLinks } from "../data/internalLinks.js";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "../utils/schema.js";

export default function CalculatorPage() {
  const { slug } = useParams();
  const calculator = getCalculator(slug);
  if (!calculator) return <Navigate to="/404" replace />;
  const category = getCategory(calculator.category);
  const related = calculatorsByCategory(calculator.category).filter((item) => item.slug !== calculator.slug).slice(0, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: category.title, path: `/calculators/${category.id}` },
    { name: calculator.title, path: `/calculator/${calculator.slug}` }
  ];

  const linkedSlugs = getInternalLinks(calculator);
  const relatedLinks = linkedSlugs.filter((s) => s !== calculator.slug).map((s) => getCalculator(s)).filter(Boolean);

  return (
    <>
      <SEO
        title={`${calculator.title} - Free Online Tool`}
        description={calculator.description}
        path={`/calculator/${calculator.slug}`}
        schema={[webApplicationSchema, breadcrumbSchema(crumbs), faqSchema(calculator.faqs)]}
      />
      <Breadcrumbs items={crumbs} />
      <section className="container-page py-10">
        <p className="eyebrow">{category.title}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">{calculator.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{calculator.description}</p>
        <p className="mt-3 text-xs text-slate-500">Last updated: {calculator.lastUpdated || "July 2026"}</p>
      </section>
      <CalculatorTool calculator={calculator} />
      <section className="container-page grid gap-6 py-10 lg:grid-cols-3">
        <article className="panel p-6 lg:col-span-2">
          {calculator.whatIsIt && (
            <>
              <h2 className="text-2xl font-black text-white">What is the {calculator.title}?</h2>
              <p className="mt-4 leading-7 text-slate-300">{calculator.whatIsIt}</p>
            </>
          )}

          {calculator.howItWorks && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">How does it work?</h2>
              <p className="mt-4 leading-7 text-slate-300">{calculator.howItWorks}</p>
            </>
          )}

          <h2 className="mt-8 text-2xl font-black text-white">Formula</h2>
          <p className="mt-4 rounded-md border border-line bg-ink p-4 font-mono text-sm leading-6 text-slate-300">{calculator.formula}</p>

          {calculator.stepByStep && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">Step-by-step example</h2>
              <p className="mt-4 leading-7 text-slate-300">{calculator.stepByStep}</p>
            </>
          )}

          {calculator.realWorldExample && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">Real-world example</h2>
              <div className="mt-4 rounded-md border border-line bg-ink p-4 leading-7 text-slate-300">
                <p>{calculator.realWorldExample}</p>
              </div>
            </>
          )}

          {calculator.whenToUse && calculator.whenToUse.length > 0 && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">When should you use it?</h2>
              <ul className="mt-4 grid gap-3 text-slate-300">
                {calculator.whenToUse.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </>
          )}

          {calculator.benefits && calculator.benefits.length > 0 && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">Benefits</h2>
              <ul className="mt-4 grid gap-3 text-slate-300">
                {calculator.benefits.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </>
          )}

          {calculator.commonMistakes && calculator.commonMistakes.length > 0 && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">Common mistakes</h2>
              <ul className="mt-4 grid gap-3 text-slate-300">
                {calculator.commonMistakes.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </>
          )}

          {calculator.examples && calculator.examples.length > 0 && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">Examples</h2>
              <ul className="mt-4 grid gap-3 text-slate-300">
                {calculator.examples.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </>
          )}

          {calculator.useCases && calculator.useCases.length > 0 && (
            <>
              <h2 className="mt-8 text-2xl font-black text-white">Use cases</h2>
              <ul className="mt-4 grid gap-3 text-slate-300">
                {calculator.useCases.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </>
          )}
        </article>
        <aside className="panel h-fit p-6">
          <h2 className="text-xl font-black text-white">Internal links</h2>
          <div className="mt-4 grid gap-3">
            <Link className="button-secondary" to={`/calculators/${category.id}`}>{category.title}</Link>
            {relatedLinks.slice(0, 3).map((item) => (
              <Link key={item.slug} className="button-secondary" to={`/calculator/${item.slug}`}>{item.title}</Link>
            ))}
            {calculator.relatedGuide ? <Link className="button-secondary" to={`/blog/${calculator.relatedGuide.slug}`}>{calculator.relatedGuide.title}</Link> : <Link className="button-secondary" to="/blog">Related guides</Link>}
          </div>
        </aside>
      </section>
      <section className="container-page py-10">
        <div className="mx-auto max-w-3xl rounded-xl border border-line bg-panel p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Accuracy notice</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            All calculations are for informational and educational purposes only. Results are estimates based on the inputs you provide. Verify critical numbers with a qualified professional before making decisions.
          </p>
        </div>
      </section>

      {calculator.references && calculator.references.length > 0 && (
        <section className="container-page py-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-black text-white">References</h2>
            <ul className="mt-4 space-y-2">
              {calculator.references.map((ref) => (
                <li key={ref.name}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-sm text-mint hover:underline">{ref.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FAQ faqs={calculator.faqs} />
      <section className="container-page py-10">
        <h2 className="text-2xl font-black text-white">Related calculators</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {related.map((item) => <CardLink key={item.slug} to={`/calculator/${item.slug}`} title={item.title} description={item.description} meta="Related" />)}
        </div>
      </section>
    </>
  );
}
