const defaultCategories = [
  { category: "Writing", winner: "Claude" },
  { category: "Coding", winner: "OpenAI" },
  { category: "Search", winner: "Gemini" },
  { category: "Long context", winner: "Claude" },
  { category: "Google apps", winner: "Gemini" },
  { category: "Ecosystem", winner: "OpenAI" },
  { category: "Overall flexibility", winner: "OpenAI" },
  { category: "Cost predictability", winner: "Claude" }
];

const winnerColors = {
  "Claude": "text-amber font-semibold",
  "OpenAI": "text-white font-semibold",
  "Gemini": "text-sky font-semibold"
};

function getWinnerStyle(winner) {
  return winnerColors[winner] || "text-mint font-semibold";
}

export default function Scorecards({ title, categories }) {
  const items = categories || defaultCategories;
  return (
    <div className="my-8">
      {title && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mint">{title}</p>}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Category</th>
              <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Winner</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b border-line/50 last:border-0">
                <td className="py-3 pr-4 text-slate-300">{item.category}</td>
                <td className={`py-3 pr-4 ${getWinnerStyle(item.winner)}`}>{item.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
