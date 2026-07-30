import { BookOpen } from "lucide-react";

export default function Methodology({ title, approach, source, date }) {
  return (
    <div className="panel mt-6 p-5">
      <div className="flex items-center gap-2">
        <BookOpen size={16} className="text-accent" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title || "Methodology"}</p>
      </div>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
        {source && (
          <div className="flex gap-2">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">Source</span>
            <span>{source}</span>
          </div>
        )}
        {date && (
          <div className="flex gap-2">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">Updated</span>
            <span>{date}</span>
          </div>
        )}
        <div className="flex gap-2">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">Approach</span>
          <span>{approach}</span>
        </div>
      </div>
    </div>
  );
}
