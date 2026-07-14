export default function KeyTakeaways({ items }) {
  return (
    <div className="panel mt-6 border-l-4 border-mint p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Key Takeaways</p>
      <ul className="mt-4 grid gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-1.5 grid h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
