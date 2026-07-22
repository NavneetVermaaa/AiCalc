import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { SITE_URL } from "../config/site";

const editorialSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Editorial Policy – ${BRAND.name}`,
  description: `Editorial policy for ${BRAND.name}. Learn how we choose formulas, review content, and ensure accuracy.`,
  url: `${SITE_URL}/editorial-policy`,
  isPartOf: { "@type": "WebSite", name: BRAND.name, url: SITE_URL }
};

export default function EditorialPolicy() {
  return (
    <>
      <SEO title="Editorial Policy — How Calcio Creates and Reviews Content" description={`${BRAND.name} editorial policy. Transparency in how our calculator formulas and content are created, reviewed, and updated.`} path="/editorial-policy" schema={[editorialSchema]} />
      <section className="container-page py-12 lg:py-20">
        <p className="eyebrow">Editorial</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Editorial Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: July 11, 2026</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          We are committed to transparency in how our calculators and content are created, reviewed, and maintained. This policy explains the standards we follow.
        </p>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white">How calculator formulas are chosen</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Each calculator on {BRAND.name} uses standard, widely accepted formulas from authoritative sources. Financial calculators use formulas from academic finance and industry standards. Cost calculators use official pricing published by providers. Marketing calculators use industry-standard metrics. Every formula is displayed on its calculator page so you can verify the math.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">How content is reviewed</h2>
            <p className="mt-3 leading-7 text-slate-400">
              All calculator descriptions, guides, and educational content are reviewed for accuracy before publication. Each calculator includes step-by-step examples and real-world scenarios to demonstrate correct usage. Content is checked against authoritative sources to ensure accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">How updates happen</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Calculators and content are updated as needed when pricing changes, formulas evolve, or new industry standards emerge. We monitor official sources for changes that affect our calculators. The &quot;Last updated&quot; date on each page reflects the most recent review. We do not guarantee real-time updates but strive to keep content current.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">How corrections are handled</h2>
            <p className="mt-3 leading-7 text-slate-400">
              If an error is identified in any calculator or content, we investigate promptly. Confirmed errors are corrected within a reasonable timeframe. Significant corrections are noted in the update history. Minor corrections are made silently to maintain accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">How users can report issues</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We encourage users to report any issues they find. You can report inaccuracies, bugs, or concerns by emailing <a href="mailto:navneet.v0000001@gmail.com" className="text-mint hover:underline">navneet.v0000001@gmail.com</a> or visiting our <Link to="/contact" className="text-mint hover:underline">contact page</Link>. Please include the calculator name, a description of the issue, and any supporting references.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Transparency commitment</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We believe in being transparent about what we do and how we do it. Every calculator shows its formula, methodology, and assumptions. We do not hide fees, promote specific products, or manipulate results. Our goal is to provide honest, useful tools that help you make better decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Questions about this policy? <Link to="/contact" className="text-mint hover:underline">Contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
