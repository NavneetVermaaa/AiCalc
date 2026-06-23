import { Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import CardLink from "../components/CardLink.jsx";
import { blogCategories, getPublishedPostsByCategory } from "../data/blogs.js";

export default function BlogCategoryPage() {
  const { category: categoryId } = useParams();
  const category = blogCategories.find((item) => item.id === categoryId);
  if (!category) return <Navigate to="/404" replace />;
  const items = getPublishedPostsByCategory(category.id).slice(0, 36);

  return (
    <>
      <SEO title={`${category.title} Articles`} description={category.description} path={`/blog/category/${category.id}`} />
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
