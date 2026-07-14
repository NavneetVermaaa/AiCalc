import { Link } from "react-router-dom";

export default function RelatedMetrics({ items }) {
  return (
    <div className="mt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Related Metrics</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Link key={i} to={item.to} className="panel group block p-4 transition hover:border-mint/40">
            <p className="text-sm font-black text-white">{item.name}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">{item.description}</p>
            <p className="mt-3 text-xs font-semibold text-mint group-hover:underline">Open Calculator →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
