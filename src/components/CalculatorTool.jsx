import { useCallback, useMemo, useState } from "react";
import { Copy, RotateCcw, Share2 } from "lucide-react";

const format = (value, unit) => {
  const number = Number.isFinite(value) ? value : 0;
  if (unit === "$") return `$${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  if (unit === "\u20b9" || unit === "\u00e2\u201a\u00b9") return `Rs.${number.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
  if (unit === "%") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
  if (unit === "x") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}x`;
  return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}${unit || ""}`;
};

const displayValue = (value, unit) => {
  if (!Number.isFinite(value)) return "-";
  return format(value, unit);
};

export default function CalculatorTool({ calculator }) {
  const getInitial = () => Object.fromEntries(calculator.fields.map((field) => [field.name, ""]));
  const getExampleValues = () => Object.fromEntries(calculator.fields.map((field) => [field.name, field.value]));
  const [values, setValues] = useState(getInitial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const isReady = useMemo(
    () => calculator.fields.every((field) => values[field.name] !== "" && Number.isFinite(Number(values[field.name]))),
    [calculator.fields, values]
  );

  const exampleResult = useMemo(() => calculator.compute(getExampleValues()), [calculator]);

  const result = useMemo(() => {
    if (!isReady) return exampleResult;
    const numeric = Object.fromEntries(
      Object.entries(values).map(([key, val]) => [key, Number(val)])
    );
    return calculator.compute(numeric);
  }, [calculator, exampleResult, isReady, values]);

  const handleChange = useCallback((name, raw) => {
    setValues((current) => ({ ...current, [name]: raw }));
    setTouched((current) => ({ ...current, [name]: true }));
    if (raw === "") {
      setErrors((current) => ({ ...current, [name]: "This field is required" }));
    } else if (isNaN(Number(raw))) {
      setErrors((current) => ({ ...current, [name]: "Must be a valid number" }));
    } else {
      setErrors((current) => ({ ...current, [name]: null }));
    }
  }, []);

  const handleReset = useCallback(() => {
    setValues(getInitial());
    setErrors({});
    setTouched({});
    setCopied(false);
    setShared(false);
    setAnnouncement("Calculator inputs cleared.");
  }, []);

  const handleCopy = async () => {
    let text;
    if (calculator.results) {
      text = `${calculator.title}: ${calculator.results.map((r) => `${r.label}: ${displayValue(result[r.key], r.unit)}`).join(" | ")}`;
    } else {
      text = `${calculator.title}: ${displayValue(result, calculator.unit)}`;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setAnnouncement("Calculator result copied to clipboard.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setAnnouncement("Result could not be copied.");
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: calculator.title, text: calculator.description, url });
        setShared(true);
        setAnnouncement("Calculator shared.");
        setTimeout(() => setShared(false), 2000);
      } catch {
        setAnnouncement("Share canceled.");
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setAnnouncement("Calculator link copied to clipboard.");
        setTimeout(() => setShared(false), 2000);
      } catch {
        setAnnouncement("Calculator link could not be copied.");
      }
    }
  };

  return (
    <section className="container-page grid gap-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <div className="panel p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
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
                className={`min-h-12 w-full rounded-md border bg-ink px-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 ${errors[field.name] ? "border-red-500" : "border-line"}`}
                type="number"
                inputMode="decimal"
                min="0"
                value={values[field.name]}
                placeholder={String(field.value)}
                aria-invalid={!!(touched[field.name] && errors[field.name])}
                aria-describedby={touched[field.name] && errors[field.name] ? `${field.name}-error` : undefined}
                onChange={(event) => handleChange(field.name, event.target.value)}
              />
              {touched[field.name] && errors[field.name] && (
                <p id={`${field.name}-error`} className="mt-1 text-xs text-red-300" role="alert">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <aside className="panel flex flex-col justify-between p-6">
        {!isReady && (
          <p className="mb-4 rounded-md border border-line bg-ink px-3 py-2 text-sm text-slate-300">
            Example result shown. Enter values to calculate your result.
          </p>
        )}
        {calculator.results ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {calculator.results.map((r) => (
              <div key={r.key} className="rounded-lg border border-line bg-ink p-5 sm:p-6">
                <p className="eyebrow">{r.label}</p>
                <p className={`mt-4 text-5xl font-black ${isReady ? "text-white" : "text-slate-400"}`} aria-live="polite">
                  <span className="sr-only">{isReady ? "Calculated result: " : "Example result: "}</span>
                  {displayValue(result[r.key], r.unit)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="eyebrow">{calculator.resultLabel}</p>
            <p className={`mt-4 text-5xl font-black ${isReady ? "text-white" : "text-slate-400"}`} aria-live="polite">
              <span className="sr-only">{isReady ? "Calculated result: " : "Example result: "}</span>
              {displayValue(result, calculator.unit)}
            </p>
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={handleCopy}
            disabled={!isReady || (!calculator.results && !Number.isFinite(result))}
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
