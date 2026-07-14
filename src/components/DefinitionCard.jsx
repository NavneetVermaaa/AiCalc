export default function DefinitionCard({ term, definition }) {
  return (
    <div className="panel mt-6 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Definition</p>
      <p className="mt-2 text-lg font-black text-white">{term}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
    </div>
  );
}
