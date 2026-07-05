import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="container-page pt-6 text-sm text-slate-400" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.path}>
            {index > 0 && <span className="mx-2 text-slate-600">/</span>}
            {isLast ? (
              <span aria-current="page" className="text-slate-300">{item.name}</span>
            ) : (
              <Link to={item.path} className="hover:text-mint">{item.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
