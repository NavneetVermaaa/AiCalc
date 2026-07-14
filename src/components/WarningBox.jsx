export default function WarningBox({ children }) {
  return (
    <div className="mt-6 rounded-lg border border-amber/20 bg-amber/5 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Warning</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{children}</p>
    </div>
  );
}
