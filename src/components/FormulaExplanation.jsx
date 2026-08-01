import { ArrowRight, Calculator } from "lucide-react";

export default function FormulaExplanation({ steps = [], variables = [] }) {
  if (steps.length === 0 && variables.length === 0) return null;
  return (
    <div className="panel mt-6 p-5">
      <div className="flex items-center gap-2">
        <Calculator size={16} className="text-accent" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">How the calculation works</p>
      </div>
      {steps.length > 0 && (
        <ol className="mt-4 grid gap-2">
          {steps.map((step, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-bold text-accent">{i + 1}</span>
              <span className="text-sm leading-6 text-slate-300">{step}</span>
              {i < steps.length - 1 && <ArrowRight size={14} className="shrink-0 text-slate-600" />}
            </li>
          ))}
        </ol>
      )}
      {variables.length > 0 && (
        <div className="mt-4 grid gap-2 border-t border-line/50 pt-4">
          {variables.map((variable) => (
            <div key={variable.name} className="grid gap-1 rounded-md border border-line bg-ink p-3 sm:grid-cols-[160px_1fr]">
              <span className="font-mono text-xs font-bold text-white">{variable.name}</span>
              <span className="text-xs leading-5 text-slate-400">{variable.meaning}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
