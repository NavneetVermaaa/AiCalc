import { Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import CardLink from "../components/CardLink.jsx";
import { blogCategories, getPublishedPostsByCategory } from "../data/blogs.js";
import { breadcrumbSchema } from "../utils/schema.js";

export default function BlogCategoryPage() {
  const { category: categoryId } = useParams();
  const category = blogCategories.find((item) => item.id === categoryId);
  if (!category) return <Navigate to="/404" replace />;
  const items = getPublishedPostsByCategory(category.id).slice(0, 36);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.title, path: `/blog/category/${category.id}` }
  ];

  return (
    <>
      <SEO title={`${category.title} Guides — Latest Articles and Tutorials`} description={`Explore our ${category.title.toLowerCase()} guides covering ${category.id === "ai-finance" ? "LLM API pricing, AI ROI, agent savings, prompt optimisation, and cost optimisation strategies" : category.id === "startup-metrics" ? "CAC, LTV, churn, MRR, ARR, burn rate, unit economics, and SaaS benchmarks by stage" : "ROAS, CPC, CPM, conversion rate, marketing ROI, and paid growth strategy"}. Free calculators included.`} path={`/blog/category/${category.id}`} schema={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs items={crumbs} />
      <section className="container-page py-12">
        <p className="eyebrow">Blog category</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">{category.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{category.description}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => <CardLink key={post.slug} to={`/blog/${post.slug}`} title={post.title} description={post.description} meta={`${post.readingTime} min read`} />)}
        </div>
      </section>
    </>
  );
}
