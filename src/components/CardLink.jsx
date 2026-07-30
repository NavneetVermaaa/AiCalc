import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CardLink = memo(function CardLink({ to, title, description, meta }) {
  return (
    <Link to={to} className="panel group block p-5 transition hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink">
      {meta && <p className="eyebrow">{meta}</p>}
      <h3 className="mt-2 text-xl font-bold text-white group-hover:text-accent">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">Open <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
    </Link>
  );
});

export default CardLink;
