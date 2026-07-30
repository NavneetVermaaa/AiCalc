import { User } from "lucide-react";

export default function FounderNote({ content, author }) {
  return (
    <div className="panel mt-6 border-l-4 border-accent p-5">
      <div className="flex items-center gap-2">
        <User size={16} className="text-accent" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Founder Note</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300 italic">{content}</p>
      {author && <p className="mt-3 text-xs font-semibold text-slate-400">— {author}</p>}
    </div>
  );
}
