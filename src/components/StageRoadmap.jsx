export default function StageRoadmap({ caption, stages }) {
  return (
    <div className="my-8">
      {caption && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{caption}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((s, i) => (
          <div key={i} className="rounded-xl border border-line bg-panel/60 p-5">
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{s.stage}</span>
            {s.revenue && (
              <p className="mt-2 text-xs font-semibold text-slate-400">{s.revenue}</p>
            )}
            {s.focus && (
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Focus</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{s.focus}</p>
              </div>
            )}
            {s.metrics && (
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Metrics</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{s.metrics}</p>
              </div>
            )}
            {s.benchmark && (
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Target</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{s.benchmark}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
