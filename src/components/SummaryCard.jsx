const defaultSummaries = [
  { icon: "\uD83C\uDFC6", label: "Best Overall", value: "OpenAI" },
  { icon: "\u270D", label: "Best Writing", value: "Claude" },
  { icon: "\uD83C\uDFE2", label: "Best Google Ecosystem", value: "Gemini" },
  { icon: "\uD83D\uDCB0", label: "Cheapest", value: "Depends on workload" },
  { icon: "\uD83D\uDCC4", label: "Best Long Context", value: "Claude" },
  { icon: "\uD83D\uDE80", label: "Best Startup Choice", value: "OpenAI" }
];

const valueColors = {
  "OpenAI": "text-white",
  "Claude": "text-amber",
  "Gemini": "text-sky"
};

function getValueStyle(value) {
  return valueColors[value] || "text-slate-300";
}

export default function SummaryCard({ title, summaries }) {
  const items = summaries || defaultSummaries;
  return (
    <div className="my-8 rounded-xl border border-line bg-panel/60 p-6">
      {title && <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-line/50 bg-panel/40 p-4">
            <span className="text-xl" role="img" aria-hidden="true">{item.icon}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
              <p className={`mt-0.5 text-sm font-bold ${getValueStyle(item.value)}`}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
