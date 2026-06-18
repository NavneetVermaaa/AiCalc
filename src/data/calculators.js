const calc = (id, category, title, description, fields, compute, formula, resultLabel, unit = "") => ({
  id,
  slug: id,
  category,
  title,
  description,
  fields,
  compute,
  formula,
  resultLabel,
  unit,
  examples: [
    `${title} helps teams compare scenarios before budget is committed.`,
    `Use it during planning reviews, board updates, and campaign retrospectives.`
  ],
  useCases: [
    "Forecast budget impact before launching a workflow.",
    "Create quick benchmarks for founders, marketers, and operators.",
    "Align finance, growth, and product teams around one working number."
  ],
  faqs: [
    {
      question: `What is the ${title}?`,
      answer: `The ${title} is a planning tool that converts common business inputs into a practical operating metric.`
    },
    {
      question: "Are the results exact?",
      answer: "Results are estimates based on the inputs provided. Validate assumptions against invoices, analytics, and finance data."
    },
    {
      question: "How often should I update this calculation?",
      answer: "Update it whenever pricing, usage, conversion rates, or revenue assumptions change materially."
    }
  ]
});

export const categories = [
  {
    id: "ai",
    title: "AI Calculators",
    description: "Model cost, automation ROI, and agent savings calculators for AI product teams."
  },
  {
    id: "startup",
    title: "Startup Calculators",
    description: "Runway, burn, CAC, LTV, and break-even tools for founder operating decisions."
  },
  {
    id: "marketing",
    title: "Marketing Calculators",
    description: "ROAS, CPC, CPM, and conversion calculators for growth teams."
  }
];

