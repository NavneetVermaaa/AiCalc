import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The requested Calcio page could not be found." path="/404" />
      <section className="container-page flex min-h-[70vh] flex-col items-start justify-center py-12">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-5xl font-black text-white">Page not found</h1>
        <p className="mt-4 max-w-xl text-slate-300">The page may have moved. Start with the calculator library or blog.</p>
        <div className="mt-8 flex gap-3">
          <Link className="button-primary" to="/">Home</Link>
          <Link className="button-secondary" to="/blog">Blog</Link>
        </div>
      </section>
    </>
  );
}
