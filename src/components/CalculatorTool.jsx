import { useMemo, useState } from "react";

const format = (value, unit) => {
  const number = Number.isFinite(value) ? value : 0;
  if (unit === "$") return `$${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  if (unit === "%") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
  if (unit === "x") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}x`;
  return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}${unit || ""}`;
};

export default function CalculatorTool({ calculator }) {
  const initial = Object.fromEntries(calculator.fields.map((field) => [field.name, field.value]));
  const [values, setValues] = useState(initial);
  const result = useMemo(() => calculator.compute(values), [calculator, values]);

  return (
    <section className="container-page grid gap-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="panel p-5 sm:p-6">
        <h2 className="text-2xl font-black text-white">Calculator</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {calculator.fields.map((field) => (
            <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-200">
              {field.label}
              <input
                className="min-h-12 rounded-md border border-line bg-ink px-3 text-base text-white outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/30"
                type="number"
                inputMode="decimal"
                value={values[field.name]}
                onChange={(event) => setValues((current) => ({ ...current, [field.name]: Number(event.target.value) }))}
              />
            </label>
          ))}
        </div>
      </div>
      <aside className="panel flex flex-col justify-between p-6">
        <p className="eyebrow">{calculator.resultLabel}</p>
        <p className="mt-4 text-5xl font-black text-white">{format(result, calculator.unit)}</p>
        <p className="mt-6 rounded-md border border-line bg-ink p-4 font-mono text-sm leading-6 text-slate-300">{calculator.formula}</p>
      </aside>
    </section>
  );
}
