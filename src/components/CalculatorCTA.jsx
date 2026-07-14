import { Link } from "react-router-dom";

export default function CalculatorCTA({ slug, title, description }) {
  return (
    <div className="relative mt-10 overflow-hidden rounded-lg border border-mint/20 bg-gradient-to-b from-panel to-ink/80 p-8 text-center shadow-glow sm:p-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/60 to-transparent" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Free Calculator</p>
      <p className="mt-4 text-3xl font-black text-white sm:text-4xl">{title}</p>
      <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-300">{description}</p>
      <Link to={`/calculator/${slug}`} className="button-primary mt-8 inline-flex min-h-12 px-8 text-base">
        Open Calculator
      </Link>
      <p className="mt-4 text-xs text-slate-500">Free — no sign-up required</p>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
    </div>
  );
}
