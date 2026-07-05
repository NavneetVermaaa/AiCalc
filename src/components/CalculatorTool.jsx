import { useMemo, useState } from "react";
import { Copy, RotateCcw, Share2 } from "lucide-react";

const format = (value, unit) => {
  const number = Number.isFinite(value) ? value : 0;
  if (unit === "$") return `$${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  if (unit === "%") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
  if (unit === "x") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}x`;
  return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}${unit || ""}`;
};

const displayValue = (value, unit) => {
  if (!Number.isFinite(value)) return "\u2014";
  return format(value, unit);
};

export default function CalculatorTool({ calculator }) {
  const initial = Object.fromEntries(calculator.fields.map((field) => [field.name, field.value]));
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const result = useMemo(() => {
    const numeric = Object.fromEntries(
      Object.entries(values).map(([key, val]) => [key, Number(val) || 0])
    );
    return calculator.compute(numeric);
  }, [calculator, values]);

  const handleChange = (name, raw) => {
    const num = raw === "" ? 0 : Number(raw);
    setValues((current) => ({ ...current, [name]: isNaN(num) ? 0 : num }));
    if (raw === "") {
      setErrors((current) => ({ ...current, [name]: "This field is required" }));
    } else if (isNaN(Number(raw))) {
      setErrors((current) => ({ ...current, [name]: "Must be a valid number" }));
    } else {
      setErrors((current) => ({ ...current, [name]: null }));
    }
  };

  const handleReset = () => {
    setValues(initial);
    setErrors({});
    setCopied(false);
    setShared(false);
  };

  const handleCopy = async () => {
    const text = `${calculator.title}: ${displayValue(result, calculator.unit)}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: calculator.title, text: calculator.description, url });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {}
    }
  };

  return (
    <section className="container-page grid gap-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="panel p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white">Calculator</h2>
          <button
            onClick={handleReset}
            className="button-secondary gap-2"
            aria-label="Reset all fields"
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {calculator.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="grid gap-2 text-sm font-semibold text-slate-200">
                {field.label}
              </label>
              <input
                id={field.name}
                className={`min-h-12 w-full rounded-md border bg-ink px-3 text-base text-white outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/30 ${errors[field.name] ? "border-red-500" : "border-line"}`}
                type="number"
                inputMode="decimal"
                min="0"
                value={values[field.name]}
                aria-invalid={!!errors[field.name]}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                onChange={(event) => handleChange(field.name, event.target.value)}
              />
              {errors[field.name] && (
                <p id={`${field.name}-error`} className="mt-1 text-xs text-red-400" role="alert">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <aside className="panel flex flex-col justify-between p-6">
        <div>
          <p className="eyebrow">{calculator.resultLabel}</p>
          <p className="mt-4 text-5xl font-black text-white" aria-live="polite">
            {displayValue(result, calculator.unit)}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={handleCopy}
            disabled={!Number.isFinite(result)}
            className="button-secondary gap-2 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Copy result to clipboard"
          >
            <Copy size={14} /> {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleShare}
            className="button-secondary gap-2"
            aria-label="Share calculator"
          >
            <Share2 size={14} /> {shared ? "Link copied!" : "Share"}
          </button>
        </div>
        <p className="mt-6 rounded-md border border-line bg-ink p-4 font-mono text-sm leading-6 text-slate-300">{calculator.formula}</p>
      </aside>
    </section>
  );
}
