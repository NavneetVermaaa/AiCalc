import { BookOpen } from "lucide-react";

export default function Methodology({ title, approach, source, date, rounding, units, exclusions, limitations }) {
  const rows = [
    { label: "Source", value: source },
    { label: "Updated", value: date },
    { label: "Rounding", value: rounding },
    { label: "Units", value: units },
    { label: "Exclusions", value: exclusions },
    { label: "Limitations", value: limitations }
  ].filter((row) => row.value);
  return (
    <div className="panel mt-6 p-5">
      <div className="flex items-center gap-2">
        <BookOpen size={16} className="text-accent" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title || "Methodology"}</p>
      </div>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
        {approach && (
          <div className="flex gap-2">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">Approach</span>
            <span>{approach}</span>
          </div>
        )}
        {rows.map((row) => (
          <div key={row.label} className="flex gap-2">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
