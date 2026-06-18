import { Link } from "react-router-dom";
import { ArrowRight, Gauge, LineChart, Rocket } from "lucide-react";
import SEO from "../components/SEO.jsx";
import CardLink from "../components/CardLink.jsx";
import { calculators, categories } from "../data/calculators.js";
import { organizationSchema, webApplicationSchema } from "../utils/schema.js";

const iconMap = { ai: Gauge, startup: Rocket, marketing: LineChart };

export default function Home() {
  return (
    <>
      <SEO
        title="AI Calc Pro - AI, Startup, and Marketing Calculators"
        description="Free SEO-first calculators for OpenAI costs, AI ROI, runway, CAC, LTV, ROAS, CPC, CPM, and conversion planning."
        schema={[organizationSchema, webApplicationSchema]}
      />
      <section className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">Founder-grade calculator platform</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">AI Calc Pro</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Plan AI spend, startup runway, and marketing performance with fast calculators built for operators who need clean numbers and searchable content.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/calculators/ai" className="button-primary">Explore calculators <ArrowRight size={17} /></Link>
            <Link to="/blog" className="button-secondary">Read guides</Link>
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
      <section className="container-page py-12">
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
