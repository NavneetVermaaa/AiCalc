import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
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
      email: "calcio.tools@gmail.com",
      url: `${SITE_URL}/contact`
    }
  }
};

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
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
        <div className="grid gap-8 md:grid-cols-2">
          <div className="panel p-6">
            <Mail className="text-mint" size={26} />
            <h2 className="mt-4 text-xl font-bold text-white">Email us</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">For support, feature requests, or general inquiries.</p>
            <a href="mailto:calcio.tools@gmail.com" className="mt-4 inline-flex items-center gap-2 font-bold text-mint hover:text-sky">
              calcio.tools@gmail.com <ArrowRight size={16} />
            </a>
          </div>
          <div className="panel p-6">
            <MessageSquare className="text-mint" size={26} />
            <h2 className="mt-4 text-xl font-bold text-white">LinkedIn</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Follow us for updates, tips, and new calculator releases.</p>
            <a href="https://www.linkedin.com/company/ai-calc-pro" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-bold text-mint hover:text-sky">
              @ai-calc-pro <ArrowRight size={16} />
            </a>
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
          <p className="mt-3 text-slate-400">Browse 15+ free tools for AI, startup, and marketing metrics.</p>
          <Link to="/calculators/ai" className="button-primary mt-6 inline-flex">Browse calculators <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
