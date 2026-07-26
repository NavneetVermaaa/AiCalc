const defaultRows = [
  { workload: "FAQ Chatbot", recommended: "Claude Haiku / Gemini Flash", why: "Low cost, caching benefits." },
  { workload: "Coding Assistant", recommended: "OpenAI / Claude", why: "Strong reasoning and tooling." },
  { workload: "Blog Writing", recommended: "Claude", why: "High-quality long-form output." },
  { workload: "Enterprise Docs", recommended: "Claude", why: "Long context and structured writing." },
  { workload: "Google Workspace", recommended: "Gemini", why: "Native integration." },
  { workload: "AI Product", recommended: "OpenAI", why: "Broad ecosystem and tooling." }
];

export default function WorkloadMatrix({ title, rows }) {
  const items = rows || defaultRows;
  return (
    <div className="my-8">
      {title && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mint">{title}</p>}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Workload</th>
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Recommended</th>
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Why</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b border-line/50 last:border-0">
                <td className="py-3 pr-4 font-semibold text-white">{item.workload}</td>
                <td className="py-3 pr-4 text-sky">{item.recommended}</td>
                <td className="py-3 pr-4 text-slate-400">{item.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
