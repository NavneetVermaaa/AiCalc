import { useState, useEffect, useCallback, useRef } from "react";
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
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const mobileDialogRef = useRef(null);
  const wasMobileOpenRef = useRef(false);

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
    closeButtonRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key !== "Tab") return;
      const focusable = mobileDialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, close]);

  useEffect(() => {
    if (!mobileOpen && wasMobileOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasMobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/88 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 text-lg font-black text-white" aria-label={`${BRAND.name} home`}>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-ink"><BarChart3 size={20} /></span>
            {BRAND.name}
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {nav.map(([label, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? "bg-white/10 text-accent" : "text-slate-300 hover:text-white"}`}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/search" className="button-secondary hidden sm:inline-flex"><Search size={16} /> Search</Link>
            <button
              ref={menuButtonRef}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="button-secondary md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        ref={mobileDialogRef}
        className={`fixed inset-0 z-50 md:hidden transition-[opacity,visibility] duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-modal="true"
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div
          className={`fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />
        <div
          className={`fixed right-0 top-0 flex h-full w-72 flex-col bg-panel border-l border-line p-6 shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            ref={closeButtonRef}
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
                className={({ isActive }) => `rounded-md px-4 py-3 text-base font-semibold ${isActive ? "bg-white/10 text-accent" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
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
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Free Forever</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> No Sign-up</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Privacy First</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Transparent Formulas</span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Calculators</p>
            {categories.map((c) => <Link key={c.id} to={`/calculators/${c.id}`} className="text-sm text-slate-300 hover:text-accent">{c.title}</Link>)}
            <Link to="/calculators/ai" className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-accent hover:brightness-110">View All Calculators <ArrowRight size={14} /></Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company</p>
            <Link to="/about" className="text-sm text-slate-300 hover:text-accent">About</Link>
            <Link to="/contact" className="text-sm text-slate-300 hover:text-accent">Contact</Link>
            <Link to="/privacy-policy" className="text-sm text-slate-300 hover:text-accent">Privacy Policy</Link>
            <Link to="/cookie-policy" className="text-sm text-slate-300 hover:text-accent">Cookie Policy</Link>
            <Link to="/terms" className="text-sm text-slate-300 hover:text-accent">Terms of Service</Link>
            <Link to="/disclaimer" className="text-sm text-slate-300 hover:text-accent">Disclaimer</Link>
            <Link to="/editorial-policy" className="text-sm text-slate-300 hover:text-accent">Editorial Policy</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Popular Tools</p>
            <Link to="/calculator/openai-cost-calculator" className="text-sm text-slate-300 hover:text-accent">OpenAI Cost Calculator</Link>
            <Link to="/calculator/claude-cost-calculator" className="text-sm text-slate-300 hover:text-accent">Claude Cost Calculator</Link>
            <Link to="/calculator/gemini-cost-calculator" className="text-sm text-slate-300 hover:text-accent">Gemini Cost Calculator</Link>
            <Link to="/calculator/ai-roi-calculator" className="text-sm text-slate-300 hover:text-accent">AI ROI Calculator</Link>
            <Link to="/calculator/mrr-calculator" className="text-sm text-slate-300 hover:text-accent">MRR Calculator</Link>
            <Link to="/calculator/cac-calculator" className="text-sm text-slate-300 hover:text-accent">CAC Calculator</Link>
            <Link to="/search" className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-accent hover:brightness-110">View All Popular Tools <ArrowRight size={14} /></Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Resources</p>
            <Link to="/blog" className="text-sm text-slate-300 hover:text-accent">Blog</Link>
            <Link to="/blog" className="text-sm text-slate-300 hover:text-accent">Latest Guides</Link>
            <Link to="/editorial-policy" className="text-sm text-slate-300 hover:text-accent">Editorial Policy</Link>
            <Link to="/about" className="text-sm text-slate-300 hover:text-accent">About Us</Link>
            <Link to="/contact" className="text-sm text-slate-300 hover:text-accent">Contact</Link>
            <Link to="/search" className="text-sm text-slate-300 hover:text-accent">Search Tools</Link>
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
