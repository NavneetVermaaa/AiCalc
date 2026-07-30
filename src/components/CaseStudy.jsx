export default function CaseStudy({ company, situation, numbers, decision, outcome, lesson }) {
  return (
    <div className="panel mt-6 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Case Study</p>
      <p className="mt-3 text-lg font-black text-white">{company}</p>
      <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-300">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Situation</p>
          <p className="mt-1">{situation}</p>
        </div>
        {numbers && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Numbers</p>
            <p className="mt-1">{numbers}</p>
          </div>
        )}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Decision</p>
          <p className="mt-1">{decision}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcome</p>
          <p className="mt-1">{outcome}</p>
        </div>
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Lesson</p>
          <p className="mt-1 text-sm font-semibold text-white">{lesson}</p>
        </div>
      </div>
    </div>
  );
}
