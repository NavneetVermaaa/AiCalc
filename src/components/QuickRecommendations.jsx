const defaultItems = [
  { label: "Writing", provider: "Claude" },
  { label: "Coding", provider: "OpenAI or Claude" },
  { label: "Google Workspace", provider: "Gemini" },
  { label: "Lowest cost", provider: "Depends on workload" },
  { label: "Best all-round", provider: "OpenAI" },
  { label: "Best long documents", provider: "Claude" },
  { label: "Best search and grounding", provider: "Gemini" }
];

const badgeColors = {
  "Claude": "border-amber/30 bg-amber/5 text-amber",
  "OpenAI": "border-white/20 bg-white/5 text-white",
  "Gemini": "border-sky/30 bg-sky/5 text-sky"
};

function getBadgeStyle(provider) {
  if (provider === "OpenAI or Claude") return "border-accent/30 bg-accent/5 text-accent";
  if (provider === "Depends on workload") return "border-slate-500/30 bg-slate-500/10 text-slate-300";
  for (const [key, val] of Object.entries(badgeColors)) {
    if (provider.includes(key)) return val;
  }
  return "border-slate-500/30 bg-slate-500/10 text-slate-300";
}

export default function QuickRecommendations({ title, items }) {
  const list = items || defaultItems;
  return (
    <div className="my-8 rounded-xl border border-line bg-panel/60 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title || "Quick Recommendation"}</p>
      <p className="mt-2 text-sm text-slate-400">If you only have 30 seconds:</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-3 rounded-lg border border-line/50 bg-panel/40 px-4 py-3">
            <span className="text-sm font-medium text-white">{item.label}</span>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${getBadgeStyle(item.provider)}`}>
              {item.provider}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
