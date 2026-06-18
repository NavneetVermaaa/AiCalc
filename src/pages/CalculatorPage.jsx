import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import CalculatorTool from "../components/CalculatorTool.jsx";
import FAQ from "../components/FAQ.jsx";
import CardLink from "../components/CardLink.jsx";
import { calculatorsByCategory, getCalculator, getCategory } from "../data/calculators.js";
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
      </section>
      <CalculatorTool calculator={calculator} />
      <section className="container-page grid gap-6 py-10 lg:grid-cols-3">
        <article className="panel p-6 lg:col-span-2">
          <h2 className="text-2xl font-black text-white">Description</h2>
          <p className="mt-4 leading-7 text-slate-300">Use this calculator to turn planning assumptions into a decision-ready estimate. It is designed for quick scenario work, SEO landing pages, and internal planning conversations.</p>
          <h2 className="mt-8 text-2xl font-black text-white">Formula explanation</h2>
          <p className="mt-4 rounded-md border border-line bg-ink p-4 font-mono text-sm leading-6 text-slate-300">{calculator.formula}</p>
          <h2 className="mt-8 text-2xl font-black text-white">Examples</h2>
          <ul className="mt-4 grid gap-3 text-slate-300">{calculator.examples.map((item) => <li key={item}>- {item}</li>)}</ul>
          <h2 className="mt-8 text-2xl font-black text-white">Use cases</h2>
          <ul className="mt-4 grid gap-3 text-slate-300">{calculator.useCases.map((item) => <li key={item}>- {item}</li>)}</ul>
          <h2 className="mt-8 text-2xl font-black text-white">SEO content area</h2>
          <p className="mt-4 leading-7 text-slate-300">{calculator.title} pages should target high-intent queries, include examples with numbers, answer objections in FAQ content, and link users toward adjacent planning calculators.</p>
        </article>
        <aside className="panel h-fit p-6">
          <h2 className="text-xl font-black text-white">Internal links</h2>
          <div className="mt-4 grid gap-3">
            <Link className="button-secondary" to={`/calculators/${category.id}`}>{category.title}</Link>
            <Link className="button-secondary" to="/blog">Related guides</Link>
            <Link className="button-secondary" to="/">Home</Link>
          </div>
        </aside>
      </section>
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
