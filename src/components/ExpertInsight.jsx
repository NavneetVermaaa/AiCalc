import { Lightbulb } from "lucide-react";

export default function ExpertInsight({ title, content }) {
  return (
    <div className="panel mt-6 border-l-4 border-sky p-5">
      <div className="flex items-center gap-2">
        <Lightbulb size={16} className="text-sky" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">{title || "Expert Insight"}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{content}</p>
    </div>
  );
}
