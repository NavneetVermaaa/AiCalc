export default function ComparisonTable({ caption, headers, rows }) {
  return (
    <div className="mt-6 overflow-x-auto">
      {caption && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mint">{caption}</p>}
      <table className="w-full min-w-[400px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line">
            {headers.map((h, i) => (
              <th key={i} className={`py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400 ${i === 0 ? "" : ""}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-line/50 last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className={`py-3 pr-4 text-slate-300 ${ci === 0 ? "font-semibold text-white" : "text-slate-400"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
