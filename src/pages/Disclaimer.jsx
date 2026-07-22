import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { SITE_URL } from "../config/site";

const disclaimerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Disclaimer – ${BRAND.name}`,
  description: `Disclaimer for ${BRAND.name}. Our calculators provide estimates for informational purposes only.`,
  url: `${SITE_URL}/disclaimer`,
  isPartOf: { "@type": "WebSite", name: BRAND.name, url: SITE_URL }
};

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer | Calculator Accuracy & Legal Information — CalcioCalc" description={`${BRAND.name} disclaimer. Our calculators provide estimates for informational and educational purposes only.`} path="/disclaimer" schema={[disclaimerSchema]} />
      <section className="container-page py-12 lg:py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Disclaimer</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: July 11, 2026</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          The information and calculators on {BRAND.name} are provided for general informational and educational purposes only.
        </p>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Educational purposes only</h2>
            <p className="mt-3 leading-7 text-slate-400">
              All content, tools, and calculators on {BRAND.name} are intended for educational and informational purposes. They are designed to help you understand concepts, explore scenarios, and make more informed decisions. They are not a substitute for professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">No financial advice</h2>
            <p className="mt-3 leading-7 text-slate-400">
              The calculators and content on this site do not constitute financial advice. Results are estimates based on the inputs you provide. We do not recommend any specific financial products, investments, or strategies. Consult a qualified financial advisor for advice tailored to your situation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">No investment advice</h2>
            <p className="mt-3 leading-7 text-slate-400">
              None of the content on {BRAND.name} should be construed as investment advice. Past performance and projected returns shown in calculators are not guarantees of future results. Always conduct your own research before making investment decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">No legal or tax advice</h2>
            <p className="mt-3 leading-7 text-slate-400">
              {BRAND.name} does not provide legal or tax advice. Tax calculators provide rough estimates only. Actual tax liabilities depend on your specific circumstances, jurisdiction, and applicable laws. Consult a qualified legal or tax professional for advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">No warranty</h2>
            <p className="mt-3 leading-7 text-slate-400">
              All calculators and content are provided &quot;as is&quot; without any warranty, express or implied. While we strive for accuracy, we make no guarantees about the completeness, reliability, or accuracy of the results. Calculations may contain errors or may not reflect the most current information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Calculation limitations</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Our calculators use simplified formulas for illustrative purposes. They may not account for all variables that apply to your specific situation. Factors such as fees, taxes, inflation, market volatility, and individual circumstances can significantly affect real-world outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">User responsibility</h2>
            <p className="mt-3 leading-7 text-slate-400">
              You are solely responsible for any decisions you make based on the information and calculations provided by this site. We encourage you to verify critical numbers with qualified professionals before making financial, legal, or business decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Questions about this disclaimer? Email us at <a href="mailto:navneet.v0000001@gmail.com" className="text-mint hover:underline">navneet.v0000001@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
