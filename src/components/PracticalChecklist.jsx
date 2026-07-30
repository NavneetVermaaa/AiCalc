import { Check } from "lucide-react";

export default function PracticalChecklist({ title, items }) {
  return (
    <div className="panel mt-6 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title || "Checklist"}</p>
      <div className="mt-4 grid gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
              <Check size={12} strokeWidth={3} />
            </span>
            <p className="text-sm leading-6 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
