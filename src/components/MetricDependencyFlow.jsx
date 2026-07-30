export default function MetricDependencyFlow({ title, steps }) {
  return (
    <div className="my-8 rounded-xl border border-line bg-panel/60 p-5 sm:p-6">
      {title && <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</p>}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {steps.map((step, i) => (
          <span key={i} className="flex items-center gap-2 sm:gap-3">
            <span className="inline-block rounded-lg border border-line bg-panel/40 px-3 py-2 text-sm font-semibold text-white">
              {step}
            </span>
            {i < steps.length - 1 && (
              <svg width="20" height="12" viewBox="0 0 20 12" className="flex-shrink-0 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 6H1M14 6l-5 5M14 6L9 1" />
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
