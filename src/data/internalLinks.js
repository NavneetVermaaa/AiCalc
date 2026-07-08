import { SITE_URL } from "../config/site";

export const siteUrl = SITE_URL;
export const internalLinkMap = {
  ai: ["openai-cost-calculator", "claude-cost-calculator", "gemini-cost-calculator", "ai-roi-calculator", "ai-agent-savings-calculator"],
  startup: [
    "revenue-growth-rate-calculator",
    "gross-margin-calculator",
    "net-profit-margin-calculator",
    "churn-rate-calculator",
    "mrr-calculator",
    "arr-calculator",
    "burn-rate-calculator",
    "runway-calculator",
    "cac-calculator",
    "ltv-calculator",
    "break-even-calculator"
  ],
  marketing: ["roas-calculator", "cpc-calculator", "cpm-calculator", "conversion-rate-calculator"]
};
export const organization = {
  name: "Calcio",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: ["https://www.linkedin.com/company/calcio-tools"]
};
