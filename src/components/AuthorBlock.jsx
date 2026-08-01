import { User } from "lucide-react";

export default function AuthorBlock({ author = "Navneet Verma", role = "AI Automation Developer & Web Engineer", bio = "Specializes in AI APIs, workflow automation, SaaS tools, developer resources, and cost optimization. Builds practical calculators and technical resources that help businesses understand pricing, automation, and operational efficiency." }) {
  return (
    <div className="panel mt-8 flex gap-4 p-5">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent/10 text-accent" aria-hidden="true">
        <User size={22} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Written by</p>
        <p className="mt-1 text-sm font-bold text-white">{author}</p>
        <p className="text-xs font-semibold text-slate-400">{role}</p>
        <p className="mt-2 text-xs leading-5 text-slate-400">{bio}</p>
      </div>
    </div>
  );
}
