import { useState, useEffect, useCallback } from "react";
import { BarChart3, Menu, Search, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { BRAND } from "../config/brand";

const nav = [
  ["AI", "/calculators/ai"],
  ["Startup", "/calculators/startup"],
  ["Marketing", "/calculators/marketing"],
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
        <div className="container-page grid gap-8 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xl font-black text-white">{BRAND.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{BRAND.description}</p>
          </div>
          {nav.slice(0, 3).map(([label, to]) => <Link key={to} to={to} className="text-sm font-semibold text-slate-300 hover:text-mint">{label} Calculators</Link>)}
          <div className="flex flex-col gap-2 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company</p>
            <Link to="/about" className="text-sm text-slate-300 hover:text-mint">About</Link>
            <Link to="/contact" className="text-sm text-slate-300 hover:text-mint">Contact</Link>
            <Link to="/privacy-policy" className="text-sm text-slate-300 hover:text-mint">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-slate-300 hover:text-mint">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
