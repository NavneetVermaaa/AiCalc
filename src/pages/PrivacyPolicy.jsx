import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { SITE_URL } from "../config/site";

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Privacy Policy – ${BRAND.name}`,
  description: `Privacy policy for ${BRAND.name}. Learn how we handle your data.`,
  url: `${SITE_URL}/privacy-policy`,
  isPartOf: {
    "@type": "WebSite",
    name: BRAND.name,
    url: SITE_URL
  }
};

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={`${BRAND.name} privacy policy. We respect your privacy and are transparent about how we collect, use, and protect your data.`}
        path="/privacy-policy"
        schema={[privacySchema]}
      />
      <section className="container-page py-12 lg:py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: June 24, 2026</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Your privacy matters to us. This policy explains what data we collect, why we collect it, and how we protect it.
        </p>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Information we collect</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We collect minimal information. When you use our calculators, all computation happens in your browser. We do not store your inputs or results on our servers.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
              <li><strong className="text-white">Usage data:</strong> Anonymous page views and tool interactions via our analytics provider.</li>
              <li><strong className="text-white">Cookies:</strong> We use minimal cookies for analytics and, if applicable, AdSense personalization.</li>
              <li><strong className="text-white">Contact information:</strong> If you email us, we keep your message only to respond.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">How we use your data</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We use data to improve our calculators, understand which tools are most helpful, and fix issues. We never sell your data.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
              <li>Improve calculator accuracy and usability</li>
              <li>Analyze traffic patterns to optimize content</li>
              <li>Respond to your inquiries and feedback</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Third-party services</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We use the following third-party services. Each has its own privacy policy governing data handling.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
              <li><strong className="text-white">Vercel:</strong> Hosting platform. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Vercel Privacy Policy</a>.</li>
              <li><strong className="text-white">Google AdSense:</strong> May use cookies for personalized ads. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Google Privacy Policy</a>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Information we do NOT collect</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We do not collect or store your calculator inputs or results. All calculations happen in your browser. We do not request or store any personally identifiable information beyond what you voluntarily send us via email.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
              <li>No names, addresses, or phone numbers</li>
              <li>No financial account information</li>
              <li>No login credentials or passwords</li>
              <li>No browsing history beyond anonymous analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Children&apos;s privacy</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we will delete it promptly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Your rights</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Depending on your location, you may have rights under GDPR, CCPA, or similar regulations. These include the right to access, correct, or delete your data.
            </p>
            <p className="mt-3 leading-7 text-slate-400">
              To exercise your rights, email us at <a href="mailto:calcio.tools@gmail.com" className="text-mint hover:underline">calcio.tools@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Data security</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We use industry-standard encryption (HTTPS) for all data transmitted between your browser and our servers. Our site is hosted on Vercel's secure infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Changes to this policy</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We may update this policy periodically. Material changes will be posted here with an updated &quot;Last updated&quot; date.
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

      <section className="container-page py-12">
        <div className="panel p-8 text-center">
          <h2 className="text-2xl font-black text-white">Back to calculators</h2>
          <p className="mt-3 text-slate-400">Explore free AI, startup, and marketing tools.</p>
          <Link to="/calculators/ai" className="button-primary mt-6 inline-flex">Browse calculators</Link>
        </div>
      </section>
    </>
  );
}
