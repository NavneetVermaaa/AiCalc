import { ExternalLink } from "lucide-react";

export default function DashboardToolsGrid({ title, tools }) {
  return (
    <div className="my-8">
      {title && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</p>}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <a
            key={i}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-line bg-panel/60 p-4 transition hover:-translate-y-0.5 hover:border-accent/50"
          >
            <p className="text-sm font-bold text-white group-hover:text-accent">{tool.name}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
              Visit <ExternalLink size={12} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
