import { ExternalLink } from "lucide-react";

export default function OfficialSources({ title, sources }) {
  return (
    <div className="panel mt-6 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title || "Official Sources"}</p>
      <div className="mt-4 grid gap-2">
        {sources.map((source, i) => (
          <a
            key={i}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-md border border-line bg-ink p-3 text-sm text-slate-300 transition hover:border-accent/40 hover:text-white"
          >
            <ExternalLink size={14} className="shrink-0 text-slate-500 transition group-hover:text-accent" />
            <span>{source.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