export const calculators = [
  calc(
    "openai-cost-calculator",
    "ai",
    "OpenAI Cost Calculator",
    "Estimate monthly OpenAI API spend from token usage, request volume, and model pricing.",
    [
      { name: "requests", label: "Monthly requests", value: 100000 },
      { name: "inputTokens", label: "Input tokens per request", value: 800 },
      { name: "outputTokens", label: "Output tokens per request", value: 300 },
      { name: "inputPrice", label: "Input price per 1M tokens", value: 2.5 },
      { name: "outputPrice", label: "Output price per 1M tokens", value: 10 }
    ],
    (v) => (v.requests * v.inputTokens * v.inputPrice) / 1000000 + (v.requests * v.outputTokens * v.outputPrice) / 1000000,
    "(requests x input tokens x input price / 1,000,000) + (requests x output tokens x output price / 1,000,000)",
    "Estimated monthly cost",
    "$"
  ),
  calc(
    "claude-cost-calculator",
    "ai",
    "Claude Cost Calculator",
    "Forecast Claude API spend by combining input tokens, output tokens, and pricing assumptions.",
    [
      { name: "requests", label: "Monthly requests", value: 60000 },
      { name: "inputTokens", label: "Input tokens per request", value: 1200 },
      { name: "outputTokens", label: "Output tokens per request", value: 450 },
      { name: "inputPrice", label: "Input price per 1M tokens", value: 3 },
      { name: "outputPrice", label: "Output price per 1M tokens", value: 15 }
    ],
    (v) => (v.requests * v.inputTokens * v.inputPrice) / 1000000 + (v.requests * v.outputTokens * v.outputPrice) / 1000000,
    "(monthly requests x average tokens x token price) split by input and output usage",
    "Estimated monthly cost",
    "$"
  ),
  calc(
    "gemini-cost-calculator",
    "ai",
    "Gemini Cost Calculator",
    "Plan Gemini API costs for AI apps, search workflows, and multimodal product features.",
    [
      { name: "requests", label: "Monthly requests", value: 90000 },
      { name: "inputTokens", label: "Input tokens per request", value: 1000 },
      { name: "outputTokens", label: "Output tokens per request", value: 350 },
      { name: "inputPrice", label: "Input price per 1M tokens", value: 1.25 },
      { name: "outputPrice", label: "Output price per 1M tokens", value: 5 }
    ],
    (v) => (v.requests * v.inputTokens * v.inputPrice) / 1000000 + (v.requests * v.outputTokens * v.outputPrice) / 1000000,
    "total token volume / 1,000,000 x model price",
    "Estimated monthly cost",
    "$"
  ),
  calc(
    "ai-roi-calculator",
    "ai",
    "AI ROI Calculator",
    "Measure the return on investment from AI tools, agents, and workflow automation.",
    [
      { name: "monthlySavings", label: "Monthly savings", value: 12000 },
      { name: "monthlyRevenue", label: "Monthly revenue lift", value: 5000 },
      { name: "monthlyCost", label: "Monthly AI cost", value: 3500 }
    ],
    (v) => ((v.monthlySavings + v.monthlyRevenue - v.monthlyCost) / Math.max(v.monthlyCost, 1)) * 100,
    "((monthly savings + revenue lift - AI cost) / AI cost) x 100",
    "AI ROI",
    "%"
  ),
  calc(
    "ai-agent-savings-calculator",
    "ai",
    "AI Agent Savings Calculator",
    "Estimate labor hours and operating costs saved by deploying AI agents.",
    [
      { name: "hoursSaved", label: "Hours saved per month", value: 240 },
      { name: "hourlyCost", label: "Loaded hourly cost", value: 65 },
      { name: "agentCost", label: "Monthly agent cost", value: 2500 }
    ],
    (v) => v.hoursSaved * v.hourlyCost - v.agentCost,
    "(hours saved x loaded hourly cost) - monthly agent cost",
    "Net monthly savings",
    "$"
  ),
  calc("burn-rate-calculator", "startup", "Burn Rate Calculator", "Calculate monthly net burn from cash inflows and outflows.", [{ name: "expenses", label: "Monthly expenses", value: 85000 }, { name: "revenue", label: "Monthly revenue", value: 22000 }], (v) => v.expenses - v.revenue, "monthly expenses - monthly revenue", "Net burn", "$"),
  calc("runway-calculator", "startup", "Runway Calculator", "Estimate how many months your startup can operate before cash reaches zero.", [{ name: "cash", label: "Cash balance", value: 750000 }, { name: "burn", label: "Monthly net burn", value: 63000 }], (v) => v.cash / Math.max(v.burn, 1), "cash balance / monthly net burn", "Runway", " months"),
  calc("cac-calculator", "startup", "CAC Calculator", "Calculate customer acquisition cost from sales and marketing spend.", [{ name: "spend", label: "Sales and marketing spend", value: 40000 }, { name: "customers", label: "New customers", value: 120 }], (v) => v.spend / Math.max(v.customers, 1), "acquisition spend / new customers", "CAC", "$"),
  calc("ltv-calculator", "startup", "LTV Calculator", "Estimate customer lifetime value using ARPA, margin, and churn.", [{ name: "arpa", label: "Average revenue per account", value: 180 }, { name: "margin", label: "Gross margin percent", value: 82 }, { name: "churn", label: "Monthly churn percent", value: 4 }], (v) => (v.arpa * (v.margin / 100)) / Math.max(v.churn / 100, 0.001), "(ARPA x gross margin) / monthly churn", "LTV", "$"),
  calc("break-even-calculator", "startup", "Break-Even Calculator", "Find the revenue or units needed to cover fixed and variable costs.", [{ name: "fixedCosts", label: "Fixed costs", value: 50000 }, { name: "price", label: "Price per unit", value: 99 }, { name: "variableCost", label: "Variable cost per unit", value: 22 }], (v) => v.fixedCosts / Math.max(v.price - v.variableCost, 1), "fixed costs / (price - variable cost)", "Break-even units"),
  calc("roas-calculator", "marketing", "ROAS Calculator", "Measure return on ad spend from campaign revenue and media spend.", [{ name: "revenue", label: "Campaign revenue", value: 120000 }, { name: "adSpend", label: "Ad spend", value: 30000 }], (v) => v.revenue / Math.max(v.adSpend, 1), "campaign revenue / ad spend", "ROAS", "x"),
  calc("cpc-calculator", "marketing", "CPC Calculator", "Calculate cost per click for paid search, paid social, and display campaigns.", [{ name: "adSpend", label: "Ad spend", value: 10000 }, { name: "clicks", label: "Clicks", value: 8500 }], (v) => v.adSpend / Math.max(v.clicks, 1), "ad spend / clicks", "CPC", "$"),
  calc("cpm-calculator", "marketing", "CPM Calculator", "Calculate cost per thousand impressions for awareness campaigns.", [{ name: "adSpend", label: "Ad spend", value: 15000 }, { name: "impressions", label: "Impressions", value: 1800000 }], (v) => (v.adSpend / Math.max(v.impressions, 1)) * 1000, "(ad spend / impressions) x 1,000", "CPM", "$"),
  calc("conversion-rate-calculator", "marketing", "Conversion Rate Calculator", "Calculate the percentage of visitors or clicks that convert.", [{ name: "conversions", label: "Conversions", value: 420 }, { name: "visitors", label: "Visitors", value: 14000 }], (v) => (v.conversions / Math.max(v.visitors, 1)) * 100, "(conversions / visitors) x 100", "Conversion rate", "%")
];

export const getCalculator = (slug) => calculators.find((item) => item.slug === slug);
export const getCategory = (id) => categories.find((item) => item.id === id);
export const calculatorsByCategory = (id) => calculators.filter((item) => item.category === id);
