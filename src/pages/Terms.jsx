import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { SITE_URL } from "../config/site";

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Terms of Service – ${BRAND.name}`,
  description: `Terms of service for ${BRAND.name}. By using this site you agree to these terms.`,
  url: `${SITE_URL}/terms`,
  isPartOf: {
    "@type": "WebSite",
    name: BRAND.name,
    url: SITE_URL
  }
};

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | CalcioCalc Website Terms & Conditions"
        description={`${BRAND.name} terms of service. By using our free business calculators and guides, you agree to these terms.`}
        path="/terms"
        schema={[termsSchema]}
      />
      <section className="container-page py-12 lg:py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: June 24, 2026</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          By using {BRAND.name}, you agree to these terms. Please read them carefully.
        </p>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Use of service</h2>
            <p className="mt-3 leading-7 text-slate-400">
              {BRAND.name} provides free online calculators and educational content for informational purposes. You may use these tools for personal or commercial use at no cost.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
              <li>You do not need an account to use any calculator.</li>
              <li>You may not scrape, reverse-engineer, or abuse our tools.</li>
              <li>We reserve the right to modify or discontinue any tool at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">No warranty</h2>
            <p className="mt-3 leading-7 text-slate-400">
              All calculators and content are provided &quot;as is&quot; without warranty of any kind. While we strive for accuracy, the results are for informational purposes only and should not replace professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Calculator accuracy</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Our calculators use standard formulas and are tested for correctness. However, we make no guarantees that every calculation is accurate for every use case. Results may vary based on rounding, input precision, and assumptions inherent in each formula. Always verify critical calculations independently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Limitation of liability</h2>
            <p className="mt-3 leading-7 text-slate-400">
              {BRAND.name} and its operators are not liable for any damages arising from the use or inability to use our calculators, guides, or content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Intellectual property</h2>
            <p className="mt-3 leading-7 text-slate-400">
              All content, design, and code on this site are owned by {BRAND.name} or used with permission. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Termination</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We reserve the right to restrict, suspend, or terminate access to the site or any individual calculator at any time without prior notice. You may stop using the site at any time. Upon termination, all provisions of these terms that by their nature should survive will remain in effect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Governing law</h2>
            <p className="mt-3 leading-7 text-slate-400">
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Third-party links</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Our site may contain links to third-party websites. We are not responsible for their content, privacy practices, or terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Changes to terms</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3 leading-7 text-slate-400">
              For questions about these terms, <Link to="/contact" className="text-mint hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="panel p-8 text-center">
          <h2 className="text-2xl font-black text-white">Explore our calculators</h2>
          <p className="mt-3 text-slate-400">Free tools for AI, startup, and marketing metrics.</p>
          <Link to="/calculators/ai" className="button-primary mt-6 inline-flex">Browse calculators</Link>
        </div>
      </section>
    </>
  );
}
