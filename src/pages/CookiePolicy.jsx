import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { SITE_URL } from "../config/site";

const cookieSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Cookie Policy – ${BRAND.name}`,
  description: `Cookie policy for ${BRAND.name}. Learn how we use cookies and similar technologies.`,
  url: `${SITE_URL}/cookie-policy`,
  isPartOf: { "@type": "WebSite", name: BRAND.name, url: SITE_URL }
};

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy" description={`${BRAND.name} cookie policy. Learn about the cookies we use and how you can control them.`} path="/cookie-policy" schema={[cookieSchema]} />
      <section className="container-page py-12 lg:py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Cookie Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: July 11, 2026</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          We use cookies and similar technologies to improve your experience, analyze traffic, and support future advertising. This policy explains what cookies are, how we use them, and how you can control them.
        </p>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white">What are cookies?</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, remember preferences, and provide analytics information to site owners.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Essential cookies</h2>
            <p className="mt-3 leading-7 text-slate-400">
              These cookies are necessary for the website to function. They enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies.
            </p>
            <p className="mt-3 leading-7 text-slate-400">
              {BRAND.name} does not use authentication cookies because we do not require accounts or logins. No essential cookies are set beyond those required by our hosting platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Analytics cookies</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We use analytics cookies to understand how visitors interact with our calculators and content. This helps us improve the site and identify which tools are most useful. These cookies collect anonymous information about page visits, time spent, and interaction patterns.
            </p>
            <p className="mt-3 leading-7 text-slate-400">
              The analytics provider may set cookies on our behalf. No personally identifiable information is collected through analytics cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Advertising cookies (future)</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We may use Google AdSense or other advertising platforms in the future. These platforms may set cookies to deliver personalized advertisements based on your browsing history and interests. This practice is called interest-based advertising.
            </p>
            <p className="mt-3 leading-7 text-slate-400">
              You will be notified before any advertising cookies are placed. The Google AdSense privacy policy can be found at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">policies.google.com/privacy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Managing cookies</h2>
            <p className="mt-3 leading-7 text-slate-400">
              You can control and manage cookies in your browser settings. Most browsers allow you to block or delete cookies. Below are links to instructions for popular browsers:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-3 leading-7 text-slate-400">
              Disabling cookies may affect how certain features of the website work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Third-party cookies</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Some third-party services we use, such as analytics providers and future advertising platforms, may set their own cookies. We do not control these cookies. Refer to the respective third-party privacy policies for more information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Changes to this policy</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We may update this Cookie Policy as our use of cookies evolves. Material changes will be posted here with an updated &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Questions about this policy? Email us at <a href="mailto:navneet.v0000001@gmail.com" className="text-mint hover:underline">navneet.v0000001@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
