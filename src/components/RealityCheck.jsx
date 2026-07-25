import { AlertTriangle } from "lucide-react";

export default function RealityCheck({ title, content }) {
  return (
    <div className="mt-6 rounded-lg border border-amber/20 bg-amber/5 p-4">
      <div className="flex items-center gap-2">
        <AlertTriangle size={16} className="text-amber" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">{title || "Reality Check"}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{content}</p>
    </div>
  );
}
