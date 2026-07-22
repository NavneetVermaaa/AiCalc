import { useState, useEffect, useCallback } from "react";
import { ArrowRight, BarChart3, Menu, Search, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { BRAND } from "../config/brand";
import { categories } from "../data/categories.js";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const nav = [
  ...categories.map((c) => [c.id === "ai" ? "AI" : capitalize(c.id), `/calculators/${c.id}`]),
  ["Blog", "/blog"]
];

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, close]);

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-mint focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/88 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 text-lg font-black text-white" aria-label={`${BRAND.name} home`}>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-mint text-ink"><BarChart3 size={20} /></span>
            {BRAND.name}
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {nav.map(([label, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? "bg-white/10 text-mint" : "text-slate-300 hover:text-white"}`}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/search" className="button-secondary hidden sm:inline-flex"><Search size={16} /> Search</Link>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="button-secondary md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-[opacity,visibility] duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-modal="true"
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div
          className={`fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />
        <div
          className={`fixed right-0 top-0 flex h-full w-72 flex-col bg-panel border-l border-line p-6 shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={close}
            className="self-end button-secondary p-2"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
          <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
            {nav.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                onClick={close}
                className={({ isActive }) => `rounded-md px-4 py-3 text-base font-semibold ${isActive ? "bg-white/10 text-mint" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto border-t border-line pt-6">
            <Link to="/about" onClick={close} className="block rounded-md px-4 py-2 text-sm text-slate-400 hover:text-white">About</Link>
            <Link to="/contact" onClick={close} className="block rounded-md px-4 py-2 text-sm text-slate-400 hover:text-white">Contact</Link>
          </div>
        </div>
      </div>

      <main id="main">{children}</main>
      <footer className="border-t border-line bg-ink">
        <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xl font-black text-white">{BRAND.name}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">Free AI, SaaS, startup, marketing and finance calculators with transparent formulas and practical guides.</p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-slate-400">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-mint" /> Free Forever</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-mint" /> No Sign-up</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-mint" /> Privacy First</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-mint" /> Transparent Formulas</span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Calculators</p>
            {categories.map((c) => <Link key={c.id} to={`/calculators/${c.id}`} className="text-sm text-slate-300 hover:text-mint">{c.title}</Link>)}
            <Link to="/calculators/ai" className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-mint hover:brightness-110">View All Calculators <ArrowRight size={14} /></Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company</p>
            <Link to="/about" className="text-sm text-slate-300 hover:text-mint">About</Link>
            <Link to="/contact" className="text-sm text-slate-300 hover:text-mint">Contact</Link>
            <Link to="/privacy-policy" className="text-sm text-slate-300 hover:text-mint">Privacy Policy</Link>
            <Link to="/cookie-policy" className="text-sm text-slate-300 hover:text-mint">Cookie Policy</Link>
            <Link to="/terms" className="text-sm text-slate-300 hover:text-mint">Terms of Service</Link>
            <Link to="/disclaimer" className="text-sm text-slate-300 hover:text-mint">Disclaimer</Link>
            <Link to="/editorial-policy" className="text-sm text-slate-300 hover:text-mint">Editorial Policy</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Popular Tools</p>
            <Link to="/calculator/openai-cost-calculator" className="text-sm text-slate-300 hover:text-mint">OpenAI Cost Calculator</Link>
            <Link to="/calculator/claude-cost-calculator" className="text-sm text-slate-300 hover:text-mint">Claude Cost Calculator</Link>
            <Link to="/calculator/gemini-cost-calculator" className="text-sm text-slate-300 hover:text-mint">Gemini Cost Calculator</Link>
            <Link to="/calculator/ai-roi-calculator" className="text-sm text-slate-300 hover:text-mint">AI ROI Calculator</Link>
            <Link to="/calculator/mrr-calculator" className="text-sm text-slate-300 hover:text-mint">MRR Calculator</Link>
            <Link to="/calculator/cac-calculator" className="text-sm text-slate-300 hover:text-mint">CAC Calculator</Link>
            <Link to="/search" className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-mint hover:brightness-110">View All Popular Tools <ArrowRight size={14} /></Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Resources</p>
            <Link to="/blog" className="text-sm text-slate-300 hover:text-mint">Blog</Link>
            <Link to="/blog" className="text-sm text-slate-300 hover:text-mint">Latest Guides</Link>
            <Link to="/editorial-policy" className="text-sm text-slate-300 hover:text-mint">Formula Accuracy</Link>
            <Link to="/about" className="text-sm text-slate-300 hover:text-mint">About Us</Link>
            <Link to="/contact" className="text-sm text-slate-300 hover:text-mint">Help Center</Link>
            <Link to="/search" className="text-sm text-slate-300 hover:text-mint">Search Tools</Link>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} {BRAND.name}Calc. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
              <Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300">Privacy Policy</Link>
              <Link to="/cookie-policy" className="text-xs text-slate-500 hover:text-slate-300">Cookie Policy</Link>
              <Link to="/terms" className="text-xs text-slate-500 hover:text-slate-300">Terms</Link>
              <Link to="/disclaimer" className="text-xs text-slate-500 hover:text-slate-300">Disclaimer</Link>
              <Link to="/editorial-policy" className="text-xs text-slate-500 hover:text-slate-300">Editorial Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
