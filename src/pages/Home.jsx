import { Link } from "react-router-dom";
import { ArrowRight, Gauge, LineChart, Lock, Rocket, ShieldCheck, Wrench } from "lucide-react";
import SEO from "../components/SEO.jsx";
import CardLink from "../components/CardLink.jsx";
import { BRAND } from "../config/brand";
import { calculators, categories } from "../data/calculators.js";
import { organizationSchema, webApplicationSchema } from "../utils/schema.js";

const iconMap = { ai: Gauge, startup: Rocket, marketing: LineChart, finance: Wrench };

export default function Home() {
  return (
    <>
      <SEO
        title={`${BRAND.name} – Free Business, AI & Marketing Calculators`}
        description={`${BRAND.name} provides free AI, startup, finance and marketing calculators with practical guides, formulas, examples and business insights.`}
        schema={[organizationSchema, webApplicationSchema]}
      />
      <section className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">{BRAND.name}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">{BRAND.tagline}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Free AI, Startup, Finance and Marketing calculators built to help businesses make better decisions.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/calculators/ai" className="button-primary">Explore Calculators <ArrowRight size={17} /></Link>
            <Link to="#categories" className="button-secondary">Browse Categories</Link>
          </div>
        </div>
        <div className="grid gap-3">
          {calculators.slice(0, 6).map((item) => (
            <Link key={item.slug} to={`/calculator/${item.slug}`} className="flex items-center justify-between rounded-lg border border-line bg-white/[0.04] p-4 transition hover:border-mint">
              <span>
                <span className="block font-bold text-white">{item.title}</span>
                <span className="text-sm text-slate-400">{item.resultLabel}</span>
              </span>
              <ArrowRight className="text-mint" size={18} />
            </Link>
          ))}
        </div>
      </section>
      <section id="categories" className="container-page py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = iconMap[category.id];
            return (
              <div key={category.id} className="panel p-5">
                <Icon className="text-mint" size={26} />
                <h2 className="mt-4 text-2xl font-black text-white">{category.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
                <Link to={`/calculators/${category.id}`} className="mt-5 inline-flex items-center gap-2 font-bold text-mint">View category <ArrowRight size={16} /></Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container-page py-12">
        <p className="eyebrow">Popular tools</p>
        <h2 className="mt-3 text-3xl font-black text-white">Calculator library</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.slice(0, 9).map((item) => (
            <CardLink key={item.slug} to={`/calculator/${item.slug}`} title={item.title} description={item.description} meta={item.category} />
          ))}
        </div>
      </section>
    </>
  );
}
