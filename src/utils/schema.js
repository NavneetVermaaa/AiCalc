import { SITE_URL } from "../config/site";
import { organization } from "../data/internalLinks";
const siteUrl = SITE_URL;

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CalcioCalc",
  url: siteUrl,
  description: "Free AI, SaaS, startup, marketing and finance calculators with transparent formulas and practical guides."
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  ...organization
};

export const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calcio",
  url: siteUrl,
  applicationCategory: "BusinessApplication",
  description: "Free business calculator platform for startups, marketers, founders and growth teams.",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

export const faqSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer }
  }))
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`
  }))
});

const author = {
  "@type": "Person",
  name: "Navneet Verma",
  jobTitle: "AI Automation Developer & Web Engineer",
  description: "AI Automation Developer & Web Engineer specializing in AI APIs, workflow automation, SaaS tools, developer resources, and cost optimization. Builds practical calculators and technical resources that help businesses understand pricing, automation, and operational efficiency."
};

export const articleSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.metaTitle || post.title,
  description: post.description,
  datePublished: post.publishedDate || post.date,
  dateModified: post.updatedDate || post.date,
  author,
  publisher: organization
});
