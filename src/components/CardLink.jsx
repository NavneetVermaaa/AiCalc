import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CardLink = memo(function CardLink({ to, title, description, meta }) {
  return (
    <Link to={to} className="panel group block p-5 transition hover:-translate-y-1 hover:border-mint">
      {meta && <p className="eyebrow">{meta}</p>}
      <h2 className="mt-2 text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-mint">Open <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
    </Link>
  );
});

export default CardLink;
