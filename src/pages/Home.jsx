import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Gauge, LineChart, Lock, Rocket, ShieldCheck, Wrench } from "lucide-react";
import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { calculators, categories } from "../data/calculators.js";
import { getPublishedPosts } from "../data/blogs.js";
import { faqSchema, organizationSchema, webApplicationSchema, webSiteSchema } from "../utils/schema.js";

const iconMap = { ai: Gauge, startup: Rocket, marketing: LineChart, finance: Wrench };

const popularSlugs = [
  "openai-cost-calculator",
  "mrr-calculator",
  "cac-calculator",
  "roas-calculator",
  "emi-calculator",
  "ai-roi-calculator"
];

const examples = {
  ai: "Estimate GPT spend before launch.",
  startup: "Check MRR, CAC, runway, and LTV.",
  marketing: "Compare ROAS, CPC, CPA, and CTR.",
  finance: "Run EMI, GST, SIP, and margin math."
};

const trustItems = [
  { title: "No signup", copy: "Open a calculator and use it right away.", icon: BadgeCheck },
  { title: "Private inputs", copy: "Calculator entries stay in your browser.", icon: Lock },
  { title: "Formulas shown", copy: "Every result includes the math behind it.", icon: ShieldCheck },
  { title: "Updated pages", copy: "Pricing and benchmarks are refreshed when they change.", icon: Gauge }
];

const homepageFaqs = [
  { question: "How accurate are the calculators?", answer: "Each calculator uses visible formulas and standard financial or mathematical definitions. For provider pricing and benchmarks, we cite sources on the related guide or calculator page when available." },
  { question: "Do you store my calculator inputs?", answer: "No. Calculator inputs and results stay in your browser. CalcioCalc does not collect or store the numbers you enter." },
  { question: "Can I use the results for business planning?", answer: "Yes, the tools are built for budgeting, forecasting, and quick business checks. Treat results as estimates and verify critical financial decisions with a qualified professional." },
  { question: "How often are calculators updated?", answer: "We update formulas, pricing assumptions, and guides when provider pricing, industry benchmarks, or calculation standards change." }
];

export default function Home() {
  const popularCalculators = popularSlugs.map((slug) => calculators.find((item) => item.slug === slug)).filter(Boolean);
  const latestPosts = getPublishedPosts().slice(0, 4);

  return (
    <>
      <SEO
        title="AI, SaaS, Startup, Finance & Marketing Calculators - Calcio"
        description="Free AI, SaaS, startup, marketing and finance calculators with transparent formulas and practical examples. Calculate ROI, CAC, LTV, MRR, API costs, ROAS and more."
        schema={[webSiteSchema, organizationSchema, webApplicationSchema, faqSchema(homepageFaqs)]}
      />

      <section className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">{BRAND.name}Calc</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Business calculators with the formula included.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Estimate AI costs, SaaS metrics, campaign returns, and finance numbers. No signup, no paywall, no hidden math.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/calculator/openai-cost-calculator" className="button-primary">
              Estimate AI Costs <ArrowRight size={17} />
            </Link>
            <Link to="#popular-calculators" className="button-secondary">
              Browse Calculators
            </Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-y border-line py-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Library</dt>
              <dd className="mt-1 text-2xl font-black text-white">60+</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Cost</dt>
              <dd className="mt-1 text-2xl font-black text-white">Free</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Privacy</dt>
              <dd className="mt-1 text-2xl font-black text-white">Local</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-line bg-panel p-5 shadow-clean">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="eyebrow">Worked example</p>
              <p className="mt-2 text-lg font-bold text-white">OpenAI API monthly cost</p>
            </div>
            <span className="rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">Live preview</span>
          </div>
          <div className="mt-5 grid gap-3 text-sm">
            <div className="flex items-center justify-between rounded-md bg-ink px-3 py-2">
              <span className="text-slate-300">Monthly requests</span>
              <span className="font-bold text-white">100,000</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-ink px-3 py-2">
              <span className="text-slate-300">Input / output tokens</span>
              <span className="font-bold text-white">800 / 300</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-ink px-3 py-2">
              <span className="text-slate-300">Estimated spend</span>
              <span className="text-2xl font-black text-accent">$500/mo</span>
            </div>
          </div>
          <p className="mt-5 rounded-md border border-line bg-ink p-4 font-mono text-xs leading-6 text-slate-300">
            (requests x input tokens x input price) + output cost
          </p>
        </div>
      </section>

      <section id="popular-calculators" className="container-page py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Popular calculators</p>
            <h2 className="mt-3 text-3xl font-black text-white">Start with the numbers people check most.</h2>
          </div>
          <Link to="/search" className="button-secondary md:self-end">
            Search all tools
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularCalculators.map((calculator, index) => (
            <Link
              key={calculator.slug}
              to={`/calculator/${calculator.slug}`}
              className={`group rounded-lg border border-line bg-panel p-5 transition hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink ${index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{calculator.category}</p>
              <h3 className="mt-3 text-xl font-black text-white group-hover:text-accent">{calculator.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{calculator.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">
                Open calculator <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="categories" className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Who it helps</p>
            <h2 className="mt-3 text-3xl font-black text-white">One library for AI, SaaS, marketing, and finance checks.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Use CalcioCalc when you need a fast estimate, a visible formula, and a plain-English example before you make a decision.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = iconMap[category.id];
              return (
                <Link key={category.id} to={`/calculators/${category.id}`} className="group rounded-lg border border-line bg-panel p-5 transition hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink">
                  <Icon className="text-accent" size={24} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black text-white group-hover:text-accent">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{examples[category.id]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ title, copy, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-line bg-ink p-5">
              <Icon className="text-accent" size={22} aria-hidden="true" />
              <h3 className="mt-4 font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Latest guides</p>
            <h2 className="mt-3 text-3xl font-black text-white">Read the context behind the calculators.</h2>
          </div>
          <Link to="/blog" className="button-secondary md:self-end">View all guides</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group rounded-lg border border-line bg-panel p-5 transition hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{post.readingTime} min read</p>
              <h3 className="mt-3 text-lg font-bold text-white group-hover:text-accent">{post.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{post.description.slice(0, 120)}{post.description.length > 120 ? "..." : ""}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-white">Only the details that affect trust.</h2>
          </div>
          <div className="grid gap-3">
            {homepageFaqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-line bg-panel p-5">
                <summary className="cursor-pointer font-bold text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink">{faq.question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-lg border border-line bg-panel p-8 text-center">
          <h2 className="text-3xl font-black text-white">Run the numbers before you decide.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Pick a calculator, enter your assumptions, and see the formula behind the answer.
          </p>
          <Link to="/search" className="button-primary mt-6 inline-flex items-center gap-2">
            Find a Calculator <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
