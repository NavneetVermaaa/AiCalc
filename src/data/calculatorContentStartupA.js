export const calculatorContentStartupA = {
  "revenue-growth-rate-calculator": {
    formulaSteps: [
      "Start with your previous period revenue, the base you compare against.",
      "Subtract previous revenue from current revenue to find the absolute change.",
      "Divide the change by the previous period revenue.",
      "Multiply by 100 to express the result as a percentage growth rate."
    ],
    formulaVariables: [
      { name: "previousRevenue", meaning: "Revenue from the earlier period you are comparing against" },
      { name: "currentRevenue", meaning: "Revenue from the most recent period" },
      { name: "growthRate", meaning: "The percentage change in revenue between the two periods" }
    ],
    workedExample: {
      scenario: "Bloomr Analytics, a fictional B2B SaaS company, wants to report its quarterly growth to investors. Last quarter it earned $100,000 and this quarter it earned $125,000.",
      inputs: [
        { name: "previousRevenue", label: "Previous revenue", value: 100000 },
        { name: "currentRevenue", label: "Current revenue", value: 125000 }
      ],
      steps: [
        "Subtract previous revenue from current revenue: 125000 - 100000 = 25000",
        "Divide the change by previous revenue: 25000 / 100000 = 0.25",
        "Multiply by 100 to convert to a percentage: 0.25 x 100 = 25%"
      ],
      result: "Bloomr Analytics grew 25% between the two periods, adding $25,000 in revenue, a strong pace for an early-stage SaaS company."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Below 20% YoY", meaning: "Revenue is growing slower than most venture-backed SaaS companies, which may signal weak product-market fit or a maturing market.", recommendation: "Investigate why growth is slowing, review retention and expansion, and consider whether the product or go-to-market needs a refresh." },
        { label: "Moderate", range: "20-40% YoY", meaning: "A respectable, common pace for SaaS companies that have moved past hypergrowth and are scaling operations.", recommendation: "Keep optimizing sales and marketing efficiency while protecting gross margin as growth matures." },
        { label: "Strong", range: "40%+ YoY", meaning: "Solid hypergrowth typical of early-stage SaaS companies with strong product-market fit.", recommendation: "Maintain momentum by doubling down on winning channels and investing in retention to protect the base." },
        { label: "Exceptional", range: "60%+ YoY (under $10M ARR)", meaning: "Outstanding growth for a company under $10M ARR, the profile investors reward with premium valuations.", recommendation: "Use this window to scale aggressively, but watch burn and unit economics so growth remains efficient." }
      ]
    },
    benchmarks: {
      caption: "SaaS revenue growth benchmarks by stage (year-over-year)",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["VC-backed SaaS (all stages)", "20-40%", "40%+"],
        ["Early stage (under $10M ARR)", "40-60%", "60%+"],
        ["Growth stage ($10M+ ARR)", "15-25%", "25%+"]
      ]
    },
    practicalTips: [
      "Use recurring revenue (MRR or ARR), not one-time revenue, when measuring SaaS growth so the number is comparable across periods.",
      "Always compare the same number of days or months on both sides; a 5-week quarter versus a 4-week quarter distorts the rate.",
      "Split growth into new customer revenue and expansion revenue from existing customers to see where the momentum really comes from.",
      "Beware a small base: growing from $5,000 to $10,000 is 100% growth but not proof of product-market fit.",
      "Review growth monthly to catch slowdowns early, but evaluate year-over-year to remove seasonality.",
      "Pair the growth rate with gross margin and burn to confirm growth is being bought at a sustainable price."
    ],
    methodology: {
      approach: "The calculator subtracts the previous period revenue from the current period revenue, divides the difference by the previous period revenue, and multiplies by 100 to produce a percentage growth rate. Negative results indicate revenue decline.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Revenue in your chosen currency; the result is a percentage.",
      exclusions: "Does not account for one-time revenue, acquisitions, currency fluctuations, or differences in the length of the two periods.",
      limitations: "A low revenue base inflates the growth percentage, so always read the rate alongside the absolute dollar change.",
      source: "SaaS benchmark research from OpenView Partners and Bessemer Venture Partners.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" },
      { name: "SaaS Capital Research", url: "https://www.saas-capital.com/research" }
    ],
    relatedGuides: [
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "Should I measure month-over-month or year-over-year growth?", answer: "Month-over-month growth is noisy and seasonally skewed, so most SaaS companies track it internally but report year-over-year growth to investors. YoY is more meaningful once you pass roughly $1M in ARR." },
      { question: "What happens if my previous revenue was near zero?", answer: "Dividing by a tiny base produces a very large percentage that overstates real momentum. If previous revenue was zero or near zero, report the absolute dollar change instead of a percentage." },
      { question: "How does revenue growth relate to valuation?", answer: "Investors apply higher multiples to faster-growing companies, especially below $10M ARR. Growth combined with gross margin feeds the Rule of 40, a common health check for SaaS businesses." }
    ],
    disclaimer: "Informational only, not financial advice. Revenue growth should be evaluated alongside cash burn, gross margin, and retention before making investment or fundraising decisions."
  },
  "gross-margin-calculator": {
    formulaSteps: [
      "Start with total revenue from sales or subscriptions.",
      "Subtract cost of goods sold (COGS) from revenue to find gross profit.",
      "Divide gross profit by total revenue.",
      "Multiply by 100 to express the result as a gross margin percentage."
    ],
    formulaVariables: [
      { name: "revenue", meaning: "Total revenue from sales or subscriptions in the period" },
      { name: "cogs", meaning: "Direct costs required to deliver the product or service, such as hosting and support" },
      { name: "grossMargin", meaning: "The percentage of each revenue dollar left after direct delivery costs" }
    ],
    workedExample: {
      scenario: "Summitboard Software, a fictional B2B SaaS company, wants to check its pricing health. It generates $500,000 in subscription revenue and spends $200,000 on direct delivery costs such as cloud infrastructure and support.",
      inputs: [
        { name: "revenue", label: "Revenue", value: 500000 },
        { name: "cogs", label: "Cost of goods sold", value: 200000 }
      ],
      steps: [
        "Subtract COGS from revenue: 500000 - 200000 = 300000 gross profit",
        "Divide gross profit by revenue: 300000 / 500000 = 0.6",
        "Multiply by 100 to get the margin: 0.6 x 100 = 60%"
      ],
      result: "Summitboard Software keeps 60% of every revenue dollar after direct delivery costs, leaving $300,000 to cover operating expenses and profit."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Below 40%", meaning: "Direct costs consume more than 60% of revenue, common in hardware and low-margin services but dangerous for SaaS where margins are expected to be high.", recommendation: "Review pricing, hosting spend, and delivery costs to identify where margin is leaking." },
        { label: "Typical", range: "40-60%", meaning: "In line with services, ecommerce, and hardware businesses, but below the range investors expect from software.", recommendation: "For SaaS, look for cloud, support, and onboarding costs that can be streamlined to push margin toward the 70%+ band." },
        { label: "Strong", range: "60-80%", meaning: "A healthy margin that covers efficient delivery and is typical of well-run software companies.", recommendation: "Protect it by keeping infrastructure costs tied to usage and avoid discounting eroding the base." },
        { label: "Exceptional", range: "80%+", meaning: "A premium margin typical of top-tier SaaS businesses where delivery costs scale slowly relative to revenue.", recommendation: "This margin supports aggressive reinvestment in growth; ensure pricing stays disciplined so it does not slip." }
      ]
    },
    benchmarks: {
      caption: "Typical gross margins by business model",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["SaaS (software)", "70-85%", "85%+"],
        ["Professional services", "30-50%", "50%+"],
        ["Ecommerce", "30-50%", "50%+"],
        ["Hardware", "25-40%", "40%+"]
      ]
    },
    practicalTips: [
      "For SaaS, include only direct costs in COGS: cloud infrastructure, support, onboarding, and payment processing. Exclude salaries, marketing, and office costs.",
      "Track gross margin by product line and customer segment, not just company-wide, because margin killers hide in averages.",
      "Use annual or multi-year contracts to lower payment processing and collection costs per dollar of revenue.",
      "Watch discounting: a 20% discount on a 70% margin product cuts the margin to 60%, a structural cost you pay forever.",
      "Review usage-based infrastructure costs monthly, since runaway compute bills are the most common SaaS margin leak.",
      "Compare your margin to SaaS norms (70-85%) before investor conversations, since low margins invite tough diligence questions."
    ],
    methodology: {
      approach: "The calculator subtracts cost of goods sold from total revenue, divides the result by total revenue, and multiplies by 100 to produce a gross margin percentage. The result is capped at 100%.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD; the result is a percentage.",
      exclusions: "Does not include operating expenses such as R&D, sales, marketing, and G&A, which are captured by net profit margin instead.",
      limitations: "COGS definitions vary by company; inconsistent classification makes margins hard to compare across businesses.",
      source: "SaaS industry benchmark research from OpenView Partners and BVP's State of the Cloud.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" },
      { name: "Investopedia", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "What belongs in COGS for a SaaS company?", answer: "COGS for SaaS typically includes cloud hosting, infrastructure, support staff, onboarding, and payment processing fees. Sales, marketing, and R&D costs belong in operating expenses, not COGS." },
      { question: "How do discounts and free trials affect gross margin?", answer: "Discounts lower effective revenue without lowering delivery costs, which drags margin down. Free trials add usage and support costs without revenue, so factor both in when you benchmark your margin." },
      { question: "Why do hardware companies have lower gross margins than SaaS?", answer: "Hardware must pay for raw materials, manufacturing, shipping, and inventory, which scale with every unit sold. Software has near-zero marginal delivery cost, which is why SaaS margins commonly exceed 70%." }
    ],
    disclaimer: "Informational only, not financial advice. Gross margin is one input into overall profitability; pair it with operating expense analysis before drawing conclusions about business health."
  },
  "net-profit-margin-calculator": {
    formulaSteps: [
      "Start with total revenue for the period.",
      "Subtract all operating costs, interest, and taxes from revenue to find net profit.",
      "Divide net profit by total revenue.",
      "Multiply by 100 to express the result as a net profit margin percentage."
    ],
    formulaVariables: [
      { name: "revenue", meaning: "Total revenue for the period from all sources" },
      { name: "netProfit", meaning: "Profit left after all expenses, interest, and taxes are paid" },
      { name: "netProfitMargin", meaning: "The percentage of each revenue dollar that becomes net profit" }
    ],
    workedExample: {
      scenario: "ForgeMetrics, a fictional SaaS startup, reviews its annual income statement. It earned $800,000 in revenue and kept $160,000 as net profit after salaries, marketing, infrastructure, and taxes.",
      inputs: [
        { name: "revenue", label: "Revenue", value: 800000 },
        { name: "netProfit", label: "Net profit", value: 160000 }
      ],
      steps: [
        "Divide net profit by revenue: 160000 / 800000 = 0.2",
        "Multiply by 100 to convert to a percentage: 0.2 x 100 = 20%",
        "Check the absolute profit: ForgeMetrics retains $160,000 of its $800,000 revenue"
      ],
      result: "ForgeMetrics has a net profit margin of 20%, meaning 20 cents of every revenue dollar becomes profit, a strong result for a SaaS company at scale."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Investing (negative)", range: "Below 0%", meaning: "The company spends more than it earns, which is common and often intentional for high-growth startups investing in sales and R&D.", recommendation: "Make sure the losses fund growth that will pay back later; model when the margin should turn positive." },
        { label: "Typical SMB", range: "5-15%", meaning: "A normal, healthy margin for most small and mid-sized businesses across industries.", recommendation: "Keep operating costs disciplined and reinvest the profit into efficiency or growth as the business allows." },
        { label: "Strong (SaaS at scale)", range: "15-30%", meaning: "The range investors expect from mature SaaS companies with operating leverage.", recommendation: "This is a defensible margin; maintain it by keeping sales efficiency and R&D productivity high." },
        { label: "Exceptional", range: "30%+", meaning: "An elite margin showing strong pricing power and disciplined costs, typical of category-leading software companies.", recommendation: "Consider returning value to shareholders or reinvesting selectively while preserving the margin." }
      ]
    },
    benchmarks: {
      caption: "Net profit margin benchmarks by business profile",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["High-growth startup (investing)", "Negative to 0%", "0-10%"],
        ["Typical SMB", "5-15%", "15%+"],
        ["SaaS at scale", "15-30%", "30%+"],
        ["Mature software company", "20-30%", "30%+"]
      ]
    },
    practicalTips: [
      "Use net profit from your income statement, not operating profit or EBITDA, so the margin includes interest and taxes.",
      "For startups, a negative margin is often a growth investment; check that the cash burn behind it is buying efficient growth.",
      "Benchmark against SaaS peers, not retail or services, since the cost structures are not comparable.",
      "Track the margin trend over 4-8 quarters; a rising margin shows operating leverage, a falling one shows cost creep.",
      "Remove one-time charges like lawsuit settlements or one-off restructuring from the picture when comparing margins across periods.",
      "Combine net margin with gross margin: if net is low but gross is high, the problem is overhead; if gross is low, the problem is the product."
    ],
    methodology: {
      approach: "The calculator divides net profit by total revenue and multiplies by 100 to produce a net profit margin percentage. It assumes both inputs come from the same accounting period.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD; the result is a percentage.",
      exclusions: "Does not separate operating profit from interest and taxes, and does not adjust for one-time or non-recurring charges.",
      limitations: "Margin alone does not show whether profit is growing in absolute terms; a shrinking company can show an improving margin.",
      source: "SaaS profitability benchmarks from OpenView Partners and public company financial reporting.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" },
      { name: "SEC EDGAR", url: "https://www.sec.gov" }
    ],
    relatedGuides: [
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-unit-economics-guide", title: "SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Why is my net margin negative when my gross margin is healthy?", answer: "A high gross margin with a negative net margin means operating expenses such as sales, marketing, and R&D exceed the gross profit. The gap is typical for growth-stage startups that invest ahead of revenue." },
      { question: "How does net margin differ from EBITDA margin?", answer: "Net margin includes interest and taxes, while EBITDA excludes them along with depreciation and amortization. EBITDA margin is usually higher and is used to compare operations without capital structure differences." },
      { question: "When should a startup prioritize net margin over growth?", answer: "Most investors expect growth first and margins later, but the expectation flips around $5-10M ARR or when capital markets tighten. A clear path to profitability becomes essential before any Series B or later round." }
    ],
    disclaimer: "Informational only, not financial advice. Net profit margin should be reviewed alongside cash flow and revenue trends; a single margin number does not determine business value."
  },
  "churn-rate-calculator": {
    formulaSteps: [
      "Start with the number of customers at the beginning of the period.",
      "Count how many customers cancelled or were lost during the period.",
      "Divide customers lost by the starting customer count.",
      "Multiply by 100 to express the result as a churn rate percentage."
    ],
    formulaVariables: [
      { name: "customersAtStart", meaning: "Number of active customers at the start of the period" },
      { name: "customersLost", meaning: "Number of customers lost during the period" },
      { name: "churnRate", meaning: "The percentage of the starting customer base lost during the period" }
    ],
    workedExample: {
      scenario: "Lantern Labs, a fictional SMB SaaS company, starts August with 1,000 customers and 55 of them cancel their subscriptions during the month. The team wants to know its monthly logo churn rate.",
      inputs: [
        { name: "customersAtStart", label: "Customers at start", value: 1000 },
        { name: "customersLost", label: "Customers lost", value: 55 }
      ],
      steps: [
        "Divide customers lost by customers at start: 55 / 1000 = 0.055",
        "Multiply by 100 to convert to a percentage: 0.055 x 100 = 5.5%",
        "Lantern Labs lost 55 of 1,000 customers, leaving 945 active"
      ],
      result: "Lantern Labs has a monthly churn rate of 5.5%, meaning 5.5% of its customer base cancelled during the month, a level that warrants retention work."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Excellent", range: "Under 1% monthly", meaning: "World-class retention typical of enterprise SaaS where accounts are few, large, and deeply integrated.", recommendation: "Keep the discipline that drives retention and invest savings from churn reduction into expansion." },
        { label: "Good", range: "1-2% monthly", meaning: "Healthy churn for SMB SaaS, supporting strong LTV and reliable growth forecasts.", recommendation: "Protect this level with onboarding, health scoring, and proactive customer success outreach." },
        { label: "Average", range: "2-5% monthly", meaning: "In line with the broad SaaS average, but churn at this level eats into growth and LTV meaningfully.", recommendation: "Diagnose where churn concentrates: segment by plan, cohort, and onboarding completion before acting." },
        { label: "Warning", range: "Above 5% monthly", meaning: "Churn is high enough to undermine growth and LTV, a common pattern when product-market fit or onboarding is weak.", recommendation: "Treat this as an emergency: fix onboarding, survey churned customers, and reassess whether the product matches the segment." }
      ]
    },
    benchmarks: {
      caption: "Monthly logo churn benchmarks by segment (annual churn shown as reference)",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Enterprise SaaS", "0.5-1%", "Under 0.5%"],
        ["SMB SaaS", "1-2%", "Under 1%"],
        ["Average SaaS", "2-5%", "Under 2%"],
        ["Annual churn", "10-20%", "5-7%"]
      ]
    },
    practicalTips: [
      "Always use customers at the start of the period as the denominator; comparing against ending customers understates churn.",
      "Track logo churn and revenue churn separately, since losing one large account hurts more than losing several small ones.",
      "Convert monthly churn to annual retention with (1 - monthly churn)^12 to model how retention compounds.",
      "Churn early customers the most, so measure churn by onboarding cohort rather than company-wide to spot the real problem.",
      "Count involuntary churn such as failed payments separately from voluntary cancellations; the fixes are completely different.",
      "Pair churn with CAC and LTV: at 5.5% monthly churn, payback periods lengthen and acquisition budgets must shrink."
    ],
    methodology: {
      approach: "The calculator divides the number of customers lost during the period by the number of customers at the start of the period, then multiplies by 100 to produce a churn percentage. The result is capped at 100%.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Result is a percentage; customer counts are whole numbers.",
      exclusions: "Does not distinguish voluntary from involuntary churn, and does not account for customers who downgrade plans rather than cancel.",
      limitations: "Churn on a small base is noisy; one customer leaving a 20-customer company is 5% churn but may not signal a trend.",
      source: "SaaS churn benchmark studies from OpenView Partners and SaaS Capital.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "SaaS Capital Research", url: "https://www.saas-capital.com/research" },
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" }
    ],
    relatedGuides: [
      { slug: "mrr-guide", title: "Monthly Recurring Revenue (MRR): How to Calculate, Track & Grow It" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "What is the difference between logo churn and revenue churn?", answer: "Logo churn counts customers lost, while revenue churn measures MRR lost. They diverge when accounts differ in size: one large account churning can create low logo churn but painful revenue churn." },
      { question: "How do I convert monthly churn to an annual churn rate?", answer: "Annual churn is approximately 1 - (1 - monthly churn)^12. At 5.5% monthly churn that is about 49% annually, which is why investors prefer monthly rates below 2%." },
      { question: "Should I count customers who pause or downgrade as churned?", answer: "Downgrades and pauses are contraction, not full churn, but they still reduce MRR. Track them separately: full churn feeds your churn rate, while downgrades belong in net revenue retention calculations." }
    ],
    disclaimer: "Informational only, not financial advice. Churn projections feed revenue forecasts and valuations; validate churn trends over several periods before making financial decisions."
  },
  "mrr-calculator": {
    formulaSteps: [
      "Start with the number of active paying customers.",
      "Determine the average monthly subscription value per customer.",
      "Multiply customers by the average monthly subscription value.",
      "The product is your monthly recurring revenue."
    ],
    formulaVariables: [
      { name: "customers", meaning: "Number of active paying customers in the period" },
      { name: "averageMonthlySubscription", meaning: "Average amount each customer pays per month" },
      { name: "mrr", meaning: "Total recurring revenue expected each month" }
    ],
    workedExample: {
      scenario: "Cloudperk, a fictional project management SaaS, has 250 paying customers who pay an average of $49 per month across its Starter and Pro plans. It wants to confirm its monthly recurring revenue.",
      inputs: [
        { name: "customers", label: "Customers", value: 250 },
        { name: "averageMonthlySubscription", label: "Average monthly subscription", value: 49 }
      ],
      steps: [
        "Multiply customers by the average subscription: 250 x 49 = 12250",
        "This is the revenue expected from the base each month",
        "Annualized, that is 12250 x 12 = 147000 ARR"
      ],
      result: "Cloudperk has $12,250 in monthly recurring revenue, meaning it can expect $12,250 each month from its subscription base before new sales or churn."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Early traction", range: "Under $10,000 MRR", meaning: "Still validating demand and pricing; most revenue may come from a handful of early customers.", recommendation: "Focus on finding repeatable acquisition and proof that customers stay, not on scaling spend." },
        { label: "Validated product", range: "$10,000-50,000 MRR", meaning: "Evidence that a repeatable go-to-market exists; roughly $120,000-600,000 ARR.", recommendation: "Begin systemizing sales and onboarding while watching churn closely." },
        { label: "Scaling", range: "$50,000-100,000 MRR", meaning: "A meaningful base where growth becomes more predictable and funding options expand.", recommendation: "Invest in expansion and retention programs to compound the base." },
        { label: "Growth stage", range: "$100,000+ MRR", meaning: "Above $1.2M ARR, the range where startups attract serious institutional attention.", recommendation: "Protect the base with strong customer success while pushing new and expansion revenue." }
      ]
    },
    practicalTips: [
      "Use net MRR (new plus expansion minus contraction and churn) for health tracking, not just the base calculation.",
      "Exclude one-time fees, hardware, and setup charges from MRR; only recurring subscription revenue counts.",
      "Break MRR into new, expansion, contraction, and churned components each month to see what is really driving it.",
      "Count annual prepayments by dividing the contract value by 12 rather than booking it all in one month.",
      "Track MRR per plan and segment; averages hide that your cheapest plan may be dragging the number down.",
      "Model MRR with the churn rate: at steady state, MRR growth equals new revenue minus churn and contraction."
    ],
    methodology: {
      approach: "The calculator multiplies the number of active customers by the average monthly subscription value to estimate monthly recurring revenue. It assumes the average captures the mix of plans and discounts across the base.",
      rounding: "Results are rounded to 2 decimal places where needed.",
      units: "Currency in USD.",
      exclusions: "Does not subtract churn, add expected new sales, or account for upgrades and downgrades within the period.",
      limitations: "The average subscription hides plan mix effects, and using gross customer count instead of active paid customers overstates MRR.",
      source: "SaaS industry conventions for recurring revenue measurement.",
      date: "July 2026"
    },
    references: [
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Investopedia", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "mrr-guide", title: "Monthly Recurring Revenue (MRR): How to Calculate, Track & Grow It" },
      { slug: "saas-quick-ratio-guide", title: "SaaS Quick Ratio: Measuring Growth Efficiency Beyond MRR" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "Should MRR include annual plans that are paid upfront?", answer: "Yes, but spread them: divide the annual contract value by 12 and count it as MRR each month. Booking the full payment in one month distorts your recurring revenue picture." },
      { question: "What is the difference between MRR and ARPU?", answer: "MRR is total recurring revenue for the month, while ARPU (average revenue per user) divides MRR by customer count. ARPU is an input used to derive MRR, not a substitute for it." },
      { question: "Why do investors care more about MRR than bookings?", answer: "Bookings include one-time and non-recurring revenue, while MRR shows the predictable base that repeats every month. Predictability is what makes SaaS valuable and financeable." }
    ],
    disclaimer: "Informational only, not financial advice. MRR projections should be combined with churn and expansion data before budgeting or fundraising decisions."
  },
  "arr-calculator": {
    formulaSteps: [
      "Start with your monthly recurring revenue (MRR).",
      "Multiply MRR by 12 to annualize it.",
      "The product is your annual recurring revenue.",
      "Use this figure for planning, valuation, and investor communication."
    ],
    formulaVariables: [
      { name: "monthlyRecurringRevenue", meaning: "Total recurring revenue expected each month from subscriptions" },
      { name: "arr", meaning: "Annualized recurring revenue, or MRR multiplied by 12" }
    ],
    workedExample: {
      scenario: "Stratosync, a fictional analytics SaaS, has $12,250 in monthly recurring revenue and wants to report its annualized figure to a prospective investor.",
      inputs: [
        { name: "monthlyRecurringRevenue", label: "Monthly recurring revenue", value: 12250 }
      ],
      steps: [
        "Multiply MRR by 12: 12250 x 12 = 147000",
        "This assumes the current MRR is maintained for the full year",
        "Stratosync's annual recurring revenue is $147,000"
      ],
      result: "Stratosync has $147,000 in annual recurring revenue, the figure an investor would use to size the company's recurring base today."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Pre-traction", range: "Under $100,000 ARR", meaning: "Early validation phase where product-market fit is still being proven.", recommendation: "Prioritize retention and repeatable acquisition over scale." },
        { label: "Early revenue", range: "$100,000-1M ARR", meaning: "A working base with evidence customers pay and stay, the range where most seed rounds happen.", recommendation: "Systemize sales and onboarding to make growth repeatable." },
        { label: "Scaled revenue", range: "$1M-10M ARR", meaning: "The $1M mark is the classic threshold investors call 'proven'; $10M is the entry point for growth-stage capital.", recommendation: "Invest in expansion revenue and international or segment expansion." },
        { label: "Growth stage", range: "$10M+ ARR", meaning: "A serious recurring base where the company can pursue later-stage funding or an exit.", recommendation: "Focus on net revenue retention, efficiency, and durable margins." }
      ]
    },
    practicalTips: [
      "Use only recurring subscription revenue; professional services, setup fees, and usage overages do not belong in ARR.",
      "For contract-based SaaS, sum the annualized value of active contracts rather than assuming every month equals the last.",
      "Report ARR alongside net revenue retention so investors can judge whether the base grows or quietly erodes.",
      "Do not compare ARR to total revenue directly; total revenue includes the one-time items ARR deliberately excludes.",
      "Track ARR in the same currency consistently; FX swings can create phantom growth or decline.",
      "When close to the $1M ARR milestone, review pricing and onboarding capacity so growth does not stall at the crossing."
    ],
    methodology: {
      approach: "The calculator multiplies monthly recurring revenue by 12 to estimate annual recurring revenue. This annualizes the current recurring base without forecasting new sales or churn.",
      rounding: "Results are rounded to 2 decimal places where needed.",
      units: "Currency in USD.",
      exclusions: "Does not include one-time, usage-based, or non-recurring revenue, and does not model growth or churn over the year.",
      limitations: "ARR is a snapshot, not a forecast: if MRR changes during the year, actual revenue will differ from the annualized figure.",
      source: "SaaS industry conventions and valuation research from Bessemer Venture Partners.",
      date: "July 2026"
    },
    references: [
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Investopedia", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "mrr-guide", title: "Monthly Recurring Revenue (MRR): How to Calculate, Track & Grow It" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Does ARR include usage-based or overage revenue?", answer: "No. ARR is meant to capture committed recurring revenue. Usage-based and overage charges vary month to month, so they are tracked separately and excluded from the recurring base." },
      { question: "How is ARR used in SaaS valuation?", answer: "Investors apply revenue multiples to ARR, with higher multiples for faster growth, higher net revenue retention, and stronger gross margins. Crossing $1M ARR is often the milestone where meaningful funding becomes available." },
      { question: "What is the difference between ARR and annualized run rate?", answer: "Run rate simply multiplies the most recent month by 12, while ARR is typically built from committed contracts. They are equal for pure monthly subscriptions but diverge when contracts are annual or multi-year." }
    ],
    disclaimer: "Informational only, not financial advice. ARR is a snapshot of recurring revenue and should not be treated as a revenue forecast or valuation guarantee."
  },
  "burn-rate-calculator": {
    formulaSteps: [
      "Start with total monthly operating expenses including salaries, rent, and software.",
      "Enter monthly revenue from all sources.",
      "Subtract revenue from expenses.",
      "The positive result is your net burn: cash consumed each month."
    ],
    formulaVariables: [
      { name: "expenses", meaning: "Total monthly operating expenses such as salaries, rent, infrastructure, and marketing" },
      { name: "revenue", meaning: "Total monthly revenue from all sources" },
      { name: "netBurn", meaning: "Net cash consumed each month after revenue is subtracted" }
    ],
    workedExample: {
      scenario: "Driftline AI, a fictional seed-stage startup, spends $85,000 per month on its team, cloud infrastructure, and marketing while generating $22,000 in monthly recurring revenue. The team wants to know its net burn.",
      inputs: [
        { name: "expenses", label: "Monthly expenses", value: 85000 },
        { name: "revenue", label: "Monthly revenue", value: 22000 }
      ],
      steps: [
        "Subtract revenue from expenses: 85000 - 22000 = 63000",
        "Driftline AI consumes $63,000 of cash each month",
        "Against $750,000 in the bank, that is roughly 750000 / 63000 = 11.9 months of runway"
      ],
      result: "Driftline AI has a net burn of $63,000 per month, meaning it spends $63,000 more than it earns each month and needs that pace covered by its cash balance."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Lean (pre-seed)", range: "$30,000-80,000/month", meaning: "A typical burn for pre-seed companies building an MVP with a small team.", recommendation: "Keep burn lean and extend runway; defer hires and spend until product-market fit signals are clear." },
        { label: "Typical (seed)", range: "$80,000-150,000/month", meaning: "A normal pace for seed-stage startups scaling go-to-market after a raise.", recommendation: "Make sure every dollar funds growth that moves a core metric, and keep at least 12-18 months of runway." },
        { label: "Scale-up (Series A)", range: "$150,000-350,000/month", meaning: "The range for Series A companies with real teams and expansion budgets.", recommendation: "Align burn with funded milestones; a Series A typically covers 18-24 months at this pace." },
        { label: "Warning", range: "Burn above 1/12 of remaining capital per month", meaning: "Cash consumption is high relative to the balance, implying under 12 months of runway.", recommendation: "Cut spend, accelerate revenue, and start fundraising conversations before the cash position becomes urgent." }
      ]
    },
    benchmarks: {
      caption: "Typical monthly net burn by funding stage",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Pre-seed", "$30,000-80,000", "Under $50,000"],
        ["Seed", "$80,000-150,000", "Under $100,000"],
        ["Series A", "$150,000-350,000", "Under $200,000"],
        ["Health check", "Burn under 1/12 of capital per month", "Burn under 1/18 of capital per month"]
      ]
    },
    practicalTips: [
      "Track net burn (expenses minus revenue), not gross burn, so revenue growth shows up in your cash picture.",
      "Include irregular costs like annual licenses and one-time purchases by amortizing them into a monthly average.",
      "Watch for creeping burn after hiring waves; headcount is usually 70-80% of a startup's expense base.",
      "Model burn under two scenarios, plan and stretch, so a slowdown or missed milestone does not break the plan.",
      "Separate one-time costs (equipment, legal) from recurring operating expenses when deciding where to cut.",
      "Review burn weekly in the final months before a raise, since investors will scrutinize the burn-down curve."
    ],
    methodology: {
      approach: "The calculator subtracts monthly revenue from monthly operating expenses to compute net burn. Positive values indicate cash consumed each month; negative values indicate the business is cash-flow positive.",
      rounding: "Results are rounded to 2 decimal places where needed.",
      units: "Currency in USD, on a monthly basis.",
      exclusions: "Does not include capital expenditures made outside operating expenses, debt payments, or one-time fundraising costs unless entered in expenses.",
      limitations: "Burn from a single month can be distorted by irregular expenses; use a 3-month average for planning and runway calculations.",
      source: "Startup cash management guidance and stage benchmarks from BVP and OpenView.",
      date: "July 2026"
    },
    references: [
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Kaufman Center research", url: "https://www.key.com/business" }
    ],
    relatedGuides: [
      { slug: "startup-burn-rate-guide", title: "Startup Burn Rate: How to Calculate & Reduce Monthly Cash Consumption" },
      { slug: "cac-payback-vs-ltv-cac-ratio", title: "CAC Payback Period vs LTV:CAC Ratio — Which Metric Matters More?" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" }
    ],
    faqs: [
      { question: "What is the difference between gross burn and net burn?", answer: "Gross burn is total monthly expenses regardless of revenue; net burn subtracts revenue. Net burn is what matters for runway because it reflects the actual cash your business consumes." },
      { question: "How does burn relate to how much I should raise?", answer: "A common rule is to raise 12-18 times your monthly net burn so the round covers at least 12-18 months. Raising too little forces another raise under pressure; raising too much dilutes early." },
      { question: "Which expenses should I exclude when cutting burn?", answer: "Cut costs that do not move core metrics first, such as non-essential tools and events. Protect revenue-generating functions and the team members tied to churn, since cutting them can worsen cash flow indirectly." }
    ],
    disclaimer: "Informational only, not financial advice. Burn projections should be reviewed with your accountant or CFO; cash decisions carry real risk and this calculator does not model them."
  },
  "runway-calculator": {
    formulaSteps: [
      "Start with your current cash balance from bank and investment accounts.",
      "Enter your monthly net burn from the Burn Rate Calculator.",
      "Divide cash by monthly net burn.",
      "The result is the number of months you can operate before cash reaches zero."
    ],
    formulaVariables: [
      { name: "cash", meaning: "Current cash balance available to the business" },
      { name: "burn", meaning: "Monthly net burn, or cash consumed per month after revenue" },
      { name: "runwayMonths", meaning: "Number of months the business can operate before cash runs out" }
    ],
    workedExample: {
      scenario: "Peakfoundry, a fictional SaaS startup, has $750,000 in the bank and a monthly net burn of $63,000. The founding team wants to know how long it can operate before raising again.",
      inputs: [
        { name: "cash", label: "Cash balance", value: 750000 },
        { name: "burn", label: "Monthly net burn", value: 63000 }
      ],
      steps: [
        "Divide cash by monthly burn: 750000 / 63000 = 11.9 months",
        "Peakfoundry can operate for about 11.9 months at the current pace",
        "If burn were cut to $50,000, runway would stretch to 750000 / 50000 = 15 months"
      ],
      result: "Peakfoundry has approximately 11.9 months of runway, placing it in the zone where the team should begin fundraising preparations."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Healthy", range: "18+ months", meaning: "Comfortable runway that lets you execute the plan without fundraising pressure.", recommendation: "Keep the plan going and start fundraising only when milestones make valuation defensible." },
        { label: "Monitor", range: "12-18 months", meaning: "Standard runway for most startups, but fundraising will take 3-6 months of it.", recommendation: "Begin investor outreach and prepare diligence materials within the next few months." },
        { label: "Plan to raise", range: "6-12 months", meaning: "Enough time to raise if you move deliberately, but little room for slippage.", recommendation: "Start the raise now, cut non-essential spend, and extend runway with every possible cost reduction." },
        { label: "Critical", range: "Under 6 months", meaning: "Dangerously low runway that can force reactive decisions or an emergency raise at poor terms.", recommendation: "Reduce burn immediately, prioritize the fastest revenue wins, and consider bridge financing from existing investors." }
      ]
    },
    benchmarks: {
      caption: "Runway benchmarks for startup planning",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Comfortable runway", "18-24 months", "24+ months"],
        ["Standard planning zone", "12-18 months", "18+ months"],
        ["Fundraising window", "6-12 months", "12+ months"],
        ["Critical", "Under 6 months", "6+ months"]
      ]
    },
    practicalTips: [
      "Use net burn, not gross burn, or you will understate your true runway.",
      "Use a 3-month average burn instead of a single month so irregular expenses do not skew the projection.",
      "Plan for a 3-6 month fundraising process: a 12-month runway is really 6-9 months of execution time.",
      "Recompute runway monthly at minimum, and weekly when burn is changing quickly or runway is under 9 months.",
      "Model the impact of specific cuts, such as pausing hiring, to see exactly how much runway each decision buys.",
      "Keep a small buffer in the runway estimate for delays in revenue, refunds, or unexpected vendor bills."
    ],
    methodology: {
      approach: "The calculator divides the current cash balance by the monthly net burn to estimate the number of months the business can operate before cash reaches zero. It assumes the burn rate stays constant.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Cash in USD; result in months.",
      exclusions: "Does not model future revenue growth, planned raises, or changes in spending, all of which alter the real runway.",
      limitations: "A single month of burn can mislead; average the last 3 months and update the calculation whenever spend or revenue changes materially.",
      source: "Startup cash planning guidance from BVP and OpenView.",
      date: "July 2026"
    },
    references: [
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" },
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "Kaufman Center research", url: "https://www.key.com/business" }
    ],
    relatedGuides: [
      { slug: "startup-burn-rate-guide", title: "Startup Burn Rate: How to Calculate & Reduce Monthly Cash Consumption" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-handbook", title: "The Complete SaaS Metrics Handbook (2026): MRR, ARR, CAC, LTV, Churn, NRR & Every KPI Explained" }
    ],
    faqs: [
      { question: "Should I use gross burn or net burn for runway?", answer: "Use net burn, because the revenue you earn each month genuinely extends how long your cash lasts. Using gross burn makes runway look shorter than it is and can cause unnecessary panic or over-fundraising." },
      { question: "What runway do investors expect before a Series A?", answer: "Most Series A investors expect 12-18 months of runway at the time of close, since the round itself is usually sized to cover 18-24 months. Approaching the raise with under 6 months is a material red flag." },
      { question: "What if my burn fluctuates month to month?", answer: "Average the last 3 months of burn for the projection and track the trend. If burn is rising, model runway under the higher rate; if falling, note that revenue growth is buying you time." }
    ],
    disclaimer: "Informational only, not financial advice. Runway assumes burn stays constant; actual cash outflows can differ materially, so review projections with your finance team regularly."
  },
  "cac-calculator": {
    formulaSteps: [
      "Start with total sales and marketing spend for the period, including salaries and tools.",
      "Count new customers acquired in that same period.",
      "Divide spend by the number of new customers.",
      "The result is your cost per acquisition."
    ],
    formulaVariables: [
      { name: "spend", meaning: "Total sales and marketing spend in the period, including salaries, ads, and tools" },
      { name: "customers", meaning: "Number of new customers acquired in that period" },
      { name: "cac", meaning: "Average cost to acquire one new customer" }
    ],
    workedExample: {
      scenario: "Flowstack, a fictional B2B SaaS company, spent $40,000 in a month on ads, content, sales salaries, and CRM tools, and acquired 120 new customers in that same month. It wants to know its cost per customer.",
      inputs: [
        { name: "spend", label: "Sales and marketing spend", value: 40000 },
        { name: "customers", label: "New customers", value: 120 }
      ],
      steps: [
        "Divide total spend by new customers: 40000 / 120 = 333.33",
        "Flowstack spends about $333.33 to acquire each new customer",
        "With an LTV of $3,690, that is an 3690 / 333.33 = 11.1x LTV:CAC ratio"
      ],
      result: "Flowstack has a CAC of $333.33 per new customer, comfortably inside the efficient range for self-serve and SMB SaaS."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Efficient (self-serve)", range: "Under $500", meaning: "Typical for product-led, self-serve SaaS where customers sign up without sales contact.", recommendation: "Safely scale spend on the channels producing this CAC while monitoring payback." },
        { label: "Typical (SMB sales-led)", range: "$1,000-5,000", meaning: "The normal range for SMB SaaS with inside sales teams and lower-priced contracts.", recommendation: "Validate the CAC against LTV: it only works if payback stays under 12 months." },
        { label: "High (mid-market)", range: "$5,000-15,000", meaning: "Expected for mid-market deals with longer sales cycles and larger contract values.", recommendation: "Ensure ACV and retention justify the cost; segment CAC by deal size to confirm efficiency." },
        { label: "Enterprise", range: "$15,000-50,000+", meaning: "Typical for enterprise sales with large teams and long cycles, justified only by large contracts.", recommendation: "Track pipeline win rates and ACV closely; one weak quarter can blow up enterprise CAC fast." }
      ]
    },
    benchmarks: {
      caption: "CAC benchmarks by go-to-market segment",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Self-serve B2B SaaS", "Under $500", "Under $200"],
        ["SMB sales-led", "$1,000-5,000", "Under $1,500"],
        ["Mid-market", "$5,000-15,000", "Under $8,000"],
        ["Enterprise", "$15,000-50,000+", "Under $30,000"],
        ["Consumer app", "$5-50", "Under $10"]
      ]
    },
    practicalTips: [
      "Include every acquisition cost: ad platforms, sales salaries, commissions, content production, CRM tools, and agency fees.",
      "Count only new customers in the same period as the spend; matching the wrong time windows distorts CAC.",
      "Calculate CAC per channel and per segment; blended CAC hides that one channel is subsidizing another.",
      "Judge CAC against payback: divide CAC by monthly gross profit per customer to find how many months to break even.",
      "Watch CAC trends quarterly; rising CAC with flat LTV is the earliest warning sign of growth trouble.",
      "Do not include brand-building spend that does not drive this period's acquisition; it belongs in marketing overhead analysis."
    ],
    methodology: {
      approach: "The calculator divides total sales and marketing spend by the number of new customers acquired in the same period. It assumes the spend and customer counts align on timing and scope.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD; customers as whole numbers.",
      exclusions: "Does not separate brand-building from direct acquisition spend, and does not distinguish customer segments or channels.",
      limitations: "Blended CAC hides large differences between channels and plans; always segment before making budget decisions.",
      source: "CAC benchmarks from OpenView Partners and SaaS Capital research.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "SaaS Capital Research", url: "https://www.saas-capital.com/research" },
      { name: "Investopedia", url: "https://www.investopedia.com" }
    ],
    relatedGuides: [
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "ltv-cac-ratio-guide", title: "LTV to CAC Ratio Explained: What Is a Good LTV:CAC for Startups?" },
      { slug: "cac-payback-vs-ltv-cac-ratio", title: "CAC Payback Period vs LTV:CAC Ratio — Which Metric Matters More?" }
    ],
    faqs: [
      { question: "Why is my real CAC higher than this calculation?", answer: "Most startups undercount by excluding sales salaries, tooling, content production, or agency fees. Also, trials and free-plan users that never convert to paying inflate the customer count if you count signups instead of paying customers." },
      { question: "Should customers who churn quickly be part of CAC?", answer: "Yes, they were acquired, and their cost must be recovered from remaining customers. In practice, analyze CAC and churn by cohort: high CAC on cohorts that churn fast is the sign of an acquisition quality problem." },
      { question: "How is CAC used alongside LTV?", answer: "CAC is divided into LTV to get the LTV:CAC ratio, with 3x or higher considered healthy. It is also used to compute the CAC payback period, the months of gross profit needed to recover the acquisition cost." }
    ],
    disclaimer: "Informational only, not financial advice. CAC must be evaluated together with LTV and payback; acquisition spend decisions carry real financial risk."
  },
  "ltv-calculator": {
    formulaSteps: [
      "Start with average revenue per account (ARPA) per month.",
      "Multiply ARPA by gross margin to find monthly gross profit per customer.",
      "Divide monthly gross profit by the monthly churn rate.",
      "The result is the customer lifetime value in gross profit terms."
    ],
    formulaVariables: [
      { name: "arpa", meaning: "Average monthly revenue per account" },
      { name: "margin", meaning: "Gross margin percentage, e.g. 82 means 82%" },
      { name: "churn", meaning: "Monthly churn percentage, e.g. 4 means 4%" },
      { name: "ltv", meaning: "Total gross profit a customer generates over their lifetime" }
    ],
    workedExample: {
      scenario: "Kitebase, a fictional SMB SaaS, has an average revenue per account of $180 per month, an 82% gross margin, and a 4% monthly churn rate. It wants to know what each customer is worth to set acquisition budgets.",
      inputs: [
        { name: "arpa", label: "Average revenue per account", value: 180 },
        { name: "margin", label: "Gross margin percent", value: 82 },
        { name: "churn", label: "Monthly churn percent", value: 4 }
      ],
      steps: [
        "Convert margin to a decimal: 82 / 100 = 0.82",
        "Multiply ARPA by gross margin: 180 x 0.82 = 147.6 monthly gross profit per customer",
        "Convert churn to a decimal: 4 / 100 = 0.04",
        "Divide monthly gross profit by churn: 147.6 / 0.04 = 3690"
      ],
      result: "Kitebase has an LTV of $3,690 per customer, meaning each customer generates about $3,690 of gross profit over their lifetime with the company."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Under $1,000", meaning: "Low LTV usually combines a low price point with high churn, which makes profitable acquisition very difficult.", recommendation: "Fix retention before scaling spend; raise effective pricing or reduce churn before adding acquisition budget." },
        { label: "Typical (SMB SaaS)", range: "$1,000-10,000", meaning: "A normal range for SMB SaaS; whether it is good depends on whether LTV is at least 3x CAC.", recommendation: "Verify the LTV:CAC ratio and CAC payback; both must hold for the model to work." },
        { label: "Strong", range: "$10,000-50,000", meaning: "The range typical of mid-market SaaS with larger contracts and better retention.", recommendation: "You can afford sales-led acquisition; just make sure payback stays under 12 months." },
        { label: "Exceptional (enterprise)", range: "$50,000+", meaning: "Enterprise-grade LTV driven by large contracts and low churn, the profile of very profitable businesses.", recommendation: "Protect the accounts driving this value with dedicated success teams and expansion motions." }
      ]
    },
    benchmarks: {
      caption: "LTV benchmarks by segment, with the LTV:CAC rule of thumb",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["SMB SaaS", "$1,000-10,000", "$10,000+"],
        ["Mid-market SaaS", "$10,000-50,000", "$50,000+"],
        ["Enterprise SaaS", "$50,000+", "$100,000+"],
        ["LTV:CAC ratio", "3x", "5x+"]
      ]
    },
    practicalTips: [
      "Use gross profit (ARPA x margin), never revenue, when calculating LTV; revenue-based LTV overstates value by 15-30%.",
      "Compute LTV per cohort and per plan, because blended LTV hides the segments where churn is destroying value.",
      "Treat small churn changes seriously: moving monthly churn from 4% to 3% raises LTV by a third.",
      "Compare LTV to CAC monthly and keep the ratio at 3x or higher for most SaaS models.",
      "Use the 12-month payback test: CAC should be recovered from gross profit within about 12 months.",
      "Re-run LTV whenever pricing or churn changes; both move the number materially and quickly."
    ],
    methodology: {
      approach: "The calculator multiplies average revenue per account by the gross margin percentage to get monthly gross profit per customer, then divides by the monthly churn rate to project total lifetime gross profit. Churn is floored to prevent division by zero.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD; margin and churn entered as percentages.",
      exclusions: "Does not include expansion revenue, net revenue retention, discounts, or segmentation across plans and channels.",
      limitations: "Assumes churn and margin stay constant for the customer's lifetime; early-stage churn often improves, so the model is conservative or aggressive depending on the trend.",
      source: "LTV and LTV:CAC benchmark research from OpenView Partners and SaaS Capital.",
      date: "July 2026"
    },
    references: [
      { name: "OpenView Partners", url: "https://www.openviewpartners.com" },
      { name: "SaaS Capital Research", url: "https://www.saas-capital.com/research" },
      { name: "Bessemer Venture Partners Atlas", url: "https://www.bvp.com/atlas" }
    ],
    relatedGuides: [
      { slug: "ltv-cac-ratio-guide", title: "LTV to CAC Ratio Explained: What Is a Good LTV:CAC for Startups?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" }
    ],
    faqs: [
      { question: "Why does my cohort-based LTV differ from this formula?", answer: "This formula assumes constant churn, which many businesses do not have. Cohort LTV tracks how long each group actually stays, which is more accurate when churn is improving or worsening over time." },
      { question: "Should expansion revenue be included in LTV?", answer: "Yes, if you have it, include expansion revenue and net revenue retention in your LTV model. This formula uses a static ARPA, so it understates LTV for companies with strong upsell motion." },
      { question: "What is a good LTV for a $49 per month product?", answer: "At 4% monthly churn and an 80% margin, a $49 plan yields roughly $980 LTV. To get above $1,000, either raise the price, cut churn, or add expansion revenue such as seats and add-ons." }
    ],
    disclaimer: "Informational only, not financial advice. LTV is an estimate based on assumptions about churn and margin; validate with cohort data before making acquisition or pricing decisions."
  }
};
