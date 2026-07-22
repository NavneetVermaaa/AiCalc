import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Gauge, LineChart, Lock, Rocket, ShieldCheck, Wrench } from "lucide-react";
import SEO from "../components/SEO.jsx";
import CardLink from "../components/CardLink.jsx";
import { BRAND } from "../config/brand";
import { calculators, categories } from "../data/calculators.js";
import { getPublishedPosts } from "../data/blogs.js";
import { organizationSchema, webApplicationSchema } from "../utils/schema.js";

const iconMap = { ai: Gauge, startup: Rocket, marketing: LineChart, finance: Wrench };

export default function Home() {
  return (
    <>
      <SEO
        title="Free AI, SaaS, Startup, Finance & Marketing Calculators | CalcioCalc"
        description={`${BRAND.name} provides 60+ free AI, SaaS, startup, marketing and finance calculators with transparent formulas, practical examples and detailed guides. Calculate ROI, CAC, LTV, MRR, API costs, ROAS and more.`}
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

      <section className="container-page py-12">
        <p className="eyebrow">About this site</p>
        <h2 className="mt-3 text-3xl font-black text-white">What is {BRAND.name}Calc?</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          {BRAND.name}Calc is a free online resource with 60+ calculators covering AI costs, SaaS metrics, startup finance, marketing ROI, and everyday business math. Every tool shows its formula, includes a worked example, and explains what the result means so you can make informed decisions.
        </p>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Unlike black-box tools, we surface the math behind every calculation. No sign-up, no paywalls, no data tracking — just honest calculators built for real business use.
        </p>
      </section>

      <section className="container-page py-12">
        <p className="eyebrow">Benefits</p>
        <h2 className="mt-3 text-3xl font-black text-white">Why Use {BRAND.name}Calc?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="panel p-5">
            <p className="font-bold text-white">Built for practical business decisions</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Every calculator solves a real problem — estimating API costs, modelling unit economics, planning ad budgets, or running financial scenarios. No theory without context.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Transparent formulas you can verify</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Each tool displays its formula and shows the step-by-step working so you understand exactly how the result is derived.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Free, private, no sign-up required</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">All computation happens in your browser. We never store your inputs, sell data, or require an account.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Fresh content updated regularly</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Calculator formulas and blog guides are reviewed and updated when pricing changes, new benchmarks are published, or industry standards evolve.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <p className="eyebrow">Who it is for</p>
        <h2 className="mt-3 text-3xl font-black text-white">Who Is {BRAND.name}Calc For?</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="panel p-5">
            <p className="font-bold text-white">SaaS and startup founders</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Model MRR, ARR, burn rate, runway, CAC, LTV, churn, and unit economics before investor conversations.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">AI and engineering teams</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Compare OpenAI, Claude, and Gemini API costs. Calculate AI agent savings and budget for production.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Marketing and growth teams</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Optimise ROAS, CPC, CPA, CPM, conversion rates, and marketing efficiency across channels.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Small business owners</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Calculate GST, EMIs, loan payments, profit margins, salary breakdowns, and everyday percentages.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Finance professionals</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Compound interest, SIP returns, inflation impact, EBITDA, and net profit margin with transparent formulas.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Agencies and consultants</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Client reporting, campaign budgeting, marketing efficiency ratios, and multi-channel profitability.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Students and educators</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Learn real-world business math with clear examples and visible formulas across every category.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <p className="eyebrow">Categories</p>
        <h2 className="mt-3 text-3xl font-black text-white">Explore Our Calculator Categories</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="panel p-5">
            <p className="font-bold text-white">AI cost calculators</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Estimate and reduce API costs for OpenAI, Claude, and Gemini. Calculate AI ROI, agent savings, and prompt costs to budget accurately for production deployments.</p>
            <Link to="/calculators/ai" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">View AI calculators <ChevronRight size={16} /></Link>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Startup metrics calculators</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Understand why CAC, LTV, MRR, ARR, churn, burn rate, and runway matter for your business stage. Model unit economics and plan fundraising with confidence.</p>
            <Link to="/calculators/startup" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">View startup calculators <ChevronRight size={16} /></Link>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Marketing ROI calculators</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Discover how ROAS, CPC, CPM, CPA, conversion rate, and CLV:CAC ratio help growth teams optimise campaigns and allocate budgets across paid channels.</p>
            <Link to="/calculators/marketing" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">View marketing calculators <ChevronRight size={16} /></Link>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Finance calculators</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Master everyday financial calculations — GST, EMI, loans, mortgages, SIP, compound interest, profit margin, salary breakdown, and currency conversion.</p>
            <Link to="/calculators/finance" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint">View finance calculators <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-xl border border-line bg-panel p-6 sm:p-8">
          <p className="eyebrow">Latest guides</p>
          <h2 className="mt-3 text-2xl font-black text-white">Learn With Our Practical Guides</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Each calculator is backed by a detailed guide covering formulas, benchmarks, and actionable strategies. Read the latest articles to deepen your understanding of AI pricing, startup metrics, marketing math, and business finance.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {getPublishedPosts().slice(0, 4).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block rounded-lg border border-line bg-ink p-4 transition hover:border-mint">
                <p className="text-sm font-bold text-white">{post.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{post.description.slice(0, 120)}{post.description.length > 120 ? "..." : ""}</p>
                <p className="mt-2 text-xs text-mint">{post.readingTime} min read</p>
              </Link>
            ))}
          </div>
          <Link to="/blog" className="mt-5 inline-flex items-center gap-2 font-bold text-mint">View all guides <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="container-page py-12">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-3xl font-black text-white">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4">
          <div className="panel p-5">
            <p className="font-bold text-white">Is {BRAND.name}Calc really free?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Yes. Every calculator on {BRAND.name}Calc is completely free. No paywalls, no subscriptions, no credit card required. All computation happens in your browser with no data sent to any server.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Do I need to create an account?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">No. There are no accounts, logins, or sign-ups. You can use any calculator instantly without providing any personal information.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">How accurate are the calculators?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">We test each calculator against known values and authoritative sources. All formulas are displayed so you can verify the math. We update calculations when pricing or standards change.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Do you store my data or inputs?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">No. All calculator inputs and results stay in your browser. We do not collect, store, or transmit any data you enter. Your privacy is built into every tool.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">What categories of calculators are available?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">We cover AI cost estimation, startup and SaaS metrics, marketing ROI and growth analytics, and everyday finance — over 60 calculators across four categories.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">How often are calculators updated?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">We update calculators whenever provider pricing changes, new industry benchmarks are published, or calculation standards evolve. Our blog also tracks notable changes.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Where do the formulas and benchmarks come from?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Formulas follow standard financial and mathematical definitions. Benchmarks draw from published industry reports, provider pricing pages, and authoritative sources cited in each guide.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Can I embed or share a calculator?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">You can share any calculator by copying its URL. Direct embedding is not currently supported, but you can link to any page freely.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">How is {BRAND.name}Calc different from other calculator sites?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">We show every formula and step-by-step working, require no sign-up, collect no data, and pair every calculator with an in-depth editorial guide. Our focus is on business and technical audiences, not general consumers.</p>
          </div>
          <div className="panel p-5">
            <p className="font-bold text-white">Can I use these calculators for commercial or business purposes?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Yes. Our calculators are designed for startups, agencies, SaaS businesses, finance teams, consultants, and enterprises. You can use the results for budgeting, forecasting, planning, and business analysis.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-xl border border-line bg-panel p-8 text-center">
          <h2 className="text-3xl font-black text-white">Ready to calculate with confidence?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Explore 60+ free AI, SaaS, marketing, startup, and finance calculators designed to help you make smarter business decisions.
          </p>
          <Link to="/calculators/ai" className="button-primary mt-6 inline-flex items-center gap-2">Explore All Calculators <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
