export default function FounderCaseStudies({ title, studies }) {
  return (
    <div className="my-8">
      {title && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mint">{title}</p>}
      <div className="grid gap-4 sm:grid-cols-2">
        {studies.map((s, i) => (
          <div key={i} className="rounded-xl border border-line bg-panel/60 p-5">
            <span className="inline-block rounded-full bg-sky/10 px-3 py-1 text-xs font-bold text-sky">{s.company}</span>
            {s.situation && (
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Situation</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{s.situation}</p>
              </div>
            )}
            {s.action && (
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Action</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{s.action}</p>
              </div>
            )}
            {s.result && (
              <div className="mt-3 rounded-lg bg-mint/5 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-mint">Result</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{s.result}</p>
              </div>
            )}
            {s.lesson && (
              <div className="mt-3 border-t border-line pt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Lesson</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{s.lesson}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
