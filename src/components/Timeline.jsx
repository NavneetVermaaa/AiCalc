export default function Timeline({ title, events }) {
  return (
    <div className="panel mt-6 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title || "Timeline"}</p>
      <div className="mt-4 grid gap-0">
        {events.map((event, i) => (
          <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="z-10 grid h-3 w-3 shrink-0 rounded-full bg-accent" />
              {i < events.length - 1 && <span className="mt-0.5 w-px flex-1 bg-line" />}
            </div>
            <div className="pt-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{event.date}</p>
              <p className="mt-1 text-sm font-bold text-white">{event.label}</p>
              {event.description && <p className="mt-1 text-sm leading-5 text-slate-400">{event.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
