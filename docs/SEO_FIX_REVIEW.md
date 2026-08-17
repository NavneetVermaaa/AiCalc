# SEO Fix Review — Draft Proposals (21 Published Articles)

> **Status:** DRAFT FOR REVIEW — `blogs.js` has NOT been touched.
> Every proposal below is grounded in the audit report and quotes the exact current text it would change.
> Target standards per `EDITORIAL_STANDARD.md`: metaTitle 50–60 chars · description 145–160 chars · keyword in title + first paragraph + ≥1 H2 · descriptive headings (never "Conclusion"/component labels) · intro opens with a recognized problem, never a disclaimer.

---

## Pattern 1 — Missing metaTitle (4 articles)

`BlogPostPage.jsx:467` renders `post.metaTitle || post.title`, so these four currently ship the full H1 as `<title>`. Formula: primary keyword + secondary benefit (per the EDITORIAL_STANDARD checklist).

| Article | Draft metaTitle | Chars | Notes |
|---|---|---|---|
| `customer-acquisition-cost-guide` | `What Is CAC? Calculate & Reduce Customer Acquisition Cost` | 57 | Keyword "Customer Acquisition Cost" + benefit (reduce) |
| `ltv-cac-ratio-guide` | `LTV to CAC Ratio: What's Good & How to Calculate It` | 51 | Keyword + calculate benefit |
| `roas-vs-roi-guide` | `ROAS vs ROI: Key Differences & When to Use Each Metric` | 54 | Keyword + decision benefit |
| `claude-api-pricing-guide` | `Claude API Pricing: Haiku, Sonnet & Opus Cost Guide` | 51 | Keyword + model-name secondary |

**Also worth noting (not requested, but adjacent):** 7 existing metaTitles are 1–10 chars over the 60 limit — `saas-unit-economics-guide` (61), `saas-metrics-faq` (63), `openai-api-pricing-guide` (61), `gemini-api-pricing-guide` (61), `ai-roi-calculator-guide` (61), `ai-cost-optimization-handbook` (61), `openai-vs-claude-vs-gemini-pricing-guide` (70, identical to the title). `saas-benchmarks-2026` is 44 (too short). Trimming the trailing qualifier word ("Guide"/"Explained") usually lands them in range.

---

## Pattern 2 — Description length / title repetition (18 rewrites)

16 descriptions are over 160 chars, 1 is under 145 (`saas-benchmarks-2026`), and 3 repeat the title (`roas-vs-roi-guide`, `saas-benchmarks-2026`, `cac-payback-vs-ltv-cac-ratio`). `cac-payback-vs-ltv-cac-ratio` is in-range but still flagged for repetition, so it's included here. All counts verified.

### 1. customer-acquisition-cost-guide (190 → 152)
**Before:** `Learn what Customer Acquisition Cost (CAC) is, how to calculate it with the CAC formula, industry benchmarks, and proven strategies to reduce acquisition costs. Free CAC calculator included.`
**After:** `What is Customer Acquisition Cost (CAC)? Learn the formula, benchmarks, and proven strategies to reduce acquisition costs. Free CAC calculator included.`

### 2. ltv-cac-ratio-guide (177 → 157)
**Before:** `Learn what LTV to CAC ratio means, how to calculate it, and what constitutes a good LTV:CAC for your startup. Includes benchmarks, examples, and a free LTV CAC ratio calculator.`
**After:** `What is a good LTV to CAC ratio? Learn how to calculate LTV, the 3:1 benchmark, and strategies to increase customer lifetime value. Free calculator included.`

### 3. roas-vs-roi-guide (209 → 156, title-repeat fixed)
**Before:** `ROAS vs ROI explained: learn the key differences between Return on Ad Spend and Return on Investment, when to use each metric, and how to calculate them correctly. Includes examples and a free ROAS calculator.`
**After:** `Return on Ad Spend vs Return on Investment: learn the key differences, when to use each, and how to calculate them correctly. Free ROAS calculator included.`
*(Adds new info — the expanded metric names — instead of restating "ROAS vs ROI".)*

### 4. saas-benchmarks-2026 (138 → 157, too short + title-repeat fixed)
**Before:** `SaaS benchmarks 2026 for CAC, LTV, churn, and growth by stage. Compare your startup against industry standards. Free calculators included.`
**After:** `2026 SaaS benchmarks by startup stage: CAC, LTV, churn, gross margin, and growth ranges from seed to scale — compare your metrics against industry standards.`
*(Drops the lead-in repeat, adds the value promise: stage ranges + what you can do with them.)*

### 5. startup-burn-rate-guide (164 → 151)
**Before:** `Calculate startup burn rate: learn the difference between gross and net burn, benchmarks by stage, and practical ways to reduce cash burn. Free calculator included.`
**After:** `Calculate startup burn rate and runway: learn gross vs net burn, benchmarks by stage, and practical ways to reduce cash burn. Free calculator included.`

