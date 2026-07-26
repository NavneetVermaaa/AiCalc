export default function SaaSMetricsPyramid({ layers }) {
  return (
    <div className="my-8">
      {layers.map((layer, i) => {
        const isTop = i === 0;
        const isBottom = i === layers.length - 1;
        return (
          <div key={i} className={`flex ${isTop ? "justify-center" : ""}`}>
            <div
              className={`w-full border border-line bg-panel/60 p-4 sm:p-5 ${
                isTop ? "max-w-xs rounded-lg" : isBottom ? "rounded-lg" : "rounded-lg"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-mint">{layer.name}</span>
                <span className="text-right text-[10px] leading-tight text-slate-500">{layer.metrics}</span>
              </div>
              {layer.description && (
                <p className="mt-1.5 text-sm leading-5 text-slate-300">{layer.description}</p>
              )}
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-1">
                <svg width="16" height="12" viewBox="0 0 16 12" className="text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 11L1 4h14L8 11z" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
