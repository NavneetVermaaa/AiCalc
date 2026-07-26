export default function GlossaryTable({ title, entries }) {
  return (
    <div className="my-8">
      {title && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mint">{title}</p>}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Term</th>
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Definition</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr key={i} className="border-b border-line/50 last:border-0">
                <td className="py-3 pr-4 font-semibold text-white">{entry.term}</td>
                <td className="py-3 pr-4 text-slate-300">{entry.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