### 6. cac-payback-vs-ltv-cac-ratio (159 → 147, title-repeat fixed)
**Before:** `CAC payback period vs LTV:CAC ratio: learn the difference, when to use each metric, benchmarks for both, and how they work together. Free calculators included.`
**After:** `Which metric should founders watch first? Learn when to prioritize CAC payback over LTV:CAC ratio, benchmarks for both, and how they work together.`
*(Question hook carries the keywords without restating the title.)*

### 7. saas-quick-ratio-guide (186 → 154)
**Before:** `Learn how to calculate and interpret the SaaS Quick Ratio, understand what it reveals about growth efficiency, and identify churn problems before they compound. Free calculator included.`
**After:** `The SaaS Quick Ratio shows whether growth outpaces churn. Learn the formula, benchmarks by stage, and how to improve your ratio. Free calculator included.`

### 8. saas-unit-economics-guide (167 → 149)
**Before:** `Learn how SaaS businesses actually make money. Master unit economics including gross margin, CAC, LTV, churn, burn rate, and the Rule of 40. Free calculators included.`
**After:** `Learn how SaaS businesses make money: gross margin, CAC, LTV, churn, burn rate, and the Rule of 40 — and how they connect. Free calculators included.`

### 9. saas-metrics-handbook (190 → 149)
**Before:** `Master SaaS metrics in 2026: MRR, ARR, CAC, LTV, churn, NRR, Quick Ratio, Rule of 40, burn multiple, and CAC payback. Benchmark your startup against industry standards with free calculators.`
**After:** `Master SaaS metrics in 2026: MRR, ARR, CAC, LTV, churn, NRR, Quick Ratio, Rule of 40, and burn multiple — benchmarked by stage with free calculators.`

### 10. saas-metrics-faq (165 → 156)
**Before:** `35 essential SaaS metrics questions answered. Covering MRR, ARR, CAC, LTV, churn, NRR, Rule of 40, Quick Ratio, burn rate, and benchmarks. Free calculators included.`
**After:** `35 essential SaaS metrics questions answered: MRR, ARR, CAC, LTV, churn, NRR, Rule of 40, Quick Ratio, burn rate, and benchmarks. Free calculators included.`

### 11. claude-api-pricing-guide (209 → 154)
**Before:** `Complete Claude API pricing guide covering Haiku, Sonnet, and Opus model costs, prompt caching, batch processing, context windows, and cost optimization with real examples. Includes the Claude Cost Calculator.`
**After:** `Complete Claude API pricing guide: Haiku, Sonnet, and Opus token costs, prompt caching, batch processing, and cost optimization. Free calculator included.`

### 12. gemini-api-pricing-guide (164 → 155)
**Before:** `Complete Gemini pricing guide for 2026 covering Gemini plans, API token costs, Flash vs Pro, context caching, grounding, and practical cost optimization strategies.`
**After:** `Complete Gemini pricing guide: plans, API token costs, Flash vs Pro, context caching, and practical cost optimization strategies. Free calculator included.`

### 13. ai-agent-savings-guide (205 → 148)
**Before:** `Complete AI agent savings guide covering the savings formula, automation benchmarks by workflow, loaded cost calculations, and strategies to maximize returns. Includes the free AI Agent Savings Calculator.`
**After:** `How much can AI agents save your business? Learn the savings formula, benchmarks by workflow, loaded cost calculations, and maximization strategies.`

### 14. llm-cost-optimization-guide (184 → 157)
**Before:** `10 proven strategies to reduce LLM API costs by 50-80%: model routing, prompt caching, batch processing, prompt compression, and multi-provider optimization. Free calculators included.`
**After:** `10 proven strategies to reduce LLM API costs by 50-80%: model routing, prompt caching, batch processing, prompt compression, and multi-provider optimization.`

### 15. prompt-optimization-guide (191 → 160)
**Before:** `Learn prompt optimization techniques to reduce LLM API costs by 40%: prompt compression, caching-friendly structure, output token control, and system prompt design. Free calculators included.`
**After:** `Reduce LLM API costs by 40% with prompt optimization: compression, caching-friendly structure, output token control, and system prompt design. Free calculators included.`

### 16. ai-pricing-faq-hub (195 → 156)
**Before:** `40 essential AI pricing questions answered. Covering LLM API costs, prompt caching, model routing, AI ROI, agent savings, prompt optimization, and provider comparisons. Free calculators included.`
**After:** `40 essential AI pricing questions answered: LLM API costs, prompt caching, model routing, AI ROI, agent savings, and provider comparisons. Free calculators.`

### 17. ai-cost-optimization-handbook (199 → 155)
**Before:** `The definitive AI cost optimization handbook covering provider pricing, model routing, caching, batch processing, prompt optimization, ROI measurement, and agent savings. Includes 6 free calculators.`
**After:** `The definitive guide to reducing AI API costs by 80%: provider pricing, model routing, caching, batch processing, prompt optimization, and ROI measurement.`

### 18. openai-vs-claude-vs-gemini-pricing-guide (175 → 151)
**Before:** `Compare OpenAI, Claude, and Gemini pricing side by side. Feature comparison, workload matrix, scorecards, and cost analysis to find the cheapest AI provider for your use case.`
**After:** `OpenAI vs Claude vs Gemini pricing compared side by side: model tiers, cost differences by workload, and a verdict on the cheapest AI provider for you.`

