export const calculatorContentMarketing = {
  "roas-calculator": {
    formulaSteps: [
      "Input campaign revenue ($120,000) and ad spend ($30,000).",
      "Divide revenue by ad spend: $120,000 / $30,000 = 4.0.",
      "Result: 4.0x ROAS, meaning $4.00 of revenue per $1.00 spent."
    ],
    formulaVariables: [
      { name: "revenue", meaning: "The total revenue your tracking attributes to the campaign or period." },
      { name: "adSpend", meaning: "All money spent on the campaign, including media, creative, and management fees." },
      { name: "ROAS", meaning: "Dollars earned per dollar of ad spend (the result)." }
    ],
    workedExample: {
      scenario: "BrightLeaf Coffee, a DTC coffee brand, runs a month-long Meta holiday campaign and attributes $120,000 in revenue to $30,000 in ad spend.",
      inputs: [
        { name: "revenue", label: "Campaign revenue", value: 120000 },
        { name: "adSpend", label: "Ad spend", value: 30000 }
      ],
      steps: [
        "Attributed revenue: $120,000.",
        "Total ad spend: $30,000.",
        "Divide revenue by spend: $120,000 / $30,000 = 4.0.",
        "ROAS is 4.0x."
      ],
      result: "BrightLeaf's holiday campaign returned 4.0x ROAS, earning $4.00 in revenue for every $1.00 spent."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Below break-even", range: "Under 2:1", meaning: "Revenue does not cover ad spend plus product and overhead costs, so you are likely losing money on ads.", recommendation: "Pause poor segments, rework creative and targeting, and fix landing page conversion rate before scaling." },
        { label: "Break-even zone", range: "2:1 to 3:1", meaning: "You roughly cover costs with little margin left; typical for broad cold-audience campaigns.", recommendation: "Raise average order value and conversion rate, then shift budget toward your best ad sets." },
        { label: "Good", range: "3:1 to 6:1", meaning: "A healthy, profitable zone for most ecommerce brands, matching typical paid channel performance.", recommendation: "Scale winning campaigns gradually and reinvest into top creatives and audiences." },
        { label: "Excellent", range: "6:1 and above", meaning: "Strong revenue efficiency that often indicates under-spending on a proven winner.", recommendation: "Increase budget, expand to lookalike audiences, and test new placements to capture more demand." }
      ]
    },
    benchmarks: {
      caption: "Typical ROAS by channel for ecommerce. A 2:1 return is roughly break-even for most brands once product costs and overhead are included.",
      headers: ["Channel", "Typical", "Strong"],
      rows: [
        ["Google Search", "3-5x", "6x+"],
        ["Meta (Facebook / Instagram)", "2-4x", "5x+"],
        ["TikTok", "1.5-3x", "4x+"],
        ["Display", "1-2x", "3x+"]
      ]
    },
    practicalTips: [
      "Use a consistent attribution window, such as 7-day click and 1-day view, so comparisons across channels are fair.",
      "Include creative production, landing page, and management fees in ad spend, or you will overstate ROAS.",
      "Slice ROAS by campaign, ad set, and audience; a blended 4x can hide segments running at 1x.",
      "Match your ROAS target to your margin: a 50% contribution margin needs roughly 2:1 just to break even.",
      "Judge ROAS on trends over 7-14 days, not a single day, since daily data is noisy.",
      "Pair ROAS with conversion rate and volume; high ROAS on tiny volume leaves growth on the table."
    ],
    methodology: {
      approach: "The calculator divides total attributed campaign revenue by total ad spend. The result is expressed as a multiplier that shows how many dollars of revenue each dollar of spend generates.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD.",
      exclusions: "Does not account for product costs, taxes, or overhead, and relies on whatever attribution model your tracking reports.",
      limitations: "Attribution windows, cross-device tracking, and view-through conversions vary by platform, so results may differ between the ad platform and your analytics tool.",
      source: "Google Ads and Meta Ads platform data plus industry benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" },
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" }
    ],
    faqs: [
      { question: "How is ROAS different from profit?", answer: "ROAS counts gross revenue per ad dollar and ignores product costs, shipping, and overhead. A 4x ROAS is only profitable if your contribution margin exceeds 25% after those costs. Use ROAS for campaign comparisons and margin-adjusted profit for true profitability." },
      { question: "Which attribution window should I use for ROAS?", answer: "Most advertisers use 7-day click and 1-day view for Meta and 30-day click for Google. Pick one window and apply it everywhere so results are comparable. Longer windows capture more assisted revenue but can make campaigns look better than they are." },
      { question: "Why do ROAS numbers differ between the ad platform and my analytics tool?", answer: "Each platform uses its own attribution model, conversion window, and view-through rules, and analytics tools often apply multi-touch models. Small differences are normal; large gaps usually mean tracking mismatches. Reconcile the two by comparing raw conversion counts first." }
    ]
  },
  "cpc-calculator": {
    formulaSteps: [
      "Input total ad spend ($10,000) and clicks (8,500).",
      "Divide spend by clicks: $10,000 / 8,500 = $1.18.",
      "Result: an average CPC of $1.18 per click."
    ],
    formulaVariables: [
      { name: "adSpend", meaning: "Total campaign spend including bids, management fees, and tools." },
      { name: "clicks", meaning: "Total clicks recorded by the ad platform for the period." },
      { name: "CPC", meaning: "The average cost paid for each click (the result)." }
    ],
    workedExample: {
      scenario: "Northwind Audio, a headphones brand, runs a Google Search campaign spending $10,000 on ads that receive 8,500 clicks.",
      inputs: [
        { name: "adSpend", label: "Ad spend", value: 10000 },
        { name: "clicks", label: "Clicks", value: 8500 }
      ],
      steps: [
        "Total ad spend: $10,000.",
        "Total clicks received: 8,500.",
        "Divide spend by clicks: $10,000 / 8,500 = $1.18.",
        "The average CPC is $1.18 per click."
      ],
      result: "Northwind Audio paid an average of $1.18 per click on its Google Search campaign."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "High CPC", range: "Above typical range", meaning: "Clicks are expensive, usually from high competition, weak Quality Score, or broad targeting.", recommendation: "Improve ad relevance and landing page experience, refine keywords, and review bid strategy." },
        { label: "Typical CPC", range: "Within vertical range", meaning: "Cost per click is in line with your industry, so efficiency depends on conversion rate.", recommendation: "Track CPC alongside conversion rate to confirm profitable cost per acquisition." },
        { label: "Strong CPC", range: "Below typical range", meaning: "Above-average relevance and Quality Score are keeping click costs down.", recommendation: "Scale budget and expand to adjacent keywords and audiences." },
        { label: "Exceptional", range: "Well below typical range", meaning: "Unusually cheap clicks, worth verifying they are high-intent and not low-quality traffic.", recommendation: "Confirm conversion rate holds, then aggressively scale the winning structure." }
      ]
    },
    benchmarks: {
      caption: "Typical Google Search CPC by vertical. Meta click costs usually run 20-40% lower but on lower-intent traffic, so compare within each platform.",
      headers: ["Vertical", "Typical", "Strong"],
      rows: [
        ["Legal", "$6-8", "<$5"],
        ["Insurance", "$4-7", "<$4"],
        ["Ecommerce", "$0.50-1.50", "<$0.75"],
        ["SaaS / B2B", "$2-5", "<$2"]
      ]
    },
    practicalTips: [
      "Never judge CPC in isolation; a higher CPC that converts better can beat a cheap CPC with a poor conversion rate.",
      "Improve Quality Score with tight ad groups, keyword-matched ad copy, and fast relevant landing pages; a score of 8-10 can cut CPC by 30-50%.",
      "Use broad match with Smart Bidding carefully; it lowers some CPCs but can inflate spend on irrelevant queries.",
      "Compare CPC by device and time of day; mobile and off-peak hours often price differently.",
      "Set Max CPC limits on manual campaigns to protect profitability before data stabilizes."
    ],
    methodology: {
      approach: "Divides total ad spend by the total number of clicks received to produce the average cost per click for the campaign or period.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD.",
      exclusions: "Does not account for conversion rate, quality score, or impression volume, and uses the platform-reported click count.",
      limitations: "Average CPC smooths over bid variations by keyword, device, and auction; the actual CPC for any single click can differ substantially.",
      source: "Google Ads and Meta Ads platform data and industry benchmark reports.",
      date: "July 2026"
    },
    references: [
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "Google Ads", url: "https://ads.google.com" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Why is my CPC higher on Google than on Meta?", answer: "Google Search captures high-intent queries where many advertisers bid for the same clicks, pushing prices up. Meta auction clicks are cheaper but come from a browsing mindset, so the right comparison is cost per conversion, not raw CPC." },
      { question: "What is the difference between average CPC and actual CPC?", answer: "Average CPC is total spend divided by total clicks. Actual CPC is what one specific click cost in a single auction, which fluctuates with competition and Quality Score. Track the average for budgets and the actual for bid-level diagnostics." },
      { question: "How do automated bidding strategies affect CPC?", answer: "Target CPA, Target ROAS, and Maximize Conversions let the algorithm set bids per auction, which can push average CPC up on valuable searches and down elsewhere. Expect CPC swings and judge success by the campaign objective, not the CPC alone." }
    ]
  },
  "cpm-calculator": {
    formulaSteps: [
      "Input ad spend ($15,000) and impressions (1,800,000).",
      "Divide spend by impressions: $15,000 / 1,800,000 = $0.00833 per impression.",
      "Multiply by 1,000 to get the CPM: $8.33."
    ],
    formulaVariables: [
      { name: "adSpend", meaning: "Total spend on the campaign or media buy." },
      { name: "impressions", meaning: "Total times the ad was served (or viewable, depending on reporting)." },
      { name: "CPM", meaning: "Cost per 1,000 impressions (the result)." }
    ],
    workedExample: {
      scenario: "Cobalt & Co, a lifestyle apparel brand, runs a video awareness campaign spending $15,000 and serving 1,800,000 impressions.",
      inputs: [
        { name: "adSpend", label: "Ad spend", value: 15000 },
        { name: "impressions", label: "Impressions", value: 1800000 }
      ],
      steps: [
        "Total ad spend: $15,000.",
        "Impressions served: 1,800,000.",
        "Spend per impression: $15,000 / 1,800,000 = $0.00833.",
        "Multiply by 1,000: $0.00833 x 1,000 = $8.33 CPM."
      ],
      result: "Cobalt & Co paid $8.33 per 1,000 impressions, in line with the typical $5-15 social range."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "High CPM", range: "Well above format average", meaning: "Reach is expensive, often due to premium placements, narrow audiences, or high competition for your targeting.", recommendation: "Check viewability and engagement; if weak, widen targeting and test cheaper placements." },
        { label: "Typical CPM", range: "Within format range", meaning: "Reach pricing is normal for your format and audience.", recommendation: "Measure downstream metrics like clicks, site visits, and brand search lift." },
        { label: "Strong CPM", range: "Below format average", meaning: "Cheaper reach, typically from broad targeting or efficient inventory.", recommendation: "Confirm impression quality, then scale and diversify formats." },
        { label: "Suspiciously low", range: "Far below average", meaning: "Very cheap impressions can signal low-quality or bot-heavy inventory.", recommendation: "Audit viewability and invalid traffic before scaling." }
      ]
    },
    benchmarks: {
      caption: "Typical CPM by format. Programmatic premium placements cost more but usually deliver higher viewability and engagement.",
      headers: ["Format", "Typical", "Strong"],
      rows: [
        ["Display", "$2-10", "<$5"],
        ["Video", "$10-30", "<$15"],
        ["Social feeds", "$5-15", "<$8"],
        ["Programmatic premium", "$15-40", "<$20"]
      ]
    },
    practicalTips: [
      "Use viewable CPM (vCPM) rather than served CPM to price actual reach.",
      "Compare CPM within the same format and placement type; cross-format comparisons mislead.",
      "Set frequency caps to avoid paying for the same user repeatedly.",
      "For awareness campaigns, pair CPM with completion rate and brand lift, not just cheap impressions.",
      "Negotiate programmatic deals on vCPM with viewability thresholds above 70%."
    ],
    methodology: {
      approach: "Divides total ad spend by total impressions, then multiplies by 1,000 to express cost per thousand impressions. This normalizes reach costs across campaigns of different sizes.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD.",
      exclusions: "Does not account for viewability, invalid traffic, or completion rates, and uses the impression count your platform reports.",
      limitations: "Served impressions can differ from viewable impressions by 30% or more on some placements, which changes the true cost of effective reach.",
      source: "Google Ads and Meta Ads platform data and programmatic benchmark reports.",
      date: "July 2026"
    },
    references: [
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" },
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "What is the difference between CPM and vCPM?", answer: "CPM charges per 1,000 served impressions, while vCPM charges only for viewable impressions (at least 50% of pixels for 1 second for display, or 2 seconds for video). vCPM better reflects real reach and is the standard for programmatic deals." },
      { question: "Why is video CPM so much higher than display?", answer: "Video inventory is scarcer, more engaging, and priced for attention, so it commands $10-30 CPM versus $2-10 for display. The higher cost is often worth it if completion rates and brand lift justify the premium." },
      { question: "How do I forecast reach from my CPM budget?", answer: "Divide your budget by the CPM and multiply by 1,000. For example, $15,000 at an $8.33 CPM buys about 1.8 million impressions. Expect actual reach to be lower because frequency means some users see the ad multiple times." }
    ]
  },
  "conversion-rate-calculator": {
    formulaSteps: [
      "Input conversions (420) and visitors (14,000).",
      "Divide conversions by visitors: 420 / 14,000 = 0.03.",
      "Multiply by 100 to get the conversion rate: 3.0%."
    ],
    formulaVariables: [
      { name: "conversions", meaning: "Completed desired actions such as purchases, signups, or form fills." },
      { name: "visitors", meaning: "Total visitors (or sessions) in the same period." },
      { name: "Conversion rate", meaning: "Percentage of visitors who converted (the result)." }
    ],
    workedExample: {
      scenario: "Verdant Beauty, a skincare ecommerce site, records 420 purchases from 14,000 visitors in a month.",
      inputs: [
        { name: "conversions", label: "Conversions", value: 420 },
        { name: "visitors", label: "Visitors", value: 14000 }
      ],
      steps: [
        "Conversions: 420 purchases.",
        "Visitors: 14,000.",
        "Divide conversions by visitors: 420 / 14,000 = 0.03.",
        "Multiply by 100: 3.0% conversion rate."
      ],
      result: "Verdant Beauty converted 3.0% of its visitors, above the 1-3% typical ecommerce range."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Under 1%", meaning: "Most traffic leaves without converting, pointing to offer, message, or UX problems.", recommendation: "Audit page speed, value proposition, trust signals, and checkout friction." },
        { label: "Typical", range: "1-3%", meaning: "In line with average ecommerce performance; there is room to improve through testing.", recommendation: "A/B test headlines, CTAs, and page layout to lift the rate." },
        { label: "Strong", range: "3-5%", meaning: "Above average, often with good traffic quality and a clear offer.", recommendation: "Protect gains with ongoing tests and apply winning patterns to other pages." },
        { label: "Excellent", range: "5% and above", meaning: "Top-quartile performance for most industries.", recommendation: "Invest more traffic into the funnel and explore upsells to capture extra value." }
      ]
    },
    benchmarks: {
      caption: "Typical conversion rates by page type. Top-quartile sites often convert at 5% or better.",
      headers: ["Scenario", "Typical", "Strong"],
      rows: [
        ["Landing pages", "2-5%", "5%+"],
        ["Ecommerce sites", "1-3%", "5%+"],
        ["Lead-gen forms", "5-15%", "15%+"],
        ["Top quartile sites", "5%+", "10%+"]
      ]
    },
    practicalTips: [
      "Segment conversion rate by traffic source; paid search usually converts 2-3x higher than social or display.",
      "Define one primary conversion per page; multiple competing goals dilute the rate.",
      "Use unique visitors for the denominator and unique conversions for the numerator for consistency.",
      "Test one variable at a time and wait for at least 100 conversions per variation before concluding.",
      "Speed matters: every extra second of load time beyond 2-3 seconds typically costs conversions."
    ],
    methodology: {
      approach: "Divides the number of conversions by the number of visitors and multiplies by 100 to express the result as a percentage.",
      rounding: "Results are rounded to 1 decimal place.",
      units: "Percent.",
      exclusions: "Does not account for repeat conversions by the same user, cross-device sessions, or differences between sessions and unique visitors.",
      limitations: "Conversion definitions and tracking configuration vary by site, so compare like-for-like when benchmarking against industry data.",
      source: "Google Analytics-style web data and industry conversion benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" },
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" }
    ],
    relatedGuides: [
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" }
    ],
    faqs: [
      { question: "Should I count only purchases or also signups as conversions?", answer: "Use a primary conversion that matches your business goal, such as purchases for ecommerce or signups for SaaS. Count secondary micro-conversions separately so a strong rate for one event does not hide weakness in another." },
      { question: "Why does my paid traffic convert better than organic traffic?", answer: "Paid ads with specific offers attract higher-intent visitors, while organic visitors often arrive in research mode. Segment by channel to set realistic targets: paid search may convert 3-5% while social traffic converts under 1%." },
      { question: "Can a high conversion rate on low traffic be misleading?", answer: "Yes. 50 conversions from 500 visitors is 10%, but the sample is too small to trust. Small samples swing wildly; wait until you have at least 1,000 visitors and ideally 100+ conversions before acting on the number." }
    ]
  },
  "ctr-calculator": {
    formulaSteps: [
      "Input clicks (2,500) and impressions (100,000).",
      "Divide clicks by impressions: 2,500 / 100,000 = 0.025.",
      "Multiply by 100 to get the click-through rate: 2.5%."
    ],
    formulaVariables: [
      { name: "clicks", meaning: "Total clicks on the ad or campaign." },
      { name: "impressions", meaning: "Total times the ad was shown." },
      { name: "CTR", meaning: "Percentage of impressions that became clicks (the result)." }
    ],
    workedExample: {
      scenario: "Summit Snacks, a DTC snack brand, runs a search campaign that earns 2,500 clicks from 100,000 impressions.",
      inputs: [
        { name: "clicks", label: "Clicks", value: 2500 },
        { name: "impressions", label: "Impressions", value: 100000 }
      ],
      steps: [
        "Clicks: 2,500.",
        "Impressions: 100,000.",
        "Divide clicks by impressions: 2,500 / 100,000 = 0.025.",
        "Multiply by 100: 2.5% CTR."
      ],
      result: "Summit Snacks' search ads hit a 2.5% CTR, close to the lower end of the 3-6% search benchmark and strong for a social feed."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Below 1%", meaning: "Ads are not connecting with the audience, usually a creative, relevance, or targeting issue.", recommendation: "Refresh creative and copy, tighten audiences, and rework hooks in the first frame." },
        { label: "Typical", range: "1-3%", meaning: "Reasonable relevance for many channels, with clear room to improve.", recommendation: "A/B test headlines, imagery, and CTAs; review keyword-to-ad copy match." },
        { label: "Strong", range: "3-6%", meaning: "Above-average relevance that often lowers cost per click.", recommendation: "Scale budget and protect the creative that is driving performance." },
        { label: "Exceptional", range: "Above 6%", meaning: "Exceptional relevance for search; verify it is not accidental clicks on misleading content.", recommendation: "Capitalize by expanding budget and testing similar angles." }
      ]
    },
    benchmarks: {
      caption: "Typical CTR by channel. Search ads capture high-intent demand, while display relies on creative resonance.",
      headers: ["Channel", "Typical", "Strong"],
      rows: [
        ["Search ads", "3-6%", "6%+"],
        ["Display ads", "0.3-0.8%", "1%+"],
        ["Social feeds", "0.8-2%", "2%+"],
        ["Email campaigns", "2-5%", "5%+"]
      ]
    },
    practicalTips: [
      "Never compare CTR across formats; a 0.5% display CTR can be strong while a 2% search CTR is weak.",
      "Improve CTR with specific offers, numbers in headlines, and strong visual hooks in the first 1-2 seconds of video.",
      "On Google Ads, CTR is the biggest Quality Score lever, and higher scores cut CPC.",
      "Check CTR by placement and audience; segments that drag the average are where relevance is failing.",
      "Track CTR trends after creative rotation to catch fatigue before performance drops."
    ],
    methodology: {
      approach: "Divides total clicks by total impressions and multiplies by 100 to express the share of impressions that resulted in a click.",
      rounding: "Results are rounded to 1 decimal place.",
      units: "Percent.",
      exclusions: "Does not account for viewable versus served impressions, conversion value, or accidental clicks.",
      limitations: "Served impressions include placements users never actually saw, which lowers CTR; viewable-impression CTR is a more accurate measure.",
      source: "Google Ads and Meta Ads platform data and industry benchmark reports.",
      date: "July 2026"
    },
    references: [
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "Google Ads", url: "https://ads.google.com" },
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Why is my display CTR so much lower than my search CTR?", answer: "Display audiences are browsing, not searching, so clicks are rarer and often accidental. Display CTR of 0.3-0.8% is normal. Judge display by view-through conversions and brand lift rather than raw CTR." },
      { question: "How does ad position affect CTR?", answer: "Higher positions earn dramatically higher CTR; top-of-page ads can see 5-10x the CTR of lower positions. Position differences explain most apparent CTR gaps between campaigns, so normalize by placement before comparing." },
      { question: "What is a healthy CTR trend over time?", answer: "Look for stability or gradual improvement as relevance and creative quality improve. A steady decline over 2-3 weeks usually signals creative fatigue, audience saturation, or falling relevance; refresh creative and re-check targeting." }
    ]
  },
  "cpa-calculator": {
    formulaSteps: [
      "Input advertising cost ($5,000) and conversions (150).",
      "Divide cost by conversions: $5,000 / 150 = $33.33.",
      "Result: $33.33 per acquisition."
    ],
    formulaVariables: [
      { name: "advertisingCost", meaning: "Total advertising spend for the campaign, including fees." },
      { name: "conversions", meaning: "Conversions attributed to the campaign." },
      { name: "CPA", meaning: "Cost per acquisition (the result)." }
    ],
    workedExample: {
      scenario: "HarborLight Home, a home-goods brand, runs a Facebook lead campaign spending $5,000 and generating 150 conversions.",
      inputs: [
        { name: "advertisingCost", label: "Advertising cost", value: 5000 },
        { name: "conversions", label: "Conversions", value: 150 }
      ],
      steps: [
        "Advertising cost: $5,000.",
        "Conversions: 150.",
        "Divide cost by conversions: $5,000 / 150 = $33.33.",
        "CPA is $33.33 per acquisition."
      ],
      result: "HarborLight Home's campaign delivered each conversion for $33.33."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "High CPA", range: "Above 30% of customer value", meaning: "Acquisition costs are eating into profitability, often from cold targeting or weak creative.", recommendation: "Improve audience quality, landing page conversion rate, and offer strength before scaling." },
        { label: "Typical CPA", range: "Within vertical range", meaning: "Costs are normal for your industry and funnel stage.", recommendation: "Optimize toward the lower end with creative testing and bid strategy." },
        { label: "Strong CPA", range: "Below vertical typical", meaning: "Efficient conversion of spend into customers.", recommendation: "Scale budget and expand to adjacent audiences." },
        { label: "Exceptional", range: "Far below typical", meaning: "Very cheap acquisitions; verify conversions are real and attributed correctly.", recommendation: "Confirm with backend revenue data, then scale aggressively while quality holds." }
      ]
    },
    benchmarks: {
      caption: "Typical CPA by vertical. Always compare CPA against customer lifetime value, not other industries.",
      headers: ["Vertical", "Typical", "Strong"],
      rows: [
        ["Ecommerce", "$20-50", "<$20"],
        ["SaaS (free trial)", "$30-100", "<$30"],
        ["Finance / insurance", "$100-300+", "<$100"]
      ]
    },
    practicalTips: [
      "Set your target CPA from unit economics: a healthy CPA is under 30% of first-order value and under 25% of LTV.",
      "Use the right attribution window; 7-day click, 1-day view is a common starting point for Meta.",
      "Segment CPA by audience; retargeting often converts at a fraction of cold-audience CPA.",
      "Pair CPA with conversion volume; a great CPA on five conversions a day caps growth.",
      "Back up platform-attributed conversions with CRM or order data to catch double counting."
    ],
    methodology: {
      approach: "Divides total advertising cost by the number of attributed conversions to produce the average cost of each acquisition.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD.",
      exclusions: "Excludes product costs, overhead, and sales team expenses; counts only conversions your tracking attributes within its window.",
      limitations: "Attribution windows and models vary by platform, and delayed or offline conversions may be missed entirely.",
      source: "Google Ads and Meta Ads platform data and direct-response benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" },
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" }
    ],
    relatedGuides: [
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "cac-payback-vs-ltv-cac-ratio", title: "CAC Payback Period vs LTV:CAC Ratio — Which Metric Matters More?" }
    ],
    faqs: [
      { question: "How do I set a target CPA in Google Ads?", answer: "Start from your economics: desired profit per customer minus product and operating costs. For example, if a customer is worth $120 and you can profit at $40 acquisition cost, set Target CPA slightly below $40 and let the algorithm learn over 2-3 weeks." },
      { question: "Why is my CPA higher for cold audiences?", answer: "Cold audiences need more touchpoints and stronger persuasion before converting, so CPAs run 2-3x higher than retargeting. Budget for a full-funnel structure instead of judging cold-prospecting campaigns against retargeting targets." },
      { question: "How does CPA relate to break-even for thin margins?", answer: "At a 40% contribution margin, a $100 order can absorb at most $40 of acquisition cost before losing money. Calculate break-even CPA as average order value times margin, and keep your target at or below that number." }
    ]
  },
  "cpl-calculator": {
    formulaSteps: [
      "Input marketing spend ($8,000) and leads (200).",
      "Divide spend by leads: $8,000 / 200 = $40.",
      "Result: $40 per lead."
    ],
    formulaVariables: [
      { name: "marketingSpend", meaning: "Total spend across all lead-gen activities." },
      { name: "leads", meaning: "Leads generated in the same period." },
      { name: "CPL", meaning: "Cost per lead (the result)." }
    ],
    workedExample: {
      scenario: "Atlas Fitness, a B2B fitness-equipment supplier, spends $8,000 on LinkedIn ads, webinars, and content syndication, generating 200 leads.",
      inputs: [
        { name: "marketingSpend", label: "Marketing spend", value: 8000 },
        { name: "leads", label: "Leads", value: 200 }
      ],
      steps: [
        "Marketing spend: $8,000.",
        "Leads generated: 200.",
        "Divide spend by leads: $8,000 / 200 = $40.",
        "CPL is $40 per lead."
      ],
      result: "Atlas Fitness acquired each lead for $40."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Low CPL", range: "Well below $20-50 SMB range", meaning: "Cheap leads, but verify they are qualified, not just form-fillers.", recommendation: "Score leads and check sales-qualified rates before scaling." },
        { label: "Typical CPL", range: "$20-150 by segment", meaning: "Normal pricing for your segment; profitability depends on sales conversion.", recommendation: "Improve lead qualification and nurture to convert more of what you buy." },
        { label: "High CPL", range: "Above segment typical", meaning: "Leads are expensive, usually from competitive auctions or narrow targeting.", recommendation: "Diversify channels, improve landing page relevance, and refine buyer personas." },
        { label: "Very high", range: "Enterprise-scale $200+", meaning: "Expected for enterprise sales where each lead can be worth thousands.", recommendation: "Confirm deal size justifies the price; if not, move budget to lower-funnel channels." }
      ]
    },
    benchmarks: {
      caption: "Typical CPL by segment. Enterprise leads are expensive because contract values justify the price.",
      headers: ["Segment", "Typical", "Strong"],
      rows: [
        ["SMB services", "$20-50", "<$20"],
        ["B2B (mid-market)", "$50-150", "<$50"],
        ["Enterprise B2B", "$200+", "<$150"]
      ]
    },
    practicalTips: [
      "Track CPL by channel; LinkedIn may cost 3-5x Google but deliver better-qualified pipeline.",
      "Count only qualified leads in the denominator; unqualified form fills flatter the number.",
      "Include content production, tools, and distribution in spend, or you will understate true CPL.",
      "Pair CPL with lead-to-customer rate to judge real efficiency.",
      "Use progressive profiling forms to raise lead quality without raising cost."
    ],
    methodology: {
      approach: "Divides total marketing spend by the number of leads generated to find the average cost of acquiring one lead.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD.",
      exclusions: "Excludes sales team time, and counts leads as reported by the tracking setup, which may include unqualified entries.",
      limitations: "Lead definitions vary widely between companies, so benchmark against businesses with similar qualification standards.",
      source: "Paid platform data, marketing automation reporting, and B2B benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" },
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" }
    ],
    relatedGuides: [
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "What counts as a lead in the calculation?", answer: "A lead should be someone with real buying intent, not just anyone who fills a form. Apply a consistent definition such as form submission plus qualification score, and only count leads that enter your sales pipeline for accurate CPL." },
      { question: "How do I improve lead quality without raising CPL?", answer: "Use gated content matched to buyer stage, add qualifying questions to forms, and exclude low-intent audiences. Fewer but better leads raise close rates, lowering effective cost per customer even if headline CPL rises." },
      { question: "Is a low CPL always a good sign?", answer: "No. Cheap leads are often unqualified or the result of too-broad targeting, which wastes sales time. Judge success by cost per customer and pipeline value, not the raw CPL." }
    ]
  },
  "cost-per-install-calculator": {
    formulaSteps: [
      "Input campaign cost ($10,000) and installs (2,500).",
      "Divide cost by installs: $10,000 / 2,500 = $4.00.",
      "Result: $4.00 per install."
    ],
    formulaVariables: [
      { name: "campaignCost", meaning: "Total UA campaign cost including network spend and fees." },
      { name: "installs", meaning: "Installs attributed to the campaign." },
      { name: "CPI", meaning: "Cost per install (the result)." }
    ],
    workedExample: {
      scenario: "Driftwave Travel, a travel-app startup, spends $10,000 on TikTok and Meta UA campaigns that generate 2,500 installs.",
      inputs: [
        { name: "campaignCost", label: "Campaign cost", value: 10000 },
        { name: "installs", label: "Installs", value: 2500 }
      ],
      steps: [
        "Campaign cost: $10,000.",
        "Installs attributed: 2,500.",
        "Divide cost by installs: $10,000 / 2,500 = $4.00.",
        "CPI is $4.00 per install."
      ],
      result: "Driftwave Travel acquired each install for $4.00."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "High CPI", range: "Above category typical", meaning: "Installs are expensive, often from premium geos, hard audiences, or high competition.", recommendation: "Test lower-cost geos, cheaper formats, and creative refresh before scaling." },
        { label: "Typical CPI", range: "Within category range", meaning: "Costs are normal for your app category.", recommendation: "Watch post-install metrics; CPI alone does not show if users retain or pay." },
        { label: "Strong CPI", range: "Below category typical", meaning: "Efficient install generation, common in gaming and casual categories.", recommendation: "Scale the winning networks and creatives." },
        { label: "Exceptional", range: "Far below typical", meaning: "Very cheap installs; verify attribution quality to rule out organic leakage.", recommendation: "Check install-to-event rates before scaling budget." }
      ]
    },
    benchmarks: {
      caption: "Typical CPI by app category. iOS CPIs typically run 30-60% higher than Android for the same campaign.",
      headers: ["App category", "Typical", "Strong"],
      rows: [
        ["Gaming", "$1-5", "<$1.50"],
        ["Productivity apps", "$3-8", "<$3"],
        ["Fintech", "$5-15", "<$5"]
      ]
    },
    practicalTips: [
      "Optimize for post-install events (registrations, first purchase), not raw installs.",
      "Split iOS and Android budgets; iOS converts better but costs 30-60% more.",
      "Use SKAdNetwork and your MMP to check attribution quality across networks.",
      "Keep creative fresh; install costs climb quickly as audiences fatigue.",
      "Cap CPI by geo and value segment to protect blended efficiency."
    ],
    methodology: {
      approach: "Divides total campaign cost by the number of installs attributed by your mobile measurement partner or ad network.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Currency in USD.",
      exclusions: "Does not account for organic installs leaking into attribution, post-install retention, or in-app revenue.",
      limitations: "Attribution windows, fraud, and network reporting differ, so CPI can vary by source; always compare within the same window.",
      source: "Mobile ad network data, MMP reporting, and mobile UA benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" },
      { name: "Meta Business", url: "https://www.facebook.com/business" },
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" }
    ],
    relatedGuides: [
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Why is iOS CPI usually higher than Android CPI?", answer: "iOS users spend more in-app and are more valuable to advertisers, so bidding is more competitive. CPIs on iOS commonly run 30-60% higher. Budget per platform based on expected LTV, not just install cost." },
      { question: "Should I optimize for installs or post-install events?", answer: "Installs are a top-of-funnel vanity metric. If your app monetizes through in-app purchases or subscriptions, optimize for first-time purchase or registration events; you may pay a higher CPI but acquire paying users for less." },
      { question: "How do rewarded and interstitial campaigns affect CPI?", answer: "Rewarded video drives cheap, high-volume installs from incentivized users who often churn fast, while interstitial and native placements cost more but attract more organic-like users. Compare day-7 retention per network, not just CPI." }
    ]
  },
  "marketing-roi-calculator": {
    formulaSteps: [
      "Input revenue ($50,000) and marketing cost ($12,000).",
      "Subtract cost from revenue: $50,000 - $12,000 = $38,000 profit.",
      "Divide profit by cost: $38,000 / $12,000 = 3.17.",
      "Multiply by 100 for a 316.7% marketing ROI."
    ],
    formulaVariables: [
      { name: "revenue", meaning: "Revenue attributed to marketing activities." },
      { name: "marketingCost", meaning: "Total marketing cost including ads, tools, and team." },
      { name: "Marketing ROI", meaning: "Net return as a percentage of cost (the result)." }
    ],
    workedExample: {
      scenario: "Juniper Jewelry, a DTC jewelry brand, runs a holiday campaign generating $50,000 in revenue with $12,000 in total marketing costs.",
      inputs: [
        { name: "revenue", label: "Revenue", value: 50000 },
        { name: "marketingCost", label: "Marketing cost", value: 12000 }
      ],
      steps: [
        "Revenue: $50,000.",
        "Marketing cost: $12,000.",
        "Net profit: $50,000 - $12,000 = $38,000.",
        "Divide profit by cost: $38,000 / $12,000 = 3.17.",
        "Multiply by 100: 316.7% marketing ROI."
      ],
      result: "Juniper Jewelry earned a 316.7% marketing ROI, returning $3.17 of profit for every $1.00 spent."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Below break-even", range: "Under 100%", meaning: "Marketing generates less profit than it costs.", recommendation: "Cut underperforming channels, review attribution, and fix the conversion funnel." },
        { label: "Minimum viable", range: "100-200%", meaning: "Marketing pays for itself with a thin profit margin.", recommendation: "Optimize toward higher-margin channels and improve efficiency before scaling." },
        { label: "Good", range: "200-500%", meaning: "A healthy return typical of established performance programs.", recommendation: "Reinvest into proven channels and test new audiences." },
        { label: "Excellent", range: "Above 500%", meaning: "Exceptional efficiency that may signal under-investment.", recommendation: "Scale budget, but verify measurement quality and share of voice." }
      ]
    },
    benchmarks: {
      caption: "Marketing ROI benchmarks expressed as revenue return multiples. A 5:1 return equals 400% ROI.",
      headers: ["Level", "Revenue return", "ROI"],
      rows: [
        ["Minimum", "2:1", "100%"],
        ["Good", "5:1", "400%"],
        ["Excellent", "10:1", "900%"]
      ]
    },
    practicalTips: [
      "Include all costs in the denominator: ad platforms, creative, tools, agency fees, and team time.",
      "Use an attribution model you trust and apply it consistently across periods.",
      "Measure ROI by channel to find which mix drives the best blended return.",
      "Track marketing ROI monthly, not per campaign, to smooth seasonal noise.",
      "Separate brand campaigns from performance campaigns in reporting."
    ],
    methodology: {
      approach: "Subtracts total marketing cost from attributed revenue, divides by cost, and multiplies by 100 to express net return as a percentage.",
      rounding: "Results are rounded to 1 decimal place.",
      units: "Percent.",
      exclusions: "Does not account for product costs or overhead when revenue is gross, and relies on your attribution setup.",
      limitations: "Attribution models and cost definitions vary; ROI is only comparable when calculated consistently across campaigns and periods.",
      source: "Analytics and ad platform data plus marketing effectiveness benchmarks.",
      date: "July 2026"
    },
    references: [
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" },
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Should I include organic channel costs in marketing ROI?", answer: "Yes, if you want a true program-level view. Include content production, SEO tools, and team time for organic channels. For performance reporting, many teams calculate ROI separately for paid and organic to keep comparisons meaningful." },
      { question: "What is the difference between gross and net marketing ROI?", answer: "Gross ROI divides revenue by cost before subtracting product and operating costs. Net ROI subtracts those costs first, giving a truer profit picture. Use gross for quick comparisons and net for budget decisions." },
      { question: "How often should I recalculate marketing ROI?", answer: "Monthly is the standard cadence for programs that have stabilized. Weekly checks are useful right after campaign launches or large budget changes, but judge trend over 90 days so seasonal and learning-phase noise do not mislead." }
    ]
  },
  "email-open-rate-calculator": {
    formulaSteps: [
      "Input emails opened (8,500) and emails delivered (50,000).",
      "Divide opens by delivered: 8,500 / 50,000 = 0.17.",
      "Multiply by 100 to get the open rate: 17.0%."
    ],
    formulaVariables: [
      { name: "emailsOpened", meaning: "Unique opens recorded by your email platform." },
      { name: "emailsDelivered", meaning: "Emails delivered, excluding bounces." },
      { name: "Open rate", meaning: "Percentage of delivered emails opened (the result)." }
    ],
    workedExample: {
      scenario: "Lumen Skincare sends a weekly newsletter to 50,000 subscribers; 8,500 of the delivered emails are opened.",
      inputs: [
        { name: "emailsOpened", label: "Emails opened", value: 8500 },
        { name: "emailsDelivered", label: "Emails delivered", value: 50000 }
      ],
      steps: [
        "Emails opened: 8,500.",
        "Emails delivered: 50,000.",
        "Divide opens by delivered: 8,500 / 50,000 = 0.17.",
        "Multiply by 100: 17.0% open rate."
      ],
      result: "Lumen Skincare's newsletter achieved a 17.0% open rate."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Under 15%", meaning: "Deliverability or subject lines are underperforming; subscribers may not be seeing emails.", recommendation: "Check spam folder placement, clean inactive segments, and A/B test subject lines." },
        { label: "Typical", range: "15-30%", meaning: "Normal for automated, cold, or less-personalized sends.", recommendation: "Segment by engagement and send more relevant content to lift opens." },
        { label: "Strong", range: "30-40%", meaning: "Above-average performance for marketing email.", recommendation: "Protect the list with consistent cadence and value." },
        { label: "Excellent", range: "Above 40%", meaning: "Outstanding engagement, typical of highly relevant marketing email.", recommendation: "Study what works and replicate it across other segments." }
      ]
    },
    benchmarks: {
      caption: "Open rate benchmarks by email type. Note that Apple Mail Privacy Protection can inflate reported opens by auto-loading tracking pixels.",
      headers: ["Email type", "Typical", "Strong"],
      rows: [
        ["Marketing emails (Mailchimp)", "35-40%", "40%+"],
        ["Cold / automated", "15-25%", "30%+"],
        ["B2B newsletters", "20-30%", "35%+"]
      ]
    },
    practicalTips: [
      "Use unique opens rather than total opens to avoid inflating the rate with repeat openers.",
      "Clean your list regularly; dead subscribers drag open rate and deliverability down.",
      "A/B test subject lines on 10-20% of your list before full send.",
      "Warm up new domains and authenticate with SPF, DKIM, and DMARC for deliverability.",
      "Send at times your historical data shows the highest engagement per segment."
    ],
    methodology: {
      approach: "Divides the number of unique opens by the number of delivered emails and multiplies by 100.",
      rounding: "Results are rounded to 1 decimal place.",
      units: "Percent.",
      exclusions: "Excludes bounces and does not separate human opens from Apple Mail Privacy Protection machine opens.",
      limitations: "Apple Mail Privacy Protection can inflate open counts by 10-30%, making open rate less reliable than clicks for engagement decisions.",
      source: "Email service provider data and Mailchimp benchmark reports.",
      date: "July 2026"
    },
    references: [
      { name: "Mailchimp Resources", url: "https://mailchimp.com/resources" },
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" },
      { name: "HubSpot", url: "https://www.hubspot.com" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Should I use unique opens or total opens?", answer: "Use unique opens, which count each subscriber once. Total opens double-count people who open several times and inflate the rate. Most email platforms report both, and the unique figure is the standard for benchmarking." },
      { question: "Why did my open rate drop suddenly?", answer: "Sudden drops usually come from deliverability changes, a subject-line quality issue, or a segment change. Check bounce rate and spam complaints first, then test subject lines and review whether a large new segment is dragging the average." },
      { question: "What is a healthy open rate for a new sender?", answer: "New domains and IPs start lower, often 10-20%, while their reputation builds. Warm up gradually, authenticate your domain, and aim for the 25-35% range within a few months of consistent, engaged sends." }
    ]
  },
  "email-click-rate-calculator": {
    formulaSteps: [
      "Input email clicks (1,200) and emails delivered (50,000).",
      "Divide clicks by delivered: 1,200 / 50,000 = 0.024.",
      "Multiply by 100 to get the click rate: 2.4%."
    ],
    formulaVariables: [
      { name: "emailClicks", meaning: "Unique clicks on links in the email." },
      { name: "emailsDelivered", meaning: "Emails delivered, excluding bounces." },
      { name: "Click rate", meaning: "Percentage of delivered emails that got a click (the result)." }
    ],
    workedExample: {
      scenario: "Pinecone Pantry, a food subscription brand, delivers a product-launch email to 50,000 subscribers and records 1,200 unique clicks.",
      inputs: [
        { name: "emailClicks", label: "Email clicks", value: 1200 },
        { name: "emailsDelivered", label: "Emails delivered", value: 50000 }
      ],
      steps: [
        "Unique clicks: 1,200.",
        "Emails delivered: 50,000.",
        "Divide clicks by delivered: 1,200 / 50,000 = 0.024.",
        "Multiply by 100: 2.4% click rate."
      ],
      result: "Pinecone Pantry's launch email earned a 2.4% click rate."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Under 1.5%", meaning: "Content, offer, or CTA is not compelling to the list.", recommendation: "Test offers, CTA copy, button placement, and email length." },
        { label: "Typical", range: "1.5-3.5%", meaning: "Normal click performance for most industries.", recommendation: "Optimize toward the high end with tighter segments and stronger CTAs." },
        { label: "Strong", range: "3.5-5%", meaning: "Above-average engagement; content is resonating.", recommendation: "Replicate the winning structure across other campaigns." },
        { label: "Excellent", range: "Above 5%", meaning: "Outstanding response, often from a highly targeted list or exceptional offer.", recommendation: "Lean into the winning angles and audience segments." }
      ]
    },
    benchmarks: {
      caption: "Click rate benchmarks. Click-to-open rate (clicks per opener) is a better content-quality gauge than raw click rate.",
      headers: ["Metric", "Typical", "Strong"],
      rows: [
        ["Click rate (all email types)", "2-5%", "5%+"],
        ["Click-to-open rate", "10-20%", "20%+"],
        ["Ecommerce click rate", "2-3%", "4%+"]
      ]
    },
    practicalTips: [
      "Count unique clicks so one subscriber clicking five links does not inflate the rate.",
      "Track click-to-open rate alongside click rate to separate content quality from subject line power.",
      "Use one primary CTA per email; multiple competing links reduce per-link CTR.",
      "Optimize for mobile, where most emails are read and mis-sized buttons kill clicks.",
      "Send more to your most engaged segments to protect the click rate."
    ],
    methodology: {
      approach: "Divides the number of unique clicks by the number of delivered emails and multiplies by 100.",
      rounding: "Results are rounded to 1 decimal place.",
      units: "Percent.",
      exclusions: "Does not include opens, bounces, or click-to-open relationships, and uses the platform-reported unique click count.",
      limitations: "Click rate is affected by list composition and email type; compare within your own industry and historical averages.",
      source: "Email service provider data and Mailchimp benchmark reports.",
      date: "July 2026"
    },
    references: [
      { name: "Mailchimp Resources", url: "https://mailchimp.com/resources" },
      { name: "HubSpot", url: "https://www.hubspot.com" },
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Why is my click rate low even when open rates are high?", answer: "High opens with low clicks usually means the content or offer does not deliver on the subject line's promise, or the CTA is hard to find. Review headline-to-body alignment, CTA placement, and link design." },
      { question: "Does email client affect click rate measurement?", answer: "Yes. Some clients block tracking pixels or images, and Apple Mail Privacy Protection inflates opens without affecting clicks. That is why click rate is now considered the more reliable engagement signal for email." },
      { question: "How does click rate relate to email-driven revenue?", answer: "Click rate is the bridge between email reach and revenue: revenue equals delivered times click rate times landing page conversion rate times order value. Improving any of those levers lifts email-attributed revenue." }
    ]
  },
  "bounce-rate-calculator": {
    formulaSteps: [
      "Input single-page sessions (3,500) and total sessions (20,000).",
      "Divide single-page by total: 3,500 / 20,000 = 0.175.",
      "Multiply by 100 to get the bounce rate: 17.5%."
    ],
    formulaVariables: [
      { name: "singlePageSessions", meaning: "Sessions that left after viewing one page." },
      { name: "totalSessions", meaning: "All sessions in the period." },
      { name: "Bounce rate", meaning: "Percentage of sessions that bounced (the result)." }
    ],
    workedExample: {
      scenario: "Bluepeak Analytics, a B2B SaaS blog, receives 20,000 sessions in a month; 3,500 are single-page sessions with no further interaction.",
      inputs: [
        { name: "singlePageSessions", label: "Single-page sessions", value: 3500 },
        { name: "totalSessions", label: "Total sessions", value: 20000 }
      ],
      steps: [
        "Single-page sessions: 3,500.",
        "Total sessions: 20,000.",
        "Divide: 3,500 / 20,000 = 0.175.",
        "Multiply by 100: 17.5% bounce rate."
      ],
      result: "Bluepeak Analytics' site has a 17.5% bounce rate, well below the typical 40-60%."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Excellent", range: "Under 25%", meaning: "Visitors engage deeply, typical of strong landing pages or high-intent traffic.", recommendation: "Maintain the experience and study what keeps users engaged." },
        { label: "Good", range: "25-40%", meaning: "Above-average engagement for content sites.", recommendation: "Keep improving content depth and internal linking." },
        { label: "Typical", range: "40-60%", meaning: "Normal for most websites.", recommendation: "Look for pages above the average and fix their weakest elements." },
        { label: "Concerning", range: "Above 70%", meaning: "A likely disconnect between expectation and page experience (except blogs, where 60-90% is normal).", recommendation: "Check page speed, content relevance, and entry-page alignment." }
      ]
    },
    benchmarks: {
      caption: "Bounce rate benchmarks by site type. Blog pages naturally run 60-90% and that is normal.",
      headers: ["Site type", "Typical", "Strong"],
      rows: [
        ["Average website", "40-60%", "<40%"],
        ["Content sites", "25-40%", "<25%"],
        ["Blog pages", "60-90%", "Normal for blogs"],
        ["Warning zone", "70%+", "Investigate UX and relevance"]
      ]
    },
    practicalTips: [
      "Segment bounce rate by traffic source; paid visitors who bounce often signal ad-to-page mismatch.",
      "Improve page speed; each extra second of load time raises bounce risk materially.",
      "Make mobile experience first-class; high mobile bounce rates are common with desktop-first pages.",
      "Use clear internal links and related content to keep engaged visitors browsing.",
      "Do not panic about high blog bounce rates; research-style visits are often successful single-page sessions."
    ],
    methodology: {
      approach: "Divides single-page sessions by total sessions and multiplies by 100 to express the share of sessions that left without interaction.",
      rounding: "Results are rounded to 1 decimal place.",
      units: "Percent.",
      exclusions: "Does not account for events, scrolls, or single-page sessions that fully satisfied the visitor.",
      limitations: "Bounce definitions differ between analytics tools; GA4's engaged-session metric counts a session as engaged if it lasts 10+ seconds or fires a conversion event.",
      source: "Web analytics platform data and industry UX benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" },
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "HubSpot", url: "https://www.hubspot.com" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Why is my blog bounce rate above 70% and is that a problem?", answer: "Not necessarily. Readers often get their answer from one article and leave satisfied, which shows as a bounce. For informational content, 60-90% bounce is normal. Watch dwell time and return visits instead of the raw number." },
      { question: "How does GA4 define bounce differently from Universal Analytics?", answer: "Universal Analytics counted a session as a bounce when only one page was viewed. GA4 replaced this with the engaged-session metric, counting a session as engaged if it lasts 10+ seconds, fires a conversion, or has 2+ pageviews. Numbers will differ between tools." },
      { question: "What is a healthy bounce rate for paid landing pages?", answer: "For paid traffic, a bounce often means the ad promised something the page did not deliver. Landing pages converting well typically bounce 20-40%; above 50% usually warrants copy, speed, or offer fixes." }
    ]
  },
  "engagement-rate-calculator": {
    formulaSteps: [
      "Input total engagements (15,000) and total reach (300,000).",
      "Divide engagements by reach: 15,000 / 300,000 = 0.05.",
      "Multiply by 100 to get the engagement rate: 5.0%."
    ],
    formulaVariables: [
      { name: "totalEngagements", meaning: "Likes, comments, shares, saves, and link clicks combined." },
      { name: "totalReach", meaning: "Unique users who saw the content." },
      { name: "Engagement rate", meaning: "Percentage of reached users who engaged (the result)." }
    ],
    workedExample: {
      scenario: "Wanderlust Frames, a travel-photography brand, posts a reel that reaches 300,000 users and collects 15,000 engagements.",
      inputs: [
        { name: "totalEngagements", label: "Total engagements", value: 15000 },
        { name: "totalReach", label: "Total reach", value: 300000 }
      ],
      steps: [
        "Total engagements: 15,000.",
        "Total reach: 300,000.",
        "Divide engagements by reach: 15,000 / 300,000 = 0.05.",
        "Multiply by 100: 5.0% engagement rate."
      ],
      result: "Wanderlust Frames' reel earned a 5.0% engagement rate, well above the 1-3% typical range."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Weak", range: "Under 1%", meaning: "Content is not resonating with the reached audience.", recommendation: "Revisit hooks, topics, and posting times; study competitors' best posts." },
        { label: "Typical", range: "1-3%", meaning: "Normal engagement for most platforms.", recommendation: "Test formats and CTAs to push toward the strong band." },
        { label: "Strong", range: "3-5%", meaning: "Content is connecting and likely to be favored by algorithms.", recommendation: "Double down on similar topics and formats." },
        { label: "Exceptional", range: "Above 5%", meaning: "Viral-level resonance or a deeply loyal audience.", recommendation: "Ride the momentum with more of the same content and engagement." }
      ]
    },
    benchmarks: {
      caption: "Engagement rate benchmarks by platform, using reach-based rates. Rates vary by format, with short video typically engaging best.",
      headers: ["Platform", "Typical", "Strong"],
      rows: [
        ["Instagram / TikTok", "1-3%", "5%+"],
        ["Facebook", "0.5-1.5%", "3%+"],
        ["LinkedIn", "1-5%", "5%+"]
      ]
    },
    practicalTips: [
      "Use reach, not follower count, as the denominator; follower-based rates hide small accounts' wins.",
      "Weight shares and saves above likes; they indicate deeper intent and algorithmic lift.",
      "Post at times your own analytics show the most active audience.",
      "Reply to comments in the first hour to boost distribution.",
      "Compare engagement by format: short-form video usually beats static images."
    ],
    methodology: {
      approach: "Divides total engagements by total reach and multiplies by 100 to show what share of reached users interacted with the content.",
      rounding: "Results are rounded to 1 decimal place.",
      units: "Percent.",
      exclusions: "Does not differentiate engagement types, and uses reach as reported by the platform, which excludes repeat views.",
      limitations: "Engagement definitions and reach calculation differ by platform, and follower-based rates are common but less accurate.",
      source: "Social platform analytics (Meta, Instagram, TikTok, LinkedIn) and social benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "Meta Business", url: "https://www.facebook.com/business" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" },
      { name: "HubSpot", url: "https://www.hubspot.com" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-metrics-faq", title: "SaaS Metrics FAQ: 35 Essential Questions About SaaS KPIs, Benchmarks & Unit Economics" }
    ],
    faqs: [
      { question: "Should I weight shares and saves more than likes?", answer: "Yes. Shares and saves indicate genuine value and drive algorithmic distribution, while likes are low-effort signals. Many marketers track saves per reach as the strongest content-quality proxy." },
      { question: "Why does my engagement rate drop as my account grows?", answer: "As reach expands beyond your core audience, new viewers are less engaged, which mechanically lowers the rate. Judge by absolute interactions and engagement per follower until audiences mature." },
      { question: "How is engagement rate different from engagement by impressions?", answer: "Reach counts unique users, impressions count total views including repeats. Rates by impressions are always lower than reach-based rates. Pick one denominator and use it consistently when comparing posts." }
    ]
  },
  "marketing-efficiency-ratio-calculator": {
    formulaSteps: [
      "Input total marketing revenue ($100,000) and total marketing spend ($25,000).",
      "Divide revenue by spend: $100,000 / $25,000 = 4.0.",
      "Result: 4.0x MER."
    ],
    formulaVariables: [
      { name: "totalMarketingRevenue", meaning: "All revenue attributed to marketing across channels." },
      { name: "totalMarketingSpend", meaning: "All marketing costs including media, creative, tools, and team." },
      { name: "MER", meaning: "Marketing efficiency ratio, revenue per dollar spent (the result)." }
    ],
    workedExample: {
      scenario: "Nimbus D2C, an outdoor-gear brand, generates $100,000 in marketing-attributed revenue while spending $25,000 across Meta, Google, influencer, and email marketing.",
      inputs: [
        { name: "totalMarketingRevenue", label: "Total marketing revenue", value: 100000 },
        { name: "totalMarketingSpend", label: "Total marketing spend", value: 25000 }
      ],
      steps: [
        "Total marketing revenue: $100,000.",
        "Total marketing spend: $25,000.",
        "Divide revenue by spend: $100,000 / $25,000 = 4.0.",
        "MER is 4.0x."
      ],
      result: "Nimbus D2C's blended marketing efficiency is 4.0x, meaning every $1.00 of marketing spend returned $4.00 of revenue."
    },
    interpretation: {
      title: "How to read your result",
      levels: [
        { label: "Below sustainable", range: "Under 2x", meaning: "Marketing is not generating enough revenue to cover costs plus margin.", recommendation: "Review channel mix, cut low-efficiency spend, and fix funnel leaks." },
        { label: "Minimum viable", range: "2-3x", meaning: "Thin efficiency after blended costs; typical of aggressive growth phases.", recommendation: "Shift budget toward proven channels and improve retention." },
        { label: "Typical DTC", range: "3-5x", meaning: "A healthy full-funnel efficiency for most DTC and ecommerce businesses.", recommendation: "Scale incrementally while monitoring blended return." },
        { label: "Strong", range: "Above 5x", meaning: "Excellent blended efficiency, often with under-spending opportunity.", recommendation: "Increase budget and test new channels; verify measurement is capturing all spend." }
      ]
    },
    benchmarks: {
      caption: "MER benchmarks for DTC brands. MER is a blended program-level metric, comparable to ROAS but across all marketing costs.",
      headers: ["Level", "MER", "Read"],
      rows: [
        ["Minimum viable", "2-3x", "Thin margin after blended costs"],
        ["Typical DTC", "3-5x", "Healthy full-funnel efficiency"],
        ["Strong", "5x+", "Opportunity to scale budget"]
      ]
    },
    practicalTips: [
      "Include every cost: media, creative, tools, agency fees, content, and team salaries.",
      "Track MER monthly or quarterly; it is too noisy for daily decisions.",
      "Use MER alongside channel ROAS to catch cross-channel halo effects.",
      "Reconcile MER with finance-reported revenue to catch attribution gaps.",
      "Set MER targets from margins: with a 30% contribution margin you need MER above 3.3x to stay profitable."
    ],
    methodology: {
      approach: "Divides total marketing-attributed revenue by total marketing spend to produce a blended efficiency ratio across all channels and costs.",
      rounding: "Results are rounded to 2 decimal places.",
      units: "Revenue multiplier (e.g., 4.0x).",
      exclusions: "Depends entirely on your attribution model and which costs you classify as marketing.",
      limitations: "Different attribution windows and cost inclusion rules make MER comparisons across companies unreliable; use it to track your own trends.",
      source: "Analytics, ad platform, and finance data plus DTC benchmark studies.",
      date: "July 2026"
    },
    references: [
      { name: "HubSpot Marketing Statistics", url: "https://www.hubspot.com/marketing-statistics" },
      { name: "Google Ads Help", url: "https://support.google.com/google-ads" },
      { name: "Meta Business Help Center", url: "https://www.facebook.com/business/help" }
    ],
    relatedGuides: [
      { slug: "roas-vs-roi-guide", title: "ROAS vs ROI: What's the Difference?" },
      { slug: "customer-acquisition-cost-guide", title: "What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups" },
      { slug: "saas-benchmarks-2026", title: "SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage" }
    ],
    faqs: [
      { question: "How do I combine MER with channel-level ROAS?", answer: "Track ROAS per channel for tactical decisions and MER for the whole program. If MER is healthy but one channel's ROAS is low, the channel is likely driving assisted or halo value. Keep both views and reallocate based on blended impact." },
      { question: "Why does MER look better than my best channel ROAS?", answer: "MER's numerator includes revenue from all channels plus organic and branded effects, while channel ROAS only counts that channel's direct revenue. That makes MER structurally higher; compare MER to a blended average, not to individual channel ROAS." },
      { question: "How often should I recalculate MER?", answer: "Monthly at minimum, and quarterly for trend analysis. Because MER smooths noise across channels, a 90-day rolling view is the most stable signal for budget planning, while monthly checks catch emerging problems." }
    ]
  }
};
