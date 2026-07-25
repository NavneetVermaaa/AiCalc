export default function CommonMisconception({ myth, reality, explanation }) {
  return (
    <div className="panel mt-6 overflow-hidden p-0">
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-line bg-ink/60 p-5 sm:border-b-0 sm:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Myth</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">{myth}</p>
        </div>
        <div className="bg-mint/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Reality</p>
          <p className="mt-2 text-sm leading-6 text-white">{reality}</p>
        </div>
      </div>
      {explanation && (
        <div className="border-t border-line p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Why It Matters</p>
          <p className="mt-1 text-sm leading-6 text-slate-300">{explanation}</p>
        </div>
      )}
    </div>
  );
}