---

## Pattern 3 — Primary keyword placement (5 articles + 2 FAQ hubs)

Rule from the audit: keyword must appear in title ✓ (all these pass), first paragraph, and ≥1 H2.

### 1. ltv-cac-ratio-guide — "LTV to CAC ratio" appears exactly 1× in the body (an H2); intro covers LTV only
**Current intro (text #0), final sentence:** `Understanding LTV is essential for making informed decisions about marketing budgets, sales strategies, product development, and customer success initiatives.`
**Proposed (replace that sentence):** `Understanding LTV is essential for making informed decisions about marketing budgets, sales strategies, product development, and customer success initiatives — and LTV only makes sense next to what it costs to acquire each customer, which is exactly what the LTV to CAC ratio measures.`
*Ties the definition to the ratio naturally, so the article opens on the keyword's home turf. No heading change needed — "What is a Good LTV to CAC Ratio?" already carries it.*

### 2. gemini-api-pricing-guide — "Gemini API pricing" appears 1× in body, nowhere in title/intro/H2s
**Option A (recommended), current intro sentence:** `For individuals, Gemini is often used through Google's consumer-facing plans, while developers pay through usage-based API pricing, and larger organizations may negotiate Gemini API Enterprise Pricing through Google Cloud.`
**Proposed:** `For individuals, Gemini is often used through Google's consumer-facing plans, while developers pay through usage-based Gemini API pricing, and larger organizations may negotiate Gemini API Enterprise Pricing through Google Cloud.`
**Option B (single H2 rename):** H2 `Gemini API` → `Gemini API Pricing`. (Follows the same section; next H2 is "Gemini API Enterprise Pricing", so the flow is preserved.)

### 3. ai-cost-optimization-handbook — keyword in title only; intro is a boilerplate disclaimer
See Pattern 5 #4 — the intro replacement below puts "AI cost optimization" in the first paragraph, which is the cleaner fix. Alternative single H2 rename if you prefer heading-only: `Provider Pricing Comparison` → `AI Cost Optimization: Comparing Provider Pricing`.

### 4. openai-vs-claude-vs-gemini-pricing-guide — keyword in title only (0× in body)
**Option A (recommended), current intro (text #1), first sentence:** `Choosing an AI provider is rarely about the lowest sticker price alone.`
**Proposed:** `Choosing between OpenAI vs Claude vs Gemini pricing is rarely about the lowest sticker price alone.`
**Option B (single H2 rename):** H2 `Pricing at a Glance` → `OpenAI vs Claude vs Gemini Pricing at a Glance`.

### 5. saas-metrics-faq — keyword in title + intro but no H2
**Single H2 rename (recommended):** `Benchmarks FAQs` → `SaaS Metrics Benchmarks FAQs` (the section covers CAC/churn/LTV:CAC benchmarks — the keyword fits grammatically and semantically).

### 6. ai-pricing-faq-hub — keyword in title + intro but no H2
**Single H2 rename (recommended):** `LLM API Pricing Basics` → `AI Pricing Basics: LLM API Costs` (keeps the section's content focus, carries the keyword).

---

## Pattern 4 — Generic heading fixes (16 "Conclusion" + component-label H2s)

All 21 articles have ≥2 H2s, so no structural failure — these are quality flags. Each replacement below is derived from that article's actual closing content.

### "Conclusion" replacements (16 articles)

| Article | Current | Proposed |
|---|---|---|
| customer-acquisition-cost-guide | Conclusion | `Mastering CAC: The Path to Compounding Growth` (closing: "Founders who master this one number build growth engines that compound") |
| ltv-cac-ratio-guide | Conclusion | `Judging Growth Against the 3:1 Threshold` (closing: "judge it against the 3:1 threshold") |
| roas-vs-roi-guide | Conclusion | `Mastering the ROAS vs ROI Distinction` (closing: "Marketers who master this distinction stop scaling losing campaigns") |
| saas-benchmarks-2026 | Conclusion | `Benchmarks Are a Compass, Not a Destination` (closing: "benchmarks are a compass, not a destination") |
| startup-burn-rate-guide | Conclusion | `Burn Rate Is a Number to Manage, Not Fear` (closing: "burn rate is not a number to fear — it is a number to manage") |
| cac-payback-vs-ltv-cac-ratio | Conclusion | `Track Both: Payback for Cash, LTV:CAC for Strategy` (closing: "let payback govern your cash decisions while LTV:CAC governs your strategic bets") |
| mrr-guide | Conclusion | `Watch the MRR Mix, Not Just the Headline Number` (closing: "let the mix — not the headline number — drive your next decision") |
| saas-quick-ratio-guide | Conclusion | `The Compounding Advantage of a High Quick Ratio` (closing: "The company with the higher Quick Ratio will compound faster over time") |
| saas-unit-economics-guide | Conclusion | `Unit Economics Is One Connected System` (closing: "It is a system where every metric connects to every other metric") |
| saas-metrics-faq | Conclusion | `Bookmark This: Benchmarks Change as You Scale` (closing: "the benchmarks and targets change at every stage") |
| ai-roi-calculator-guide | Conclusion | `AI ROI Is Not a Vanity Metric` (closing: "AI ROI is not a vanity metric — it is the fundamental measure…") |
| ai-agent-savings-guide | Conclusion | `AI Agents: A Present-Day 3x–8x Savings Opportunity` (closing: "a present-day savings opportunity… 3x to 8x returns") |
| llm-cost-optimization-guide | Conclusion | `Treat LLM Cost Optimization as an Ongoing Practice` (closing: "not a one-time project — it is an ongoing practice") |
| prompt-optimization-guide | Conclusion | `Why Prompt Optimization Is Your Highest-Leverage Fix` (closing: "the highest-leverage cost reduction strategy") |
| ai-pricing-faq-hub | Conclusion | `Four Disciplines That Cut AI Costs 3–5x` (closing: "match the model to the task, cache and batch everything… pay 3-5x less") |
| ai-cost-optimization-handbook | Conclusion | `The Five-Layer Framework for AI Cost Optimization` (closing: "The complete framework has five layers…") |

### Component-label H2s (saas-metrics-handbook)

| Current H2 | What follows it | Proposed |
|---|---|---|
| KPI Matrix | "Every KPI in SaaS measures something different. The matrix below shows what each metric measures, why it matters, and the most common mistake…" | `What Each KPI Measures — and the Mistakes That Follow` |
| Metric Dependency Flow | "…CAC affects payback, payback affects runway pressure…" | `Following the Chain: CAC to Payback to Runway` |
| Benchmark Table | "The table below summarizes healthy and strong ranges for the most important SaaS KPIs…" | `Healthy vs Strong: Benchmark Ranges for Core KPIs` |
| Stage Roadmap | "A pre-seed company should not be judged by the same dashboard as a Series B company…" | `Which Metrics Matter at Each Stage` |
| Common Mistakes | "Founders often misread metrics because they focus on the easiest numbers to collect…" | `The Metrics Founders Misread Most Often` |
| Founder Case Studies | "The most useful SaaS stories usually come from companies that improved one core metric…" | `Case Studies: When One Metric Unlocks the Next Stage` |
| Methodology | methodology block ("This handbook synthesises benchmark reports…") | `Where These Benchmarks Come From` (optional — it's the required transparency block; renaming is polish) |

### AI-cluster label H2s (openai, claude, gemini, ai-roi, ai-agent-savings, llm, prompt, ai-pricing-faq-hub, ai-cost-optimization-handbook, openai-vs-claude-vs-gemini)

| Current H2 | Next section | Proposed (applies consistently across the cluster) |
|---|---|---|
| `FAQs` (4 AI guides) | "See the FAQ section at the top of this article…" | `FAQ Recap` — accurate: it points to the top-of-page FAQ, doesn't duplicate it |
| `Official Pricing Sources` (7 AI guides) | "All pricing data in this guide is verified as of July 2026…" | `Pricing Sources & Verification (July 2026)` — carries the date that matters to the reader |
| `Related Calculators` (8 AI guides) | relatedMetrics block | `Calculate Your Own Numbers` |
| `Related Guides` (ai-pricing-faq-hub) | list of guide links | `Dive Into the Detailed Guides` |
| **`SEO and Internal Linking` (gemini-api-pricing-guide)** | "The Gemini page should link back to the OpenAI guide in comparison sections…" | **Remove the H2 and its text entirely.** This is internal editorial instruction published on a live page — it should not exist in the TOC or body. The links it describes can be implemented via Pattern 6 instead. |
| **`Internal Links` (openai-vs-claude-vs-gemini-pricing-guide)** | "This page should function as the hub for the entire pricing cluster…" | **Remove the H2 and its text entirely.** Same reason. |
| `Comparison Table` (openai-vs-claude-vs-gemini) | comparison block ("Feature-by-Feature Comparison") | `Side-by-Side: Feature Comparison` (or just delete the H2 — the block has its own caption) |
| `Provider Cards` (openai-vs-claude-vs-gemini) | providerComparison block | `Provider Overview: Where Each Model Wins` |
| `Decision Tree` (openai-vs-claude-vs-gemini) | decisionTree block | `Which Provider Should You Choose?` |
| `Scorecards` (openai-vs-claude-vs-gemini) | scorecards block ("Category Winners") | `Category Winners: Who Wins Where` |
| `Summary Card` (openai-vs-claude-vs-gemini) | summaryCard block ("At a Glance") | `At a Glance: The Final Verdict` |
| `Methodology` (openai-vs-claude-vs-gemini) | benchmark block | `Methodology: How These Prices Were Compared` |

---

## Pattern 5 — AI-cluster boilerplate intros (4 articles)

Current first section in all four is `Pricing verified: July 2026. …` — a disclaimer, not an intro. Fix pattern for all four: **replace text #0** with the new opener below, and **delete the disclaimer text** — each article already re-states it inside its "Official Pricing Sources" section (e.g. ai-roi: "All pricing data in this guide is verified as of July 2026. AI tool pricing changes frequently…"), so nothing is lost.

### 1. ai-roi-calculator-guide
**Before (text #0):** `Pricing verified: July 2026. AI tool pricing and capabilities change rapidly. Verify current rates at each provider's official pricing page before making investment decisions.`
**After:** `You have just approved a $50,000 AI initiative — can you tell your board what it returns? Most teams cannot, because they measure cost and never measure value. AI ROI answers the question: for every dollar you spend on AI, how many dollars come back? This guide shows you how to calculate it, what benchmarks look like by use case, and how to push a marginal return into a strong one.`
*Keyword "AI ROI" lands in the first paragraph; opens with the board-approval problem founders actually recognize. (The existing text #1 — "Whether you are evaluating your first AI tool…" — already repeats the "understanding AI ROI" beat; keep it, it reads as an escalation rather than a duplicate.)*

### 2. ai-agent-savings-guide
**Before (text #0):** `Pricing verified: July 2026. AI agent pricing and capabilities evolve rapidly. Verify current API rates at each provider's official pricing page and test agent performance with your actual workflows before committing to enterprise deployments.`
**After:** `A customer-support agent that answers 1,200 tickets a month at $65 per loaded hour is costing you nearly $78,000 a year — and an AI agent that handles the same tickets costs a fraction of that. That gap is AI agent savings: the net money you keep when an automated worker replaces or augments human hours. This guide shows how to calculate it, what savings look like by workflow, and where the biggest wins hide.`
*Keyword "AI agent savings" + worked number hook. (Existing text #1's 240-hours example stays below as the full worked example — no duplication.)*

### 3. llm-cost-optimization-guide
**Before (text #0):** `Pricing verified: July 2026. LLM pricing changes rapidly as new models launch and providers adjust rates. Verify current pricing at each provider's official page before implementing optimization strategies.`
**After:** `Most teams using LLM APIs are overpaying by 50% to 80%. A $10,000 monthly API bill can usually become $2,000 to $3,000 without sacrificing quality — the difference is never the provider, it is how you use the provider. This LLM cost optimization guide covers 10 strategies that any team can implement regardless of scale.`
*Keyword "LLM cost optimization" in the first paragraph; borrows the strongest claim from the existing text #1 ("Most teams… 50% to 80%") as the hook — then delete text #1's now-redundant opening lines, keeping its example sentence: `A team spending $10,000 per month on GPT-5.6 Sol for every request can typically reduce to $2,000 to $3,000 by routing simple queries to GPT-5.4 Mini or Gemini 3.1 Flash, enabling prompt caching, batching async jobs, and compressing prompts.`*

### 4. ai-cost-optimization-handbook
**Before (text #0):** `Pricing verified: July 2026. AI pricing and capabilities evolve rapidly. This handbook consolidates best practices from the complete AI content cluster and is updated quarterly to reflect the latest pricing, models, and optimization techniques.`
**After:** `AI API costs are the fastest-growing expense at many technology companies — and most of that spend is waste. A team spending $10,000 per month on LLM APIs can typically get to $2,000 to $4,000 within a quarter without sacrificing quality. The difference between an optimized and unoptimized AI deployment is not technology, it is strategy. This AI cost optimization handbook covers the full framework: provider selection, model routing, caching, batch processing, prompt design, ROI measurement, and ongoing governance.`
*Keyword "AI cost optimization" in the first paragraph; merges the strongest sentences of existing text #1 up into the opener (text #1 then gets deleted — its content is fully absorbed).*

---

## Pattern 6 — Sibling-post internal links (14 articles)

**Key mechanism finding:** SmartText (`BlogPostPage.jsx:58`) auto-links **exact** matches of calculator titles and post titles. Several articles reference posts with wrong/shortened titles — e.g. `OpenAI API Pricing Guide: Complete Cost Breakdown for GPT Models (2026)` is **not** the real title (`OpenAI Pricing Guide (2026): ChatGPT Plans, API Costs & Token Pricing Explained`) — so **no link fires**. Several of these fixes are therefore simple title-correction swaps that create links without adding any new sentences. Where a swap isn't possible, the proposals below insert the full post title into an existing sentence, following the convention these articles already use ("The {title} guide explains…").

### 1. roas-vs-roi-guide (0 blog links; only growth-analytics post, so auto-grids show no sibling posts)
- **Anchor 1 — "Common ROAS and ROI Mistakes":** existing sentence `Sophisticated marketing teams use ROAS and ROI alongside LTV-based metrics for a complete picture of marketing effectiveness.` → append: `For the full picture, the LTV to CAC Ratio Explained: What Is a Good LTV:CAC for Startups? guide shows how acquisition value and retention connect.`
- **Anchor 2 — "How to Calculate ROAS and ROI":** attribution sentence ends `…integrate with your CRM to track offline conversions.` → append: `And the What Is Customer Acquisition Cost (CAC)? Complete Guide for Startups explains why acquisition cost must be part of the ROI denominator.`

### 2. saas-benchmarks-2026 (0 SmartText links)
- **Anchor 1 — "LTV to CAC Ratio" section:** existing sentence `Ratios above 5:1 suggest you may be underinvesting in growth and leaving potential revenue on the table.` → append: `The CAC Payback Period vs LTV:CAC Ratio — Which Metric Matters More? guide walks through when to prioritize one over the other.`
- **Anchor 2 — "Sales Efficiency (Magic Number)" section:** existing sentence `Values below 0.5 suggest inefficient [spend]…` → append: `Growth efficiency beyond sales efficiency is covered in the SaaS Quick Ratio: Measuring Growth Efficiency Beyond MRR guide.`

### 3. cac-payback-vs-ltv-cac-ratio (0 blog links)
- **Anchor 1 — "How to Improve LTV:CAC Ratio":** existing text contains `Our SaaS Benchmarks 2026 guide provides broader context on how these metrics compare across stages.` → **fix the title**: `The SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage guide provides broader context on how these metrics compare across stages.` *(auto-link fires)*
- **Anchor 2 — Conclusion section:** existing sentence `…they are the ones that understand the full picture their unit economics paint…` → append: `The SaaS Unit Economics: The Complete Guide to Building a Profitable SaaS Business guide connects payback, LTV:CAC, churn, and margin into that full picture.`

### 4. saas-unit-economics-guide (0 blog links, 14 calculator links)
- **Anchor 1 — "The Rule of 40":** existing text contains `The SaaS Benchmarks 2026 guide provides context on how Rule of 40 targets shift by company stage, and the SaaS Quick Ratio guide adds another lens…` → **fix both titles**: `The SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage guide provides context on how Rule of 40 targets shift by company stage, and the SaaS Quick Ratio: Measuring Growth Efficiency Beyond MRR guide adds another lens…` *(2 auto-links)*
- **Anchor 2 — "EBITDA, Burn Rate and Runway":** existing sentence `If burn rate is high and runway is short, your unit economics may be good but irrelevant…` → append: `The Startup Burn Rate: How to Calculate & Reduce Monthly Cash Consumption guide explains how to extend runway before it becomes the only metric that matters.`

### 5. saas-metrics-handbook (0 SmartText links)
- **Anchor 1 — "SaaS Quick Ratio" section:** existing sentence `Between 2 and 4 i[s]…` → append: `The SaaS Quick Ratio: Measuring Growth Efficiency Beyond MRR guide covers calculation and improvement in depth.`
- **Anchor 2 — "CAC Payback Period" section:** existing sentence `A payback under 12 months is healthy. Under 6 months is excellent capital ef[ficiency]…` → append: `See the CAC Payback Period vs LTV:CAC Ratio — Which Metric Matters More? guide for when payback should lead your decision-making.`

### 6. saas-metrics-faq (0 SmartText links)
- **Anchor 1 — "Benchmarks FAQs" intro text:** existing sentence `These questions cover the current SaaS benchmarks for 2026, how they vary by company stage…` → append: `…and stage-appropriate targets for CAC, churn, and the LTV to CAC ratio — see the SaaS Benchmarks 2026: CAC, LTV, Churn & Growth Metrics by Stage guide for the full ranges.`
- **Anchor 2 — "Growth FAQs" intro text:** existing sentence `These questions cover MRR growth rate benchmarks, the SaaS Quick Ratio, burn multiple, and stage-appropriate growth expectations.` → append: `The SaaS Quick Ratio: Measuring Growth Efficiency Beyond MRR guide explains the growth-quality metric in depth.`

### 7. openai-api-pricing-guide (0 SmartText links)
- **Anchor 1 — "Practical Takeaway":** existing sentence `Once you decide how long outputs should be, how much history should be retained, and which requests deserve premium models, token cost becomes manageable in practice.` → append: `For a systematic playbook, see the LLM Cost Optimization Guide: 10 Strategies to Reduce AI API Costs (2026).`
- **Anchor 2 — "Which One Should I Actually Choose?":** append to that section's text: `Still comparing providers? The OpenAI vs Claude vs Gemini Pricing (2026): Which AI Model Is Cheapest? guide benchmarks every tier side by side.`

### 8. claude-api-pricing-guide (0 SmartText links; also has a broken reference)
- **Anchor 1 — "Final Takeaway":** existing text contains `Compare all three in our AI pricing hub, or estimate your expected costs with our AI Cost Calculator.` → replace with: `Compare all three in the OpenAI vs Claude vs Gemini Pricing (2026): Which AI Model Is Cheapest? guide, or estimate your expected costs with the OpenAI, Claude, and Gemini cost calculators.` *(Fixes two dead references: "AI pricing hub" is not a post title and "AI Cost Calculator" does not exist as a calculator.)*
- **Anchor 2 — "How to Estimate Cost":** existing sentence `The easiest way to estimate Claude API cost is to break every request into input tokens, output tokens, cached context, and batch usage.` → append: `Once you know your breakdown, the LLM Cost Optimization Guide: 10 Strategies to Reduce AI API Costs (2026) shows where the biggest reductions hide.`

### 9. ai-roi-calculator-guide (0 blog links)
- **Anchor 1 — "Factors That Affect AI ROI":** existing sentence `…The AI Agent Savings Calculator models this scaling effect for agent-based deployments.` → append: `The AI Agent Savings Guide: How Much Can AI Agents Save Your Business (2026) walks through agent-specific savings math with worked examples.`
- **Anchor 2 — "Official Pricing Sources":** existing text lists three stale titles (`OpenAI API Pricing Guide: Complete Cost Breakdown for GPT Models (2026)` etc.) → replace each with the real post titles: `OpenAI Pricing Guide (2026): ChatGPT Plans, API Costs & Token Pricing Explained`, `Claude API Pricing Guide (2026): Haiku, Sonnet, Opus & Cost Optimization Explained`, `Gemini Pricing Guide (2026): Gemini Plans, API Costs & Token Pricing Explained`. *(3 auto-links from one swap)*

### 10. ai-agent-savings-guide (0 blog links)
- **Anchor 1 — "What Are AI Agent Savings?" and "AI Agent Cost Breakdown":** both sections list the same three stale provider-guide titles → swap to the real titles (as in #9). *(3 auto-links each — covers both sections)*
- **Anchor 2 — "The AI Agent Savings Formula":** existing sentence contains `The AI ROI Calculator Guide covers the broader ROI picture including revenue lift from improved service quality.` → fix the short-form: `The AI ROI Calculator Guide: How to Measure Return on AI Investments (2026) covers the broader ROI picture including revenue lift from improved service quality.` *(auto-link fires)*

### 11. llm-cost-optimization-guide (0 blog links)
- **Anchor 1 — "Strategy 4: Prompt Compression":** existing sentence `A typical production prompt of 8,000 tokens can often be compressed to 4,000 to 5,000 tokens…` → append: `The Prompt Optimization Guide: Reduce LLM Costs by 40% With Better Prompts (2026) covers each compression technique in depth.`
- **Anchor 2 — "Strategy 7: Multi-Provider Optimization":** existing sentence `Each LLM provider has pricing advantages at different capability tiers.` → append: `The OpenAI vs Claude vs Gemini Pricing (2026): Which AI Model Is Cheapest? guide maps those advantages tier by tier.`
- *(Bonus — "What Is LLM Cost Optimization?" section lists the same three stale provider-guide titles → swap to real titles.)*

### 12. prompt-optimization-guide (0 blog links)
- **Anchor 1 — "Technique 2: Caching-Friendly Prompt Structure":** existing sentence contains `The LLM Cost Optimization Guide provides detailed caching implementation guidance for each provider.` → fix the short-form: `The LLM Cost Optimization Guide: 10 Strategies to Reduce AI API Costs (2026) provides detailed caching implementation guidance for each provider.` *(auto-link fires)*
- **Anchor 2 — "Technique 6: RAG Context Selection":** existing sentence contains `The AI ROI Calculator Guide provides a framework for measuring the business value of context quality versus cost.` → fix the short-form: `The AI ROI Calculator Guide: How to Measure Return on AI Investments (2026) provides a framework for measuring the business value of context quality versus cost.` *(auto-link fires)*

### 13. ai-cost-optimization-handbook (0 SmartText links)
- **Anchor 1 — "Provider Pricing Comparison":** existing sentence lists the same three stale provider-guide titles → swap to real titles. *(3 auto-links)*
- **Anchor 2 — "Multi-Provider Strategy":** existing sentence `A multi-provider routing layer that sends each task to the cheapest adequate provider typically reduces costs by 15% to 30% compared to any single provider.` → append: `The OpenAI vs Claude vs Gemini Pricing (2026): Which AI Model Is Cheapest? guide compares providers across every tier to inform that routing.`
- *(Optional third — "Prompt Compression & Output Control" section → link the Prompt Optimization Guide, same pattern as #11 Anchor 1.)*

### 14. openai-vs-claude-vs-gemini-pricing-guide (0 blog links)
- **Anchor 1 — "Final Verdict":** existing text `Read the individual OpenAI Pricing Guide, Claude Pricing Guide, and Gemini Pricing Guide, then compare your expected monthly spend with the AI Cost Calculator, OpenAI Cost Calculator, Claude Cost Calculator, and Gemini Cost Calculator before you choose.` → replace the three short-form guide names and the nonexistent `AI Cost Calculator` with: `Read the individual OpenAI Pricing Guide (2026): ChatGPT Plans, API Costs & Token Pricing Explained, Claude API Pricing Guide (2026): Haiku, Sonnet, Opus & Cost Optimization Explained, and Gemini Pricing Guide (2026): Gemini Plans, API Costs & Token Pricing Explained, then compare your expected monthly spend with the OpenAI, Claude, and Gemini cost calculators before you choose.` *(3 auto-links; drops the dead "AI Cost Calculator" reference)*
- **Anchor 2 — provider sections:** the `OpenAI` / `Claude` / `Gemini` H2 sections each summarize one provider — appending its deep-dive guide title to each section text creates three contextual links. (Suggested one-liner per section: `The {full title} guide covers {provider} pricing in depth.`)

---

## Appendix — Fixes not in the 6 patterns but worth confirming while editing

- `BlogPostPage.jsx` renders `description` as both the meta description and the on-page subtitle under the H1 — every rewrite above also needs to read well as a visible subtitle (the drafts do).
- 5 articles have `updatedDate` set but no `metaTitle` — after adding metaTitles, verify the sitemap/pre-render scripts (`scripts/generate-sitemap.mjs`) pick up titles unchanged.
- Dead references spotted: `AI Cost Calculator` (claude guide, comparison guide) and `AI pricing hub` (claude guide) point to nothing — fixed within Pattern 6 proposals.

---

## Appendix B — Dead references & stray editorial text (follow-up scan)

### "AI Cost Calculator" — 4 spots in 3 articles (verified: no `ai-cost-calculator` page exists anywhere)

| Location | Current text | Fix |
|---|---|---|
| claude-api-pricing-guide, final takeaway | `…Compare all three in our AI pricing hub, or estimate your expected costs with our AI Cost Calculator.` | `…Compare all three in the OpenAI vs Claude vs Gemini Pricing (2026): Which AI Model Is Cheapest? guide, or estimate your expected costs with the OpenAI, Claude, and Gemini cost calculators.` |
| gemini-api-pricing-guide, final takeaway | `…or estimate your expected costs with our AI Cost Calculator.` | `…or estimate your expected costs with the OpenAI, Claude, and Gemini cost calculators.` |
| openai-vs-claude-vs-gemini-pricing-guide, "Internal Links" H2 body | `…Gemini Cost Calculator, and AI Cost Calculator.` | Heading + body deleted per Pattern 4 — reference dies with it |
| openai-vs-claude-vs-gemini-pricing-guide, Final Verdict | `…with the AI Cost Calculator, OpenAI Cost Calculator, Claude Cost Calculator, and Gemini Cost Calculator before you choose.` | Drop `AI Cost Calculator, ` — the three provider calculators remain |

**Intent:** a generic cross-provider AI cost estimator that was meant to exist but doesn't. **Flag for the add-2-calculators-per-category work** — it fits the AI category and the planned "AI budget governance" topic; restore the claude/gemini references to the real name once built.

### "AI pricing hub" (claude guide)
Means the existing comparison post under a wrong name (its own leaked copy: "This page should function as the hub for the entire pricing cluster"). Fix = use the exact title → auto-link (see table above).

### New dead reference: "AI Budget Planning Guide"
- llm-cost-optimization-guide, Strategy 8 (Usage Monitoring and Budget Alerts): `Use the AI Budget Planning Guide to forecast growing AI spend as usage scales.`
- No such post exists. Matches the unbuilt `AI budget governance` topic in `blogs.js` topics list.
- Interim: re-point to the AI Cost Optimization Handbook (covers budget alerts + quarterly audits) or drop the sentence. Later: build the guide and restore the reference.

### New short-form would-be links (no auto-link fires)
- cac-payback-vs-ltv-cac-ratio, "How to Improve LTV:CAC Ratio": `…the LTV:CAC Ratio Guide offers deeper analysis on benchmarking and improving your ratio…` → use exact title `LTV to CAC Ratio Explained: What Is a Good LTV:CAC for Startups?`
- openai-api-pricing-guide, Related Calculators section: `…and LLM Cost Comparison Guide for head-to-head pricing across OpenAI, Claude, Gemini, and DeepSeek.` → use exact title `OpenAI vs Claude vs Gemini Pricing (2026): Which AI Model Is Cheapest?` *(note: that post covers OpenAI/Claude/Gemini only — drop the DeepSeek mention or it reads as a mismatch)*

### Stray editorial/instructional text scan (all 21 articles, every string field)
- **Only the 2 known H2 leaks carry instructional copy in body text** (gemini "SEO and Internal Linking" H2 body; comparison "Internal Links" H2 body) — both H2 + text pairs are scheduled for deletion in Pattern 4.
- **No TODOs, FIXMEs, bracket placeholders, draft/lorem text, or writer notes anywhere else.**
- Checked and clean (false positives): "GitHub" (GitHub Copilot example), "The Plain English Guide to ROAS" (legit HubSpot source), "Which Part of This Hub Should You Act On"/"Where to Start in This Handbook" (decisionFramework titles), reader-facing "should include/cover" advice sentences, "Churn Guide" (false hit on the saas-benchmarks metaTitle).

### Scale of the short-form problem (why Pattern 6 matters more than the audit showed)
30+ short-form guide references across the AI cluster never auto-link because SmartText requires exact post titles: "Claude API Pricing Guide" (8 articles), "Gemini API Pricing Guide" (7), "OpenAI API Pricing Guide" (6), plus "See the X Guide" forms in ai-pricing-faq-hub (7), "The strategies detailed in the OpenAI API Pricing Guide" (ai-agent-savings, 2), etc. All are one-line exact-title swaps.
