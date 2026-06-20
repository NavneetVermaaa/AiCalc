import { BarChart3, Menu, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { BRAND } from "../config/brand";

const nav = [
  ["AI", "/calculators/ai"],
  ["Startup", "/calculators/startup"],
  ["Marketing", "/calculators/marketing"],
  ["Blog", "/blog"]
];

export default function Layout({ children }) {
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
            <Link to="/blog" className="button-secondary hidden sm:inline-flex"><Search size={16} /> Search</Link>
            <button className="button-secondary md:hidden" aria-label="Open menu"><Menu size={18} /></button>
          </div>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="border-t border-line bg-ink">
        <div className="container-page grid gap-8 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xl font-black text-white">{BRAND.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{BRAND.description}</p>
          </div>
          {nav.slice(0, 3).map(([label, to]) => <Link key={to} to={to} className="text-sm font-semibold text-slate-300 hover:text-mint">{label} Calculators</Link>)}
        </div>
      </footer>
    </div>
  );
}
