import { Gauge } from "lucide-react";

export default function InterpretationCard({ title = "How to read your result", levels = [] }) {
  if (levels.length === 0) return null;
  return (
    <div className="panel mt-6 p-5">
      <div className="flex items-center gap-2">
        <Gauge size={16} className="text-accent" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</p>
      </div>
      <div className="mt-4 grid gap-3">
        {levels.map((level, i) => (
          <div key={i} className="grid gap-1 rounded-md border border-line bg-ink p-4 md:grid-cols-[110px_110px_1fr] md:gap-4">
            <span className="text-sm font-bold text-white">{level.label}</span>
            {level.range && <span className="font-mono text-xs font-semibold text-accent">{level.range}</span>}
            <div>
              {level.meaning && <p className="text-xs leading-5 text-slate-400">{level.meaning}</p>}
              {level.recommendation && <p className="mt-1 text-xs font-medium leading-5 text-slate-300">{level.recommendation}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
