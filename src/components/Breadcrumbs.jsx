import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="container-page pt-6 text-sm text-slate-400" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span className="text-slate-500" aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className="text-slate-200">{item.name}</span>
              ) : (
                <Link to={item.path} className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink">{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
