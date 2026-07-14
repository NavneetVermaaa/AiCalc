import { SITE_URL } from "../config/site";
import { organization } from "../data/internalLinks";
const siteUrl = SITE_URL;

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

export const articleSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.metaTitle || post.title,
  description: post.description,
  datePublished: post.publishedDate || post.date,
  dateModified: post.updatedDate || post.date,
  author: { "@type": "Person", name: post.author },
  publisher: organization
});
