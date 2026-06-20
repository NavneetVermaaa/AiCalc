export const internalLinkMap = {
  ai: ["openai-cost-calculator", "ai-roi-calculator", "ai-agent-savings-calculator"],
  startup: ["burn-rate-calculator", "runway-calculator", "cac-calculator", "ltv-calculator"],
  marketing: ["roas-calculator", "cpc-calculator", "conversion-rate-calculator"]
};

export const siteUrl = import.meta.env.VITE_SITE_URL || "https://aicalcpro.com";
export const organization = {
  name: "Calcio",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: ["https://www.linkedin.com/company/ai-calc-pro"]
};
