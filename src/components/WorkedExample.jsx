import { Lightbulb } from "lucide-react";

export default function WorkedExample({ scenario, inputs = [], steps = [], result }) {
  return (
    <div className="panel mt-6 p-5">
      <div className="flex items-center gap-2">
        <Lightbulb size={16} className="text-accent" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Worked Example</p>
      </div>
      {scenario && <p className="mt-3 text-sm leading-6 text-slate-300">{scenario}</p>}
      {inputs.length > 0 && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {inputs.map((input) => (
            <div key={input.label} className="flex items-center justify-between gap-3 rounded-md border border-line bg-ink p-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{input.label}</span>
              <span className="font-mono text-sm font-bold text-white">{input.value}</span>
            </div>
          ))}
        </div>
      )}
      {steps.length > 0 && (
        <ol className="mt-4 grid gap-2">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-bold text-accent">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      )}
      {result && (
        <div className="mt-4 rounded-md border border-accent/25 bg-accent/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Result</p>
          <p className="mt-1 text-sm font-bold leading-6 text-white">{result}</p>
        </div>
      )}
    </div>
  );
}
