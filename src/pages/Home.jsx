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
        description={`${BRAND.name} provides 60+ free AI, startup, finance and marketing calculators with practical guides, transparent formulas, step-by-step examples and business insights for founders and teams.`}
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

      <section className="container-page py-12">
        <p className="eyebrow">What is {BRAND.name}</p>
        <h2 className="mt-3 text-3xl font-black text-white">Free business calculators for smarter decisions</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          {BRAND.name} is a free collection of 60+ online calculators covering AI costs, startup metrics, marketing performance, and everyday finance. Every calculator shows its formula, includes a step-by-step example, and provides real-world context so you understand not just the number but what it means for your business.
        </p>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Whether you are estimating OpenAI API costs, calculating your SaaS burn rate, measuring ROAS on ad campaigns, or figuring out a loan EMI — {BRAND.name} gives you instant answers with no sign-up, no paywalls, and no data collection.
        </p>
      </section>

      <section className="container-page py-12">
        <p className="eyebrow">Who it is for</p>
        <h2 className="mt-3 text-3xl font-black text-white">Built for founders, marketers, developers and finance teams</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="panel p-5">
            <p className="font-bold text-white">SaaS founders and startup teams</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Track MRR, ARR, CAC, LTV, churn rate, burn rate, runway, quick ratio, and Rule of 40. Model unit economics before investor conversations.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">AI developers and product teams</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Compare OpenAI, Claude, and Gemini API costs. Calculate AI ROI and agent savings. Budget accurately for production deployments.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Marketers and growth teams</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Optimise ROAS, CPC, CPM, CPA, conversion rates, and marketing ROI. Plan campaigns with data-driven budget allocation.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Small business owners and freelancers</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Calculate GST, loan EMIs, mortgage payments, profit margins, salary breakdowns, and everyday percentages.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Finance professionals and students</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Compound interest, SIP returns, inflation impact, EBITDA, and net profit margin calculations with transparent formulas.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Agencies and consultants</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Client reporting, campaign budgeting, marketing efficiency ratios, and profitability analysis across multiple channels.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-xl border border-line bg-panel p-6 sm:p-8">
          <p className="eyebrow">From calculators to strategy</p>
          <h2 className="mt-3 text-2xl font-black text-white">Explore in-depth guides on the {BRAND.name} blog</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Every calculator is backed by editorial content. Our blog covers AI pricing guides, SaaS metrics handbooks, startup finance tutorials, and marketing math explained step by step. Read the <Link to="/blog" className="text-mint underline underline-offset-2 hover:brightness-110">latest articles</Link> to deepen your understanding of the metrics that drive business growth.
          </p>
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
        <div className="rounded-xl border border-line bg-panel p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-mint" size={22} />
            <p className="eyebrow">Why trust Calcio</p>
          </div>
          <h2 className="mt-3 text-2xl font-black text-white">Built with transparency</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-line bg-ink p-4">
              <p className="text-sm font-bold text-white">Free to use</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">Every calculator is free. No paywalls, no subscriptions, no credit card required.</p>
            </div>
            <div className="rounded-lg border border-line bg-ink p-4">
              <p className="text-sm font-bold text-white">No sign-up</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">No accounts, no logins. All computation happens in your browser.</p>
            </div>
            <div className="rounded-lg border border-line bg-ink p-4">
              <p className="text-sm font-bold text-white">Privacy first</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">We never store your inputs or results. Your data never leaves your device.</p>
            </div>
            <div className="rounded-lg border border-line bg-ink p-4">
              <p className="text-sm font-bold text-white">Transparent formulas</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">Every formula is shown on the page. No hidden calculations or black-box math.</p>
            </div>
            <div className="rounded-lg border border-line bg-ink p-4">
              <p className="text-sm font-bold text-white">Mobile friendly</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">All calculators work on any device&mdash;phone, tablet, or desktop.</p>
            </div>
            <div className="rounded-lg border border-line bg-ink p-4">
              <p className="text-sm font-bold text-white">Regular updates</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">We update calculators when pricing or industry standards change.</p>
            </div>
          </div>
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
