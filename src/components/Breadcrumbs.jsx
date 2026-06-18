import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="container-page pt-6 text-sm text-slate-400" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.path}>
          {index > 0 && <span className="mx-2 text-slate-600">/</span>}
          <Link to={item.path} className="hover:text-mint">{item.name}</Link>
        </span>
      ))}
    </nav>
  );
}
