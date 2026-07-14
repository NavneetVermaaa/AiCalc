export default function ProTip({ children }) {
  return (
    <div className="mt-6 rounded-lg border border-line bg-panel/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">Pro Tip</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{children}</p>
    </div>
  );
}
