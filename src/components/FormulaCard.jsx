export default function FormulaCard({ label, formula, note }) {
  return (
    <div className="panel mt-6 p-5">
      {label && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">{label}</p>}
      <p className="mt-3 text-xl font-black text-white sm:text-2xl">{formula}</p>
      {note && <p className="mt-3 text-sm leading-6 text-slate-400">{note}</p>}
    </div>
  );
}
