export default function PricingFlowHero({ logo, left, right, caption }) {
  const Column = ({ data }) => (
    <div className="flex flex-col items-center text-center">
      {logo}
      <span className="mt-2 text-sm font-semibold text-white">{data.label}</span>
      {data.steps.map((step, i) => (
        <span key={i}>
          <svg className="mt-2 h-6 w-4 text-slate-500" viewBox="0 0 16 24" fill="none" aria-label="Arrow down">
            <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="mt-2 rounded-lg border border-line bg-panel px-4 py-2 text-sm text-slate-300">{step}</span>
        </span>
      ))}
      <svg className="mt-2 h-6 w-4 text-slate-500" viewBox="0 0 16 24" fill="none" aria-label="Arrow down">
        <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="mt-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">{data.final}</span>
    </div>
  );

  return (
    <figure className="my-10 overflow-hidden rounded-xl border border-line bg-panel/60 p-6 sm:p-8">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <Column data={left} />
        <Column data={right} />
      </div>
      {caption && <figcaption className="mt-6 text-center text-xs text-slate-500">{caption}</figcaption>}
    </figure>
  );
}
