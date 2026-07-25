import { ArrowDown } from "lucide-react";

export default function DecisionFramework({ title, options }) {
  return (
    <div className="panel mt-6 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">{title || "Decision Framework"}</p>
      <div className="mt-4 grid gap-4">
        {options.map((opt, i) => (
          <div key={i} className="rounded-lg border border-line bg-ink p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/20 text-xs font-bold text-mint">{i + 1}</span>
              <div>
                <p className="text-sm font-semibold text-white">If: {opt.condition}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <ArrowDown size={12} />
                  <span>Recommended</span>
                </div>
                <p className="mt-1 text-sm font-bold text-mint">{opt.recommendation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
