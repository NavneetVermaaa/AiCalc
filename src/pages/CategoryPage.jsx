import { Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import CardLink from "../components/CardLink.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { calculatorsByCategory, getCategory } from "../data/calculators.js";
import { breadcrumbSchema } from "../utils/schema.js";

export default function CategoryPage() {
  const { category: categoryId } = useParams();
  const category = getCategory(categoryId);
  if (!category) return <Navigate to="/404" replace />;
  const items = calculatorsByCategory(category.id);
  const crumbs = [{ name: "Home", path: "/" }, { name: category.title, path: `/calculators/${category.id}` }];

  return (
    <>
      <SEO title={category.metaTitle || category.title} description={category.description} path={`/calculators/${category.id}`} schema={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs items={crumbs} />
      <section className="container-page py-12">
        <p className="eyebrow">Calculator category</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">{category.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{category.description}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => <CardLink key={item.slug} to={`/calculator/${item.slug}`} title={item.title} description={item.description} meta="Free calculator" />)}
        </div>
      </section>
    </>
  );
}
