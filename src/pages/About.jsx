import { Link } from "react-router-dom";
import { ArrowRight, Calculator, FileText, Users } from "lucide-react";
import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { calculators } from "../data/calculators.js";
import { organizationSchema } from "../utils/schema.js";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://calciocalc.com";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${BRAND.name}`,
  description: `${BRAND.name} provides free business, AI, startup and marketing calculators.`,
  url: `${SITE_URL}/about`,
  mainEntity: organizationSchema
};

export default function About() {
  return (
    <>
      <SEO
        title={`About ${BRAND.name}`}
        description={`${BRAND.name} provides free AI, startup, finance and marketing calculators to help businesses and individuals make smarter decisions with accurate data.`}
        path="/about"
        schema={[aboutPageSchema]}
      />
      <section className="container-page py-12 lg:py-20">
        <p className="eyebrow">About us</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black text-white sm:text-5xl lg:text-6xl">Calculate smarter. Grow faster.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          {BRAND.name} is a free collection of business calculators built for founders, marketers, and growth teams. We turn complex formulas into instant, actionable answers.
        </p>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="panel p-6">
            <Calculator className="text-mint" size={26} />
            <h2 className="mt-4 text-xl font-bold text-white">Practical tools</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Every calculator solves a real business problem. No fluff, just formulas that matter.</p>
          </div>
          <div className="panel p-6">
            <FileText className="text-mint" size={26} />
            <h2 className="mt-4 text-xl font-bold text-white">Expert guides</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Each tool comes with a detailed guide that explains the math, context, and how to act on the results.</p>
          </div>
          <div className="panel p-6">
            <Users className="text-mint" size={26} />
            <h2 className="mt-4 text-xl font-bold text-white">Built for everyone</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Whether you run a startup, a marketing agency, or a Fortune 500 team — our calculators meet you where you are.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <h2 className="text-3xl font-black text-white">What we offer</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/calculators/ai" className="panel group block p-5 transition hover:-translate-y-1 hover:border-mint">
            <p className="eyebrow">AI</p>
            <p className="mt-2 font-bold text-white">AI calculators</p>
            <p className="mt-2 text-sm text-slate-400">Cost and ROI models for OpenAI, Claude, Gemini, and AI agents.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">Explore <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
          </Link>
          <Link to="/calculators/startup" className="panel group block p-5 transition hover:-translate-y-1 hover:border-mint">
            <p className="eyebrow">Startup</p>
            <p className="mt-2 font-bold text-white">Startup calculators</p>
            <p className="mt-2 text-sm text-slate-400">Burn rate, runway, CAC, LTV, and break-even analysis tools.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">Explore <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
          </Link>
          <Link to="/calculators/marketing" className="panel group block p-5 transition hover:-translate-y-1 hover:border-mint">
            <p className="eyebrow">Marketing</p>
            <p className="mt-2 font-bold text-white">Marketing calculators</p>
            <p className="mt-2 text-sm text-slate-400">ROAS, CPC, CPM, and conversion rate tools built for growth teams.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">Explore <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
          </Link>
          <Link to="/blog" className="panel group block p-5 transition hover:-translate-y-1 hover:border-mint">
            <p className="eyebrow">Blog</p>
            <p className="mt-2 font-bold text-white">Expert guides</p>
            <p className="mt-2 text-sm text-slate-400">In-depth articles on metrics, benchmarks, and business strategy.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">Explore <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
          </Link>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <h2 className="text-3xl font-black text-white">Popular calculators</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.slice(0, 6).map((item) => (
            <Link key={item.slug} to={`/calculator/${item.slug}`} className="panel group block p-5 transition hover:-translate-y-1 hover:border-mint">
              <p className="eyebrow">{item.category || "Calculator"}</p>
              <p className="mt-2 text-xl font-bold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">Open <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
