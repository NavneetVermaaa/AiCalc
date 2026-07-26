export default function KPIMatrix({ caption, rows }) {
  return (
    <div className="my-8 overflow-x-auto">
      {caption && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mint">{caption}</p>}
      <div className="min-w-[500px]">
        {rows.map((row, i) => (
          <div key={i} className="mb-3 rounded-lg border border-line bg-panel/60 p-4">
            <p className="text-sm font-bold text-white">{row.kpi}</p>
            <div className="mt-2 grid gap-x-6 gap-y-1.5 text-xs leading-5 sm:grid-cols-3">
              <div>
                <span className="font-semibold uppercase tracking-wider text-slate-500">What It Measures</span>
                <p className="mt-0.5 text-slate-300">{row.what}</p>
              </div>
              <div>
                <span className="font-semibold uppercase tracking-wider text-slate-500">Why It Matters</span>
                <p className="mt-0.5 text-slate-300">{row.why}</p>
              </div>
              <div>
                <span className="font-semibold uppercase tracking-wider text-slate-500">Common Mistake</span>
                <p className="mt-0.5 text-slate-300">{row.mistake}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
