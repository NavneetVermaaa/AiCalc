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
    "break-even-calculator",
    "customer-retention-rate-calculator",
    "customer-lifetime-calculator",
    "payback-period-calculator",
    "gross-profit-calculator",
    "ebitda-calculator",
    "cash-burn-ratio-calculator",
    "revenue-per-employee-calculator",
    "arpu-calculator",
    "quick-ratio-calculator",
    "rule-of-40-calculator"
  ],
  "ctr-calculator": ["cpc-calculator", "cpm-calculator", "conversion-rate-calculator", "roas-calculator"],
  "cpa-calculator": ["roas-calculator", "cpc-calculator", "conversion-rate-calculator", "marketing-roi-calculator"],
  "cpl-calculator": ["cpa-calculator", "conversion-rate-calculator", "cpc-calculator", "roas-calculator"],
  "cost-per-install-calculator": ["cpa-calculator", "conversion-rate-calculator", "cpc-calculator", "marketing-roi-calculator"],
  "marketing-roi-calculator": ["roas-calculator", "cpa-calculator", "cpc-calculator", "conversion-rate-calculator", "marketing-efficiency-ratio-calculator"],
  "email-open-rate-calculator": ["email-click-rate-calculator", "conversion-rate-calculator", "cpc-calculator"],
  "email-click-rate-calculator": ["email-open-rate-calculator", "conversion-rate-calculator", "cpl-calculator"],
  "bounce-rate-calculator": ["conversion-rate-calculator", "engagement-rate-calculator", "cpm-calculator"],
  "engagement-rate-calculator": ["bounce-rate-calculator", "conversion-rate-calculator", "cpm-calculator"],
  "marketing-efficiency-ratio-calculator": ["roas-calculator", "marketing-roi-calculator", "cpa-calculator", "cpc-calculator"],
  "roas-calculator": ["cpc-calculator", "ctr-calculator", "cpm-calculator", "conversion-rate-calculator", "marketing-efficiency-ratio-calculator"],
  "cpc-calculator": ["roas-calculator", "ctr-calculator", "cpm-calculator", "conversion-rate-calculator", "cpa-calculator"],
  "cpm-calculator": ["roas-calculator", "ctr-calculator", "cpc-calculator", "conversion-rate-calculator", "bounce-rate-calculator"],
  "conversion-rate-calculator": ["roas-calculator", "ctr-calculator", "cpa-calculator", "cpl-calculator", "bounce-rate-calculator"]
};

export function getInternalLinks(calculator) {
  return internalLinkMap[calculator.slug] ?? internalLinkMap[calculator.category] ?? [];
}
export const organization = {
  name: "Calcio",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: ["https://www.linkedin.com/company/calcio-tools"]
};
