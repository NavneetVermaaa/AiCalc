import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import SEO from "../components/SEO.jsx";
import { BRAND } from "../config/brand";
import { SITE_URL } from "../config/site";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${BRAND.name}`,
  description: "Get in touch with the Calcio team.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: BRAND.name,
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "navneet.v0000001@gmail.com",
      url: `${SITE_URL}/contact`
    }
  }
};

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us — Get Support or Share Feedback on Calcio Calculators"
        description={`Contact the ${BRAND.name} team. Get support, share feedback, or ask questions about our free business calculators.`}
        path="/contact"
        schema={[contactPageSchema]}
      />
      <section className="container-page py-12 lg:py-20">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Have a question, suggestion, or feedback? We would love to hear from you.
        </p>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-lg">
          <div className="panel p-6">
            <Mail className="text-mint" size={26} />
            <h2 className="mt-4 text-xl font-bold text-white">Email us</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">For all inquiries, feedback, and support.</p>
            <a href="mailto:navneet.v0000001@gmail.com" className="mt-4 inline-flex items-center gap-2 font-bold text-mint hover:text-sky">
              navneet.v0000001@gmail.com <ArrowRight size={16} />
            </a>
            <p className="mt-4 text-sm leading-6 text-slate-400">We aim to respond within 1&ndash;2 business days.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <h2 className="text-3xl font-black text-white">How can we help?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="panel p-5">
            <h3 className="font-bold text-white">Report a bug</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Found something broken? Include the calculator name and what went wrong.</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-bold text-white">Request a feature</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Have an idea for a new calculator or improvement? We would love to hear it.</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-bold text-white">Partnership inquiry</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Interested in collaborating? Reach out and tell us about your project.</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-bold text-white">Calculator request</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Need a calculator that does not exist yet? Describe it and we will consider building it.</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-bold text-white">Privacy inquiry</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Questions about your data or privacy rights? We are happy to answer them.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <h2 className="text-3xl font-black text-white">Frequently asked</h2>
        <div className="mt-6 grid gap-4">
          <div className="panel p-5">
            <h3 className="font-bold text-white">Is Calcio really free?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Yes. Every calculator and guide on {BRAND.name} is completely free. No paywalls, no credit card required.</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-bold text-white">How long does it take to get a reply?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">We aim to respond within 1-2 business days. For urgent matters, mention it in your subject line.</p>
          </div>
          <div className="panel p-5">
            <h3 className="font-bold text-white">Can I suggest a new calculator?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Absolutely. Email us your idea and we will consider building it. We love community-driven features.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="panel p-8 text-center">
          <h2 className="text-2xl font-black text-white">Explore our calculators</h2>
          <p className="mt-3 text-slate-400">Browse 60+ free tools across AI, startup, marketing, and finance calculators.</p>
          <Link to="/calculators/ai" className="button-primary mt-6 inline-flex">Browse calculators <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
