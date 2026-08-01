export const calculatorContentStartupB = {
  "break-even-calculator": {
    formulaSteps: [
      "Enter fixed costs, price per unit, and variable cost per unit.",
      "Compute contribution margin: price minus variable cost per unit.",
      "Divide fixed costs by contribution margin.",
      "Result is the number of units you must sell to cover all costs."
    ],
    formulaVariables: [
      { name: "fixedCosts", meaning: "Total fixed costs such as rent, salaries, insurance, and software that do not change with sales volume." },
      { name: "price", meaning: "The price you charge per unit or subscription." },
      { name: "variableCost", meaning: "The direct cost of delivering one more unit, such as hosting, support, or COGS per unit." },
      { name: "result", meaning: "Break-even units: the number of units needed per period for revenue to exactly cover costs." }
    ],
    workedExample: {
      scenario: "A fictional project management SaaS called Deskly plans a new premium tier at $99 per account per month, with $22 per account in hosting and support variable costs and $50,000 in monthly fixed costs.",
      inputs: [
        { name: "fixedCosts", label: "Fixed costs", value: 50000 },
        { name: "price", label: "Price per unit", value: 99 },
        { name: "variableCost", label: "Variable cost per unit", value: 22 }
      ],
      steps: [
        "Contribution margin = $99 - $22 = $77 per unit.",
        "Break-even units = $50,000 / $77 = 649.35 units.",
        "Deskly needs about 650 accounts per month to cover all fixed and variable costs.",
        "Every account beyond 650 contributes $77 of pure profit toward operating margin."
      ],
      result: "Deskly must sell approximately 649.35 (about 650) premium accounts per month to break even; every account beyond that adds $77 of gross profit."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Low break-even (under 25% of addressable market)", range: "Less than ~250 units", meaning: "You cover fixed costs quickly with modest volume, leaving room to fund growth and absorb early churn.", recommendation: "Push aggressive sales and marketing to overshoot the break-even point and build a profit buffer." },
        { label: "Moderate break-even", range: "~250-750 units", meaning: "A realistic target for a mid-market or SMB SaaS tier; this is where most healthy pricing sits.", recommendation: "Monitor contribution margin monthly and reprice or cut variable costs if margins erode." },
        { label: "High break-even (over 75% of addressable market)", range: "More than ~750 units", meaning: "Your fixed costs are heavy relative to unit margin, so small sales shortfalls quickly produce losses.", recommendation: "Raise price, reduce fixed costs, or lower variable costs before scaling spend." },
        { label: "Contribution margin below $1", range: "Price minus variable cost below 1", meaning: "The math is unsustainably tight or negative because you cannot cover variable costs per unit.", recommendation: "Reprice immediately or redesign delivery to cut per-unit costs before you grow into a bigger loss." }
      ]
    },
    practicalTips: [
      "Use monthly fixed costs, not annual, so break-even units line up with your monthly sales target.",
      "If you offer annual plans, convert them to monthly-equivalent revenue before comparing to break-even.",
      "Recalculate break-even whenever you change pricing, hire, or renegotiate any fixed contract.",
      "Segment break-even by tier or plan since contribution margin differs across products.",
      "Track break-even units as a percentage of market size; anything above 50% means you need much better conversion."
    ],
    methodology: {
      approach: "This calculator divides total fixed costs by the contribution margin per unit, which is the selling price minus the variable cost per unit. The result is the number of units that makes revenue exactly equal to total cost in a period.",
      rounding: "Results are shown as-is and can be rounded up to the nearest whole unit when setting sales targets.",
      units: "Currency values are treated as the same currency throughout the calculation; units are the number of items or accounts sold.",
      exclusions: "Does not account for taxes, interest, discounts, refunds, or semi-variable costs that change step-wise with volume.",
      limitations: "Assumes a single price and a single variable cost per unit. Real SaaS companies often sell multiple tiers, annual discounts, and usage-based add-ons that make a blended contribution margin more accurate.",
      source: "Standard cost-volume-profit analysis used in managerial accounting and SaaS unit economics.",
      date: "July 2026"
    },
    references: [
      { name: "Investopedia: Break-Even Analysis", url: "https://www.investopedia.com" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" }
    ],
    relatedGuides: [
      { slug: "startup-burn-rate-guide", title: "Startup Burn Rate: How to Calculate & Reduce Monthly Cash Consumption" },
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Is break-even measured in units or in dollars of revenue?", answer: "It can be either. This calculator returns units. To get break-even revenue, multiply the break-even units by your price. Deskly's break-even revenue would be 649.35 x $99, or about $64,286 per month." },
      { question: "What happens to break-even when I offer annual contracts?", answer: "Annual contracts change the timing, not the math. Convert annual revenue to a monthly equivalent and use the monthly fixed cost of servicing the account, then recalculate. A one-year prepaid plan usually lowers contribution margin per month because of the discount." },
      { question: "Why does my break-even change when I add a support team?", answer: "Customer support labor is usually classified as variable or semi-variable cost. If support scales with accounts, include it in variable cost per unit; if it is a fixed team, include it in fixed costs. Your classification materially changes the result." }
    ],
    disclaimer: "Informational only. This calculator provides an estimate based on your inputs and does not constitute financial, accounting, or investment advice. Consult a qualified professional before making pricing or budgeting decisions."
  },
  "customer-retention-rate-calculator": {
    formulaSteps: [
      "Enter customers at the start of the period, new customers added, and customers at the end.",
      "Subtract new customers from the ending count to isolate retained customers.",
      "Divide retained customers by the starting customer count.",
      "Multiply by 100 to get the retention percentage."
    ],
    formulaVariables: [
      { name: "customersAtStart", meaning: "The number of paying customers at the beginning of the measurement period." },
      { name: "newCustomers", meaning: "Customers acquired during the period, who must be excluded from the retained count." },
      { name: "customersAtEnd", meaning: "The total customer count at the end of the period, including new customers." },
      { name: "result", meaning: "Customer retention rate: the percentage of the original customer base that remained by period end." }
    ],
    workedExample: {
      scenario: "A fictional sales analytics SaaS called PipelinePilot wants to know whether its onboarding revamp improved retention during the last quarter.",
      inputs: [
        { name: "customersAtStart", label: "Customers at start", value: 1000 },
        { name: "newCustomers", label: "New customers", value: 200 },
        { name: "customersAtEnd", label: "Customers at end", value: 1050 }
      ],
      steps: [
        "Retained customers = 1,050 - 200 = 850.",
        "Retention rate = 850 / 1,000 = 0.85.",
        "0.85 x 100 = 85% retention for the quarter.",
        "Implied churn = 100% - 85% = 15%, or 150 lost customers."
      ],
      result: "PipelinePilot retained 85% of its original 1,000 customers, meaning 150 customers churned during the period."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Below 80% annual retention", meaning: "You are losing more than a fifth of your customer base each year, which erodes compounding growth and raises CAC pressure.", recommendation: "Audit onboarding, health scores, and support response times before scaling acquisition spend." },
        { label: "Average", range: "85-90% annual retention", meaning: "Typical for SMB SaaS with some expansion headroom; retention is not a differentiator yet.", recommendation: "Introduce success touches at day 30-90 and monitor cohorts to stop churn from drifting higher." },
        { label: "Strong", range: "90-95% annual retention", meaning: "Above-average retention that compounds into materially lower CAC and higher LTV.", recommendation: "Invest in expansion plays like upsells and multi-seat sales to convert retention into growth." },
        { label: "Elite", range: "Above 95% annual retention", meaning: "Enterprise-grade retention that makes revenue highly predictable and justifies premium valuation multiples.", recommendation: "Protect the inputs: keep NPS high, monitor product adoption, and document what drives retention so it survives leadership changes." }
      ]
    },
    benchmarks: {
      caption: "Annual customer retention benchmarks for SaaS (churn is the inverse: 95% retention = 5% churn)",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Annual retention (all SaaS)", "85-90%", "90%+"],
        ["Annual retention (SMB SaaS)", "80-88%", "88%+"],
        ["Annual retention (mid-market SaaS)", "85-92%", "92%+"],
        ["Annual retention (enterprise SaaS)", "90-95%", "95%+"]
      ]
    },
    practicalTips: [
      "Always measure on a cohort basis: group customers by their signup month so you are not mixing vintages.",
      "Exclude free and trial users from the count unless your business model is freemium, then track them separately.",
      "Watch the retention trend, not a single month; three consecutive declining months justify an intervention.",
      "Pair retention with logo churn and revenue churn, since losing small accounts can hide large revenue losses.",
      "Tie retention reporting to onboarding: most churn decisions happen in the first 90 days."
    ],
    methodology: {
      approach: "The calculator isolates retained customers by subtracting new customers from the ending count, then divides by the starting count and converts to a percentage. This is the standard SaaS logo retention formula used in cohort analysis.",
      rounding: "Results are rounded to the nearest whole percentage point in display, with the raw percentage used in further math.",
      units: "Customer counts are unitless numbers; the result is a percentage.",
      exclusions: "Does not account for seasonality, reactivated customers, or customers who pause rather than cancel subscriptions.",
      limitations: "A single-period retention rate hides cohort differences. New onboarding cohorts often retain better or worse than the average, so use this metric alongside cohort tables.",
      source: "Standard SaaS retention methodology as published in SaaS benchmark studies and the OpenView SaaS Metrics guide.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Paddle", url: "https://www.paddle.com" }
    ],
    relatedGuides: [
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" },
      { slug: "mrr-guide", title: "Monthly Recurring Revenue (MRR): How to Calculate, Track & Grow It" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" }
    ],
    faqs: [
      { question: "Should I track monthly or annual retention?", answer: "Both, but for different questions. Monthly retention reacts quickly to onboarding and product changes, while annual retention is what investors and benchmarks use. Annual retention of 85% roughly equals monthly retention of 98.7% (0.987^12)." },
      { question: "What is a retention cohort and why does it matter?", answer: "A cohort is a group of customers who started in the same month. Measuring retention by cohort reveals whether new customers stick better than old ones, which a single aggregate rate hides. Improving cohort retention is the most direct lever for raising your overall rate." },
      { question: "How do I improve retention without changing the product?", answer: "Start with customer success: onboarding check-ins, health scoring, and proactive outreach at renewal milestones. For many SaaS companies, a systematic success motion improves annual retention by several points before any product work." }
    ]
  },
  "customer-lifetime-calculator": {
    formulaSteps: [
      "Enter the average number of years a customer stays with your product.",
      "The calculator returns that figure directly as the customer lifetime.",
      "Pair the lifetime with ARPA and margin to compute LTV.",
      "Use lifetime to set a maximum affordable CAC."
    ],
    formulaVariables: [
      { name: "averageLifespan", meaning: "The average number of years a customer remains a paying customer, from first payment to churn." },
      { name: "result", meaning: "Customer lifetime in years: the average duration of the customer relationship." }
    ],
    workedExample: {
      scenario: "A fictional enterprise workflow SaaS called WorkstreamEdge analyzed five years of cohort data and found the average customer stays subscribed for 5 years.",
      inputs: [
        { name: "averageLifespan", label: "Average customer lifespan in years", value: 5 }
      ],
      steps: [
        "Cohort analysis shows the median customer tenure is 5 years.",
        "Customer lifetime = 5 years.",
        "With $180 monthly ARPA and 82% gross margin, LTV = $180 x 12 x 5 x 0.82 = $8,856.",
        "At a 3x LTV:CAC target, WorkstreamEdge can afford a CAC up to about $2,952."
      ],
      result: "The average customer lifetime is 5 years, which supports an LTV of $8,856 at current ARPA and margin."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "High churn (short lifetime)", range: "1-2 years", meaning: "Customers are leaving before you recover acquisition cost and realize meaningful profit from the relationship.", recommendation: "Fix onboarding and early value delivery first; short lifetimes are usually a first-year experience problem." },
        { label: "Typical SMB", range: "3-4 years", meaning: "In line with many SMB SaaS products; decent retention but not a durable moat.", recommendation: "Increase expansion revenue and reduce early churn to push lifetimes toward 5 years." },
        { label: "Strong enterprise-grade", range: "5+ years", meaning: "Typical of enterprise and mission-critical SaaS relationships, where LTV becomes large enough to fund aggressive growth.", recommendation: "Leverage the long lifetime to raise CAC targets and invest in higher-touch acquisition channels." },
        { label: "Below 1 year", range: "Under 1 year", meaning: "Critical churn: acquisition spend is likely not being recovered, and growth will stall quickly.", recommendation: "Treat this as a product-market fit emergency and investigate churn reasons before any scaling." }
      ]
    },
    practicalTips: [
      "Derive lifetime from churn as 1 divided by annual churn rate, and cross-check both methods.",
      "Segment lifetime by customer size; enterprise accounts often stay 2-3x longer than SMB accounts.",
      "Recompute lifetime quarterly as cohorts mature; young companies typically see lifetime rise as retention improves.",
      "Use lifetime, not contract length, when setting CAC budgets, since annual contracts often renew differently than they appear.",
      "Model a second scenario with lifetime reduced by 20% so your acquisition budget survives a retention downturn."
    ],
    methodology: {
      approach: "This calculator takes the average customer lifespan in years as a direct input. The figure is typically derived from historical cohort data or approximated as the inverse of the annual churn rate, so it can be combined with ARPA and margin to calculate LTV.",
      rounding: "Lifespan is used as entered; derived LTV examples round to whole dollars.",
      units: "Time is expressed in years.",
      exclusions: "Does not include onboarding length adjustments, seasonal churn patterns, or customer reactivation.",
      limitations: "A single average hides the shape of the retention curve. Typical SaaS customer lifetimes are 2-5 years, but companies with strong enterprise accounts can see 7-10 year lifetimes. Use cohort tables alongside the average.",
      source: "Standard SaaS customer lifetime methodology used in unit economics and SaaS benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Investopedia: Customer Lifetime Value", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "cac-payback-vs-ltv-cac-ratio", title: "CAC Payback Period vs LTV:CAC Ratio — Which Metric Matters More?" },
      { slug: "ltv-cac-ratio-guide", title: "LTV to CAC Ratio Explained: What Is a Good LTV:CAC for Startups?" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "How do I estimate lifespan with less than a year of data?", answer: "Use your monthly churn rate to project: 1 divided by the monthly churn rate gives lifetime in months, then divide by 12. With 4% monthly churn, expected lifetime is 25 months or roughly 2.1 years, but treat this as optimistic since early churn is usually higher." },
      { question: "Is customer lifetime the same as contract length?", answer: "No. Contract length is what you sell; lifetime is what customers actually do. Many customers on annual plans renew for years, while others cancel at the first renewal. Measure lifetime from actual cohort behavior, not contract terms." },
      { question: "How does a longer lifetime change my CAC budget?", answer: "Directly. If lifetime doubles from 2.5 to 5 years, LTV roughly doubles, and at the same LTV:CAC target you can afford roughly double the CAC per customer. Longer lifetimes justify investing in higher-priced acquisition channels." }
    ],
    disclaimer: "Informational only. Lifetime estimates rely on your assumptions and historical data and do not guarantee future customer behavior. This is not financial advice."
  },
  "payback-period-calculator": {
    formulaSteps: [
      "Enter your CAC and the monthly gross profit per customer.",
      "Divide CAC by monthly gross profit.",
      "The result is the number of months to recover acquisition cost.",
      "Compare the payback period against your target for capital efficiency."
    ],
    formulaVariables: [
      { name: "cac", meaning: "Customer acquisition cost: total sales and marketing spend divided by new customers acquired." },
      { name: "monthlyGrossProfit", meaning: "Monthly gross profit per customer: average monthly revenue per customer minus the direct cost to serve them." },
      { name: "result", meaning: "Payback period in months: how long it takes a customer's gross profit to repay their acquisition cost." }
    ],
    workedExample: {
      scenario: "A fictional CRM startup called Loopline closed a seed round and needs to know if its $333 CAC is repaid quickly enough to keep growth capital-efficient.",
      inputs: [
        { name: "cac", label: "Customer acquisition cost", value: 333 },
        { name: "monthlyGrossProfit", label: "Monthly gross profit per customer", value: 180 }
      ],
      steps: [
        "Payback = $333 / $180 = 1.85 months.",
        "The customer repays acquisition cost in under 2 months.",
        "With $180 monthly gross profit, each customer becomes profitable from month 3 onward.",
        "80% of SaaS companies target payback under 12 months, so 1.85 months is in the excellent range."
      ],
      result: "Loopline recovers its $333 CAC in 1.85 months, an excellent payback period that frees capital for reinvestment in growth."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Excellent", range: "Under 6 months", meaning: "Highly capital-efficient growth; acquisition spend is repaid before most customers even hit their renewal cycle.", recommendation: "Scale acquisition aggressively but watch that CAC does not inflate as channels saturate." },
        { label: "Good", range: "6-12 months", meaning: "Healthy for most VC-backed SaaS; about 80% of SaaS companies target a payback period under 12 months.", recommendation: "Keep payback stable while growing, and segment by channel to find your cheapest acquisition paths." },
        { label: "Average", range: "12-18 months", meaning: "Recovery stretches past the typical annual renewal, meaning some customers churn before you break even.", recommendation: "Raise pricing, improve margin, or tighten acquisition efficiency to pull payback back under 12 months." },
        { label: "Too slow", range: "Above 18 months", meaning: "Growth is consuming capital faster than customers repay it, which is dangerous for venture-backed companies with limited cash.", recommendation: "Cut CAC or increase monthly gross profit per customer before raising another round; otherwise dilution compounds." }
      ]
    },
    benchmarks: {
      caption: "CAC payback period benchmarks for SaaS",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Payback period (SMB SaaS)", "12-18 months", "Under 12 months"],
        ["Payback period (mid-market SaaS)", "9-15 months", "Under 9 months"],
        ["Payback period (enterprise SaaS)", "12-24 months", "Under 12 months"],
        ["VC-backed SaaS target", "Under 12 months", "Under 6 months"]
      ]
    },
    practicalTips: [
      "Calculate payback per acquisition channel, not just blended, because sales-led and product-led channels have very different curves.",
      "Use monthly gross profit, never revenue, when computing payback; revenue-based payback is misleadingly short.",
      "Recalculate payback after every pricing change and margin shift, since both inputs move together.",
      "If payback is under 1 month, consider whether your sales motion could tolerate higher pricing tiers.",
      "Watch payback together with churn: a short payback hides nothing, but long payback plus rising churn is the classic startup cash trap."
    ],
    methodology: {
      approach: "The calculator divides customer acquisition cost by the monthly gross profit each customer generates. The quotient expresses how many months of customer gross profit are needed to fully repay the acquisition investment.",
      rounding: "Results are rounded to 2 decimal places where fractional months occur.",
      units: "Currency inputs are treated as one consistent currency; the result is expressed in months.",
      exclusions: "Does not include the time value of money, refunds, or changes in CAC or margin over the customer lifecycle.",
      limitations: "Assumes constant monthly gross profit per customer and a fixed CAC. In practice, usage-based revenue and discounting cause monthly gross profit to vary, so payback should be modeled with average gross profit over the early months.",
      source: "Standard SaaS unit economics methodology referenced in SaaS benchmark studies and venture guidance.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "SaaS Capital Research", url: "https://www.saas-capital.com/research" },
      { name: "Investopedia: Payback Period", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "cac-payback-vs-ltv-cac-ratio", title: "CAC Payback Period vs LTV:CAC Ratio — Which Metric Matters More?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "ltv-cac-ratio-guide", title: "LTV to CAC Ratio Explained: What Is a Good LTV:CAC for Startups?" }
    ],
    faqs: [
      { question: "Should I calculate payback per channel?", answer: "Yes, ideally. A sales-led enterprise channel might have a 15-month payback while a self-serve channel repays in 3 months. Blended payback hides which channel is burning cash. Compute CAC and margin per channel and set budgets per channel based on its own payback." },
      { question: "How does a pricing increase change payback?", answer: "A price increase raises monthly gross profit per customer, which shrinks payback proportionally. For example, if gross profit rises from $180 to $240, payback falls from 1.85 to 1.39 months at the same CAC, without any improvement in acquisition efficiency." },
      { question: "What if my payback period is under 1 month?", answer: "You are repaying acquisition cost within the customer's first month, which is exceptional capital efficiency. It often signals underpricing relative to value delivered, so test raising prices to capture more of the value while keeping payback low." }
    ],
    disclaimer: "Informational only. Payback estimates depend on your CAC and margin assumptions and do not constitute financial or investment advice."
  },
  "gross-profit-calculator": {
    formulaSteps: [
      "Enter total revenue for the period.",
      "Enter cost of goods sold (COGS).",
      "Subtract COGS from revenue.",
      "The result is gross profit in dollars."
    ],
    formulaVariables: [
      { name: "revenue", meaning: "Total revenue from subscriptions, services, or product sales in the measurement period." },
      { name: "cogs", meaning: "Cost of goods sold: direct costs of delivering the product, such as hosting, support, payment fees, and fulfillment." },
      { name: "result", meaning: "Gross profit: the dollar amount left after direct production costs, available to cover operating expenses." }
    ],
    workedExample: {
      scenario: "A fictional fintech SaaS called LedgerLane sells $500,000 of annual subscriptions while spending $200,000 on cloud infrastructure, payment processing, and tier-1 support that scales with customers.",
      inputs: [
        { name: "revenue", label: "Revenue", value: 500000 },
        { name: "cogs", label: "Cost of goods sold", value: 200000 }
      ],
      steps: [
        "Gross profit = $500,000 - $200,000 = $300,000.",
        "Gross margin = $300,000 / $500,000 = 60%.",
        "LedgerLane has $300,000 left to cover R&D, sales, marketing, and admin."
      ],
      result: "LedgerLane's gross profit is $300,000, a 60% gross margin, leaving that amount to fund operating expenses."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Gross margin below 40%", meaning: "Direct costs consume most of revenue, typical of services-heavy or infrastructure-heavy models and a warning for SaaS pricing.", recommendation: "Review pricing and hosting architecture; for SaaS, margins below 60% need a clear explanation." },
        { label: "Typical SaaS", range: "Gross margin 60-80%", meaning: "The standard range for product-led SaaS, where COGS covers hosting, support, and payment fees.", recommendation: "Monitor margin trend quarterly and investigate any drift caused by rising infrastructure costs." },
        { label: "Strong", range: "Gross margin above 80%", meaning: "The typical range for efficient SaaS companies with low marginal serving costs.", recommendation: "Protect the margin: keep infrastructure costs flat per customer and avoid discounting that erodes per-unit profit." },
        { label: "Negative gross profit", range: "Below $0", meaning: "Revenue is lower than direct costs, so every sale loses money before operating expenses even begin.", recommendation: "Reprice immediately or restructure delivery; this is not fixable by cutting marketing spend." }
      ]
    },
    practicalTips: [
      "Keep COGS limited to direct, variable delivery costs and push everything else into operating expenses for clean comparisons.",
      "For SaaS, include cloud hosting, CDN, payment processing fees, and support staff directly tied to serving customers.",
      "Recalculate after every infrastructure contract renegotiation since hosting often becomes the largest COGS line.",
      "Compare gross profit across product lines; the mix shift toward lower-margin products is a common silent profit killer.",
      "Use gross profit, not revenue, in LTV and payback calculations to avoid overstating unit economics."
    ],
    methodology: {
      approach: "The calculator subtracts cost of goods sold from total revenue to produce gross profit in dollars. Gross profit is the first profitability line on the income statement and feeds directly into gross margin, LTV, and payback calculations.",
      rounding: "Currency results are shown as whole dollars for large values.",
      units: "All values are in a single currency, typically USD.",
      exclusions: "Excludes operating expenses such as marketing, R&D, and G&A, which belong in operating income and net profit calculations.",
      limitations: "Gross profit alone does not indicate overall profitability. A company can have strong gross profit and still lose money on operating expenses, so pair this with net profit and EBITDA.",
      source: "Standard income statement classification per US GAAP as applied in SaaS financial reporting.",
      date: "July 2026"
    },
    references: [
      { name: "SEC Financial Reporting", url: "https://www.sec.gov" },
      { name: "Investopedia: Gross Profit", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "What is the difference between gross profit and gross margin?", answer: "Gross profit is the dollar amount left after COGS, while gross margin expresses that amount as a percentage of revenue. LedgerLane's $300,000 gross profit equals a 60% margin. Both matter: profit shows scale, margin shows efficiency." },
      { question: "How often should I recalculate gross profit?", answer: "Monthly for operating control, and after any major change to pricing, hosting contracts, or support staffing. Gross profit trends monthly, and a small margin erosion compounds into significant profit loss over a year." },
      { question: "Should usage-based costs like AWS be classified as COGS?", answer: "For most SaaS companies, yes. Cloud hosting and infrastructure that scale with customers are direct serving costs and belong in COGS. Engineering and product development salaries are operating expenses, not COGS." }
    ]
  },
  "ebitda-calculator": {
    formulaSteps: [
      "Enter revenue and operating expenses.",
      "Subtract operating expenses from revenue.",
      "Add back depreciation and amortization.",
      "The result is EBITDA, a proxy for cash earnings from operations."
    ],
    formulaVariables: [
      { name: "revenue", meaning: "Total revenue from all sales, subscriptions, and services in the period." },
      { name: "operatingExpenses", meaning: "Total operating expenses: salaries, marketing, R&D, rent, and admin, excluding interest, taxes, depreciation, and amortization." },
      { name: "depreciation", meaning: "The non-cash charge for wear and tear on fixed assets like equipment and office improvements." },
      { name: "amortization", meaning: "The non-cash charge for intangible assets such as acquired software, patents, and customer lists." },
      { name: "result", meaning: "EBITDA: earnings before interest, taxes, depreciation, and amortization." }
    ],
    workedExample: {
      scenario: "A fictional B2B software company called MeridianSoft prepares its books for a potential acquisition and wants to present clean operating earnings.",
      inputs: [
        { name: "revenue", label: "Revenue", value: 1000000 },
        { name: "operatingExpenses", label: "Operating expenses", value: 700000 },
        { name: "depreciation", label: "Depreciation", value: 50000 },
        { name: "amortization", label: "Amortization", value: 30000 }
      ],
      steps: [
        "Operating income = $1,000,000 - $700,000 = $300,000.",
        "EBITDA = $300,000 + $50,000 + $30,000 = $380,000.",
        "EBITDA margin = $380,000 / $1,000,000 = 38%."
      ],
      result: "MeridianSoft's EBITDA is $380,000, a 38% EBITDA margin that sits in the strong range for SaaS at scale."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "EBITDA margin below 10%", meaning: "Operations barely cover their own costs after excluding capital structure effects; typical of early-stage SaaS still investing heavily.", recommendation: "Identify the biggest expense line and build a credible path to margin improvement before the next raise." },
        { label: "Moderate", range: "EBITDA margin 10-20%", meaning: "A solid middle ground for growing SaaS, often reflecting deliberate investment in sales and R&D.", recommendation: "Balance growth investment with margin expansion and watch the trend across quarters." },
        { label: "Strong", range: "EBITDA margin 20-30%+", meaning: "The zone SaaS companies at scale are expected to reach; supports higher valuation multiples.", recommendation: "Maintain operating discipline and use the margin as proof of business quality in investor conversations." },
        { label: "Negative EBITDA", range: "Below $0", meaning: "Operating losses funded by cash reserves or investment; normal at seed and Series A but time-boxed.", recommendation: "Set a concrete profitability timeline with board-approved milestones so EBITDA turns positive." }
      ]
    },
    benchmarks: {
      caption: "EBITDA margin benchmarks for SaaS companies by maturity",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["EBITDA margin (early-stage SaaS)", "-20% to 10%", "10%+"],
        ["EBITDA margin (growth-stage SaaS)", "5-20%", "20%+"],
        ["EBITDA margin (SaaS at scale)", "15-30%", "30%+"],
        ["EBITDA margin (top-quartile public SaaS)", "25-40%", "40%+"]
      ]
    },
    practicalTips: [
      "Use EBITDA margin, not absolute EBITDA, when comparing yourself to other SaaS companies of different sizes.",
      "Exclude one-time expenses like restructuring or founder payouts before presenting EBITDA to investors.",
      "Remember EBITDA is not cash flow: capital expenditures still hit the bank account and are not added back.",
      "Recalculate after every hiring wave, since salaries dominate operating expenses in SaaS.",
      "Ask your finance team how they classify stock-based compensation before comparing against benchmarks."
    ],
    methodology: {
      approach: "The calculator subtracts operating expenses from revenue and then adds back depreciation and amortization, which are non-cash charges. This isolates operating earnings before the effects of financing structure, tax jurisdictions, and accounting depreciation policy.",
      rounding: "Currency results are rounded to whole dollars for large values.",
      units: "All values are in a single currency, typically USD.",
      exclusions: "Excludes interest expense and interest income, income taxes, and one-time or non-operating items.",
      limitations: "EBITDA can be gamed through aggressive expense classification and ignores working capital and capital expenditure needs. Treat it as one view of profitability, not a substitute for cash flow analysis.",
      source: "Standard EBITDA methodology used in M&A and lender covenants, consistent with US GAAP income statement classifications.",
      date: "July 2026"
    },
    references: [
      { name: "Investopedia: EBITDA", url: "https://www.investopedia.com" },
      { name: "SEC Financial Reporting", url: "https://www.sec.gov" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" }
    ],
    relatedGuides: [
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" }
    ],
    faqs: [
      { question: "Is EBITDA the same as cash flow?", answer: "No. EBITDA adds back non-cash charges but ignores capital expenditures, working capital changes, and interest and taxes actually paid. A company can have positive EBITDA and still burn cash if it is buying servers, paying down debt, or funding receivables." },
      { question: "Should stock-based compensation be added back to EBITDA?", answer: "Most conservative financial teams do not add it back, because it is a real economic cost to shareholders even though it is non-cash. Some companies report a non-GAAP metric excluding it, but always state the adjustment clearly. Different classifications change the comparison." },
      { question: "How do I convert my EBITDA result into a margin?", answer: "Divide EBITDA by revenue and multiply by 100. MeridianSoft's $380,000 EBITDA on $1,000,000 revenue is a 38% margin. Margin is the number investors benchmark against, so report it alongside the absolute figure." }
    ],
    disclaimer: "Informational only. EBITDA is a non-GAAP measure presented for educational purposes and is not a substitute for audited financial statements or professional tax and accounting advice."
  },
  "cash-burn-ratio-calculator": {
    formulaSteps: [
      "Enter your cash balance across all accounts.",
      "Enter your monthly net burn.",
      "Divide cash by monthly burn.",
      "The result is the number of months of operations your cash supports."
    ],
    formulaVariables: [
      { name: "cashBalance", meaning: "Total cash and liquid reserves available across checking, savings, and money market accounts." },
      { name: "monthlyBurn", meaning: "Monthly net burn: total monthly expenses minus monthly revenue." },
      { name: "result", meaning: "Cash burn ratio in months: how long the company can operate at the current burn rate." }
    ],
    workedExample: {
      scenario: "A fictional Series A startup called FormFlow has $750,000 in the bank and is burning $63,000 per month net of revenue; the board wants to know how long it can operate.",
      inputs: [
        { name: "cashBalance", label: "Cash balance", value: 750000 },
        { name: "monthlyBurn", label: "Monthly burn", value: 63000 }
      ],
      steps: [
        "Cash burn ratio = $750,000 / $63,000 = 11.9 months.",
        "At current burn, cash runs out in about 12 months.",
        "A burn cut to $50,000 would extend the ratio to 15 months.",
        "FormFlow should begin a raise roughly 6 months before cash exhaustion."
      ],
      result: "FormFlow has 11.9 months of runway, putting it in the 12-18 month range where raising soon is prudent."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Critical", range: "Under 6 months", meaning: "Cash will run out within two quarters; every decision is now reactive and fundraising leverage is minimal.", recommendation: "Immediately cut non-essential spend and open fundraising conversations this month, not next quarter." },
        { label: "Raise soon", range: "6-12 months", meaning: "Enough time to operate but not enough to comfortably reach the next milestone without new capital.", recommendation: "Start the next round process now, and prepare a plan to extend runway if the raise slips." },
        { label: "Monitor", range: "12-18 months", meaning: "The generally recommended planning window; you can operate while pursuing growth milestones.", recommendation: "Track the ratio monthly and define the trigger point that forces a raise or a cost cut." },
        { label: "Healthy", range: "18+ months", meaning: "Strong cash position relative to spend, giving you negotiating power and time.", recommendation: "Use the buffer to invest in growth, but avoid the trap of letting burn creep up without evidence of efficiency." }
      ]
    },
    benchmarks: {
      caption: "Cash burn ratio (months of runway) guidance for startups",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Cash burn ratio (seed stage)", "9-15 months", "15-18 months"],
        ["Cash burn ratio (Series A)", "12-18 months", "18+ months"],
        ["Cash burn ratio (growth stage)", "12-24 months", "18-24 months"],
        ["Investor red flag zone", "Under 6 months", "6-12 months"]
      ]
    },
    practicalTips: [
      "Use net burn, not gross burn, so revenue improvements show up in a healthier ratio.",
      "Track the ratio monthly and treat a trend below 12 months as the trigger to start fundraising conversations.",
      "Model the ratio under a 20% higher burn scenario so a hiring wave or delayed revenue does not surprise you.",
      "Keep a separate reserve for one-time costs like legal fees, equipment, and severance that are not in monthly burn.",
      "Recalculate immediately after any pricing, hiring, or cost-cutting decision rather than waiting for month end."
    ],
    methodology: {
      approach: "The calculator divides the current cash balance by the monthly net burn rate, where net burn is monthly expenses minus monthly revenue. The quotient expresses how many months the company can continue operating before cash reaches zero.",
      rounding: "Results are rounded to 1 decimal place for month counts.",
      units: "Cash is in a single currency; the result is expressed in months.",
      exclusions: "Does not include future funding rounds, credit lines, or proceeds from asset sales.",
      limitations: "Assumes burn stays constant. In practice burn grows with headcount and contracts with cost cuts, so the ratio is only as good as the burn forecast behind it. Recompute monthly with rolling 3-month average burn.",
      source: "Standard startup runway methodology used across venture capital guidance and SaaS benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "SaaS Capital Research", url: "https://www.saas-capital.com/research" },
      { name: "Investopedia: Burn Rate", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "startup-burn-rate-guide", title: "Startup Burn Rate: How to Calculate & Reduce Monthly Cash Consumption" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Should I use gross burn or net burn in this ratio?", answer: "Net burn, because it reflects your true cash consumption after revenue. Gross burn overstates consumption and can make the ratio look worse than reality. Compute net burn as total monthly expenses minus monthly revenue." },
      { question: "How does a headcount increase change the ratio?", answer: "Directly and fast. Each hire typically adds $8,000-$20,000 to monthly burn including salary and benefits, which can shave a month or more off the ratio. Recompute the ratio immediately after every hiring decision." },
      { question: "How should this ratio determine my raise amount?", answer: "Multiply your target months of runway (typically 18) by current monthly burn. If burn is $63,000, an 18-month raise target is about $1,134,000 before fees and buffers. Add a 20-30% buffer for slippage between rounds." }
    ],
    disclaimer: "Informational only. Cash burn estimates depend on your inputs and do not guarantee actual runway outcomes. This is not financial or investment advice."
  },
  "revenue-per-employee-calculator": {
    formulaSteps: [
      "Enter annual revenue.",
      "Enter the number of employees.",
      "Divide annual revenue by employees.",
      "The result is revenue generated per employee per year."
    ],
    formulaVariables: [
      { name: "annualRevenue", meaning: "Total revenue over the trailing 12 months or most recent fiscal year." },
      { name: "employees", meaning: "Total full-time equivalent employees, including consistently used contractors." },
      { name: "result", meaning: "Revenue per employee: annual revenue divided by headcount, a measure of operational efficiency." }
    ],
    workedExample: {
      scenario: "A fictional sales enablement SaaS called QuotaCast has $2,000,000 in annual revenue and a team of 50, and wants to compare its efficiency against SaaS peers.",
      inputs: [
        { name: "annualRevenue", label: "Annual revenue", value: 2000000 },
        { name: "employees", label: "Number of employees", value: 50 }
      ],
      steps: [
        "Revenue per employee = $2,000,000 / 50 = $40,000.",
        "The all-company average across industries is roughly $100,000-$150,000 per employee.",
        "Efficient SaaS companies generate $200,000-$400,000 per employee.",
        "QuotaCast's $40,000 reflects a services-heavy or early-stage profile rather than a pure software model."
      ],
      result: "QuotaCast generates $40,000 of revenue per employee, below the typical SaaS range, suggesting it is earlier in scaling or carrying delivery costs."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Services profile", range: "Under $100,000", meaning: "Common for services-heavy or early-stage companies where labor is the product and revenue has not yet scaled.", recommendation: "Look for productization opportunities and check that every hire adds more than their cost in revenue." },
        { label: "All-company average", range: "$100,000-$150,000", meaning: "The average across all industries; a reasonable baseline for mixed software and services businesses.", recommendation: "Benchmark against direct SaaS competitors and identify teams that are not yet revenue-productive." },
        { label: "Efficient SaaS", range: "$200,000-$400,000", meaning: "The sweet spot for efficient SaaS companies that use automation and product-led growth instead of heavy headcount.", recommendation: "Sustain this by keeping headcount growth below revenue growth through tooling and process." },
        { label: "Top quartile", range: "$500,000+", meaning: "Exceptional efficiency, usually seen in infrastructure or platform SaaS with massive revenue per user.", recommendation: "Document what makes you efficient so it survives scaling, and consider whether growth would benefit from more headcount." }
      ]
    },
    benchmarks: {
      caption: "Revenue per employee benchmarks",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["All companies (cross-industry)", "$100,000-$150,000", "$200,000+"],
        ["SaaS companies", "$150,000-$250,000", "$250,000-$400,000"],
        ["Efficient SaaS / top quartile", "$200,000-$400,000", "$500,000+"],
        ["Services-heavy companies", "$60,000-$120,000", "$150,000+"]
      ]
    },
    practicalTips: [
      "Count full-time equivalents including contractors so the metric reflects true labor cost.",
      "Match the measurement periods: use trailing 12-month revenue with average headcount over the same window.",
      "Compare against SaaS peers only, since services companies naturally score far lower.",
      "Track the ratio quarterly and flag any period where headcount grows faster than revenue.",
      "When hiring, model the expected revenue per employee after the hire to keep the metric moving in the right direction."
    ],
    methodology: {
      approach: "The calculator divides annual revenue by the number of employees to express how much revenue each employee supports. The figure is used as a proxy for operational efficiency, automation leverage, and headcount discipline.",
      rounding: "Currency results are rounded to whole dollars.",
      units: "Revenue is in a single currency; employees are a headcount; the result is currency per employee per year.",
      exclusions: "Does not account for part-time staff ratios, outsourcing, or differences in role mix, all of which change the meaningful comparison.",
      limitations: "The metric rewards automation and punishes intentionally service-heavy models. It also distorts at the extremes: very early startups show low figures while scaling, and mature platform companies show high figures.",
      source: "Revenue per employee is a standard efficiency metric used in cross-industry and SaaS benchmarking studies.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "BLS Productivity Data", url: "https://www.bls.gov" }
    ],
    relatedGuides: [
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "Why is my revenue per employee low even though revenue is growing fast?", answer: "Because you are pre-revenue-scaling: hiring ahead of revenue is normal in early SaaS. What matters is the trajectory. If revenue per employee rises each quarter, headcount discipline is working; if it falls, the last hiring wave is not yet paying off." },
      { question: "Does this metric punish services-heavy SaaS?", answer: "Yes, by construction. Companies that combine software with implementation services carry many billable staff who generate revenue but lower the ratio. Compare against peers with a similar services mix rather than pure-play software." },
      { question: "Should remote teams score differently?", answer: "No. Remote work is an input cost saving, not a revenue driver, so the ratio does not move. The metric measures revenue per head regardless of where heads sit, and the comparison holds across remote and office-based companies." }
    ]
  },
  "arpu-calculator": {
    formulaSteps: [
      "Enter total monthly revenue.",
      "Enter the number of active users in the same month.",
      "Divide monthly revenue by users.",
      "The result is average revenue per user (ARPU) for the month."
    ],
    formulaVariables: [
      { name: "monthlyRevenue", meaning: "Total revenue generated in the month from subscriptions, usage fees, and other recurring charges." },
      { name: "users", meaning: "Number of active users during the month, including free tiers if you want blended ARPU." },
      { name: "result", meaning: "ARPU: average monthly revenue per user." }
    ],
    workedExample: {
      scenario: "A fictional collaboration tool called SyncBoard generates $50,000 in monthly revenue from 10,000 active users and wants to track monetization per user.",
      inputs: [
        { name: "monthlyRevenue", label: "Monthly revenue", value: 50000 },
        { name: "users", label: "Users", value: 10000 }
      ],
      steps: [
        "ARPU = $50,000 / 10,000 = $5.00 per user.",
        "If SyncBoard adds a premium tier and ARPU rises to $6.50, the pricing change is working.",
        "With a 4% monthly churn and $5 ARPU, annual revenue per average user compounds through retention."
      ],
      result: "SyncBoard's ARPU is $5.00 per active user per month, and rising ARPU over time signals pricing power."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Low ARPU", range: "Under $5 for B2B SaaS", meaning: "Monetization per user is thin, usually because free users dominate the base or pricing is set low.", recommendation: "Introduce tiers, usage limits, or paid seat upgrades to lift revenue per user without changing the base." },
        { label: "Typical consumer / freemium", range: "$5-$20 per month", meaning: "The common zone for consumer and freemium SaaS where most users are free and paying users subsidize the base.", recommendation: "Optimize free-to-paid conversion, since ARPU rises fastest when more free users upgrade." },
        { label: "Strong SMB SaaS", range: "$20-$100 per month", meaning: "Healthy monetization typical of SMB-focused subscription products.", recommendation: "Push expansion revenue through add-ons and higher tiers to keep ARPU trending up." },
        { label: "Enterprise", range: "$100+ per month", meaning: "Enterprise-grade pricing where few users generate outsized revenue per account.", recommendation: "Focus on account-level expansion and multi-seat sales; each incremental user adds meaningful ARPU." }
      ]
    },
    practicalTips: [
      "Decide deliberately whether users means all users or paying users only, and label your reports consistently.",
      "Track ARPU by plan and segment; blended ARPU hides whether premium tiers are actually growing.",
      "Measure ARPU monthly and look at the trend, not the level, since seasonality moves usage-based revenue.",
      "When ARPU falls while revenue grows, check whether user growth is outpacing monetization, which is normal in land-and-expand.",
      "Use ARPU as an input to LTV: LTV roughly equals ARPU multiplied by gross margin divided by churn."
    ],
    methodology: {
      approach: "The calculator divides total monthly revenue by the number of active users in the same month. The result is the average revenue contributed per user, which is tracked over time to measure pricing power and monetization efficiency.",
      rounding: "Results are rounded to 2 decimal places for currency precision.",
      units: "Revenue is in a single currency per month; the result is currency per user per month.",
      exclusions: "Does not separate free from paid users, so blended ARPU is lower than ARPA (average revenue per account) whenever free users exist.",
      limitations: "ARPU mixes segments: a base of 9,000 free users and 1,000 paying users produces a low blended number that hides strong paid-tier economics. Always compute ARPU per segment alongside the blended figure.",
      source: "Standard SaaS monetization metric methodology used in subscription analytics and benchmark reporting.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Investopedia: ARPU", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "mrr-guide", title: "Monthly Recurring Revenue (MRR): How to Calculate, Track & Grow It" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Should free users be included in the user count?", answer: "It depends on the question. Include them for blended ARPU, which shows overall monetization of the entire base. Exclude them for ARPPU (average revenue per paying user), which shows how much each payer is worth. Report both, clearly labeled." },
      { question: "How does seasonality affect ARPU?", answer: "Usage-based revenue swings seasonally, and large annual contracts booked in December distort that month's ARPU. Compare year over year for the same month and use rolling 3-month averages to smooth the noise." },
      { question: "What is the difference between ARPU and ARPPU?", answer: "ARPU divides revenue by all users including free tiers; ARPPU divides revenue by paying users only. SyncBoard with 10,000 users, 1,000 of whom pay, would show a $5 ARPU but a $50 ARPPU. The gap reveals free-to-paid conversion." }
    ]
  },
  "quick-ratio-calculator": {
    formulaSteps: [
      "Enter new MRR and expansion MRR.",
      "Enter churned MRR and contraction MRR.",
      "Add the growth drivers and the loss drivers separately.",
      "Divide total growth by total loss to get the quick ratio."
    ],
    formulaVariables: [
      { name: "newMrr", meaning: "MRR added from newly acquired customers in the month." },
      { name: "expansionMrr", meaning: "MRR added from upgrades, cross-sells, and seat additions in the month." },
      { name: "churnedMrr", meaning: "MRR lost from customers who canceled completely in the month." },
      { name: "contractionMrr", meaning: "MRR lost from downgrades and seat reductions in the month." },
      { name: "result", meaning: "Quick ratio: the multiple of MRR growth versus MRR loss." }
    ],
    workedExample: {
      scenario: "A fictional help desk SaaS called DeskOps reviews its monthly MRR movements: new customers added $10,000, expansions $3,000, churn removed $4,000, and downgrades $1,000.",
      inputs: [
        { name: "newMrr", label: "New MRR", value: 10000 },
        { name: "expansionMrr", label: "Expansion MRR", value: 3000 },
        { name: "churnedMrr", label: "Churned MRR", value: 4000 },
        { name: "contractionMrr", label: "Contraction MRR", value: 1000 }
      ],
      steps: [
        "MRR growth = $10,000 + $3,000 = $13,000.",
        "MRR loss = $4,000 + $1,000 = $5,000.",
        "Quick ratio = $13,000 / $5,000 = 2.6x.",
        "DeskOps grows MRR 2.6 times faster than it loses it, a good but improvable result."
      ],
      result: "DeskOps has a quick ratio of 2.6x, meaning it grows MRR 2.6 times faster than it loses it, a solid result below the 4x elite threshold."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Negative net growth", range: "Below 1x", meaning: "MRR losses exceed MRR gains, so the business is shrinking month over month.", recommendation: "Investigate churn and contraction causes first; growth spend is wasted while the leak is open." },
        { label: "Fragile", range: "1-2x", meaning: "Growth barely outpaces loss; one bad month of churn can flip the business into decline.", recommendation: "Attack churn and contraction before scaling acquisition, and track the ratio's trend monthly." },
        { label: "Good", range: "2-3x", meaning: "Healthy balance between growth and loss; the classic target for growing SaaS companies.", recommendation: "Keep expanding the ratio through expansion revenue, which adds growth without acquisition cost." },
        { label: "Strong", range: "3-4x", meaning: "Efficient growth with controlled losses; typical of strong product-led SaaS companies.", recommendation: "Maintain the discipline and investigate what is driving the low loss side so it persists." },
        { label: "Elite", range: "4x+", meaning: "MRR grows more than four times faster than it leaks; the benchmark top SaaS companies sustain.", recommendation: "Beware distortion from a single large deal and validate that the ratio is structural, not luck." }
      ]
    },
    benchmarks: {
      caption: "SaaS quick ratio benchmarks",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Quick ratio (all SaaS)", "2-3x", "3-4x"],
        ["Quick ratio (product-led SaaS)", "3-5x", "5x+"],
        ["Quick ratio (sales-led SaaS)", "1.5-3x", "3x+"],
        ["Investor target zone", "3x+", "4x+"]
      ]
    },
    practicalTips: [
      "Pull new, expansion, churn, and contraction MRR from your billing system's monthly reconciliation, not from revenue, so one-time fees stay out.",
      "Watch the trend: one strong month from a big enterprise deal can flatter the ratio, so use a 3-month average.",
      "Segment the ratio by plan or customer segment to see where losses concentrate.",
      "Tackle contraction before churn; reducing downgrades is often easier than preventing cancellations.",
      "Pair the quick ratio with net revenue retention, since a 4x ratio with falling NRR usually means expansion is carrying the story."
    ],
    methodology: {
      approach: "The calculator adds new MRR and expansion MRR to form total growth, adds churned MRR and contraction MRR to form total loss, and divides growth by loss. The quotient is the quick ratio, a measure of how many dollars of MRR growth are generated for each dollar lost.",
      rounding: "Results are rounded to 1 decimal place and reported as a multiple (x).",
      units: "All MRR inputs are in a single currency; the result is a unitless multiple.",
      exclusions: "Excludes one-time fees, setup charges, and professional services revenue, which are not recurring and would distort growth efficiency.",
      limitations: "A single month can be distorted by one large deal or one large churn event. The ratio also says nothing about the size of growth in dollars, so pair it with net MRR growth rate.",
      source: "The quick ratio is a widely used SaaS growth efficiency metric popularized by venture capital firms including Bessemer Venture Partners.",
      date: "July 2026"
    },
    references: [
      { name: "BVP Atlas", url: "https://www.bvp.com/atlas" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" }
    ],
    relatedGuides: [
      { slug: "saas-quick-ratio-guide", title: "SaaS Quick Ratio: Measuring Growth Efficiency Beyond MRR" },
      { slug: "mrr-guide", title: "Monthly Recurring Revenue (MRR): How to Calculate, Track & Grow It" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "What if churned MRR is zero for the month?", answer: "With zero loss, the denominator is zero and the ratio is mathematically undefined. If you have positive growth, treat the ratio as effectively infinite, which is excellent but rare; verify the data before celebrating a month with no churn." },
      { question: "What counts as contraction MRR?", answer: "Contraction is recurring revenue lost without a full cancellation: downgrades to cheaper plans, fewer seats, or removed add-ons. DeskOps's $1,000 downgrade was contraction, distinct from the $4,000 in full cancellations that count as churn." },
      { question: "Is the quick ratio more important than net revenue retention?", answer: "They answer different questions. NRR shows whether existing customers expand faster than they contract, while the quick ratio adds new business to the picture. A strong quick ratio with weak NRR means acquisition is masking retention problems, which is a red flag." }
    ]
  },
  "rule-of-40-calculator": {
    formulaSteps: [
      "Enter your revenue growth percentage.",
      "Enter your profit margin percentage.",
      "Add the two together.",
      "A result of 40 or higher means the company passes the Rule of 40."
    ],
    formulaVariables: [
      { name: "revenueGrowth", meaning: "Year-over-year revenue growth percentage, typically measured on annualized revenue." },
      { name: "profitMargin", meaning: "Profit margin percentage, typically EBITDA margin, for the same period." },
      { name: "result", meaning: "Rule of 40 score: growth plus profit margin, where 40 is the healthy threshold." }
    ],
    workedExample: {
      scenario: "A fictional cloud security SaaS called PerimeterOne is growing 30% year over year with a 15% EBITDA margin and wants to check its health against the Rule of 40.",
      inputs: [
        { name: "revenueGrowth", label: "Revenue growth %", value: 30 },
        { name: "profitMargin", label: "Profit margin %", value: 15 }
      ],
      steps: [
        "Rule of 40 = 30% growth + 15% margin = 45.",
        "45 exceeds the 40 threshold, so PerimeterOne passes.",
        "A company growing 50% with a -20% margin scores 30 and fails despite strong growth.",
        "The rule rewards the balance: fast growth can offset thin margins and vice versa."
      ],
      result: "PerimeterOne scores 45 on the Rule of 40, above the 40-point threshold, indicating healthy balance between growth and profitability."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Below 40", range: "Under 40", meaning: "Growth and profitability combined are below the health threshold; typical of early-stage companies spending heavily to grow.", recommendation: "Identify which side needs work: slow growth needs go-to-market investment, weak margin needs cost discipline or pricing power." },
        { label: "Good", range: "40-50", meaning: "Passes the Rule of 40; a balanced profile most investors accept as healthy.", recommendation: "Maintain the balance and aim to improve one side without sacrificing the other." },
        { label: "Strong", range: "50-70", meaning: "A strong score that typically indicates durable growth efficiency and improving profitability.", recommendation: "Use the score as evidence of business quality in fundraising and valuation conversations." },
        { label: "Exceptional", range: "70+", meaning: "Exceptional: very rare in public SaaS, usually a mix of high growth and high margin.", recommendation: "Scrutinize the inputs for one-off gains, and if real, consider reinvesting some efficiency into growth." }
      ]
    },
    benchmarks: {
      caption: "Rule of 40 benchmarks for SaaS companies",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Rule of 40 (all SaaS)", "35-45", "45-60"],
        ["Rule of 40 (high-growth SaaS)", "40-55", "55+"],
        ["Rule of 40 (profitable SaaS)", "45-65", "65+"],
        ["Rule of 40 (top-quartile public SaaS)", "50-70", "70+"]
      ]
    },
    practicalTips: [
      "Use EBITDA margin for the profit side of the equation, since it is the most common convention among SaaS companies and investors.",
      "Measure growth year over year on annualized recurring revenue to smooth out monthly noise.",
      "Track the score quarterly and decompose it: a falling score tells you which side is dragging.",
      "If you are below 40, fix the cheaper side first; improving margin is often faster than accelerating growth.",
      "Do not compare Rule of 40 scores across companies with very different business models, like services-heavy vs pure product."
    ],
    methodology: {
      approach: "The calculator adds the revenue growth percentage to the profit margin percentage to produce a single score. The Rule of 40 is a heuristic, not an accounting measure: it accepts that high growth justifies low margins and vice versa, as long as the sum reaches 40.",
      rounding: "Results are rounded to whole percentage points.",
      units: "Both inputs are percentages; the result is expressed as a score in percentage points.",
      exclusions: "Does not distinguish between growth quality, such as organic versus paid growth, or between different profit margin definitions.",
      limitations: "The 40 threshold is a heuristic and does not apply equally at every stage. Early-stage companies often score below 40 while building, and services-heavy companies may never reach it. Context and trajectory matter more than any single score.",
      source: "The Rule of 40 was popularized in venture capital literature and is widely cited in SaaS benchmarking studies.",
      date: "July 2026"
    },
    references: [
      { name: "BVP Atlas", url: "https://www.bvp.com/atlas" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "a16z", url: "https://a16z.com" }
    ],
    relatedGuides: [
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-quick-ratio-guide", title: "SaaS Quick Ratio: Measuring Growth Efficiency Beyond MRR" }
    ],
    faqs: [
      { question: "Which profit margin should I use in the calculation?", answer: "EBITDA margin is the most common convention, because it measures operating profitability before capital structure and tax effects. Gross margin overstates health and net margin penalizes financing decisions, so most SaaS teams and investors use EBITDA margin." },
      { question: "How should growth be measured, year over year or quarter over quarter?", answer: "Year over year on annualized revenue is the standard convention. Quarter-over-quarter growth swings with seasonality and deal timing, which makes the score jump around. Use YoY growth so the Rule of 40 tracks the durable trend." },
      { question: "Can the Rule of 40 exceed 100?", answer: "Yes. A company growing 80% with a 30% margin scores 110. In practice, scores above 70 are rare and often reflect one-time events like a large acquisition or a windfall contract, so verify the inputs before celebrating a triple-digit score." },
      { question: "Does the threshold change by company stage?", answer: "The 40 threshold is designed for growth-stage SaaS. Seed-stage companies investing heavily in product may score far below 40 without alarm, and mature companies should score well above it. Investors look for a credible path to 40, not an immediate score." }
    ]
  }
};
