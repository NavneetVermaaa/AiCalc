# CalcioCalc Editorial Standard

> Version 1.0 — July 2026
>
> This document defines how every article on CalcioCalc should be structured, written, and reviewed. It applies to all four content clusters: AI, SaaS/Startup, Marketing, and Finance.

---

## 1. Component Reference

Every article is assembled from reusable section blocks. The dispatch system in `BlogPostPage.jsx` maps each `type` string to a React component. Unknown types are silently skipped — existing articles are never broken.

### 1.1 Block Components

| Type | Component | Purpose |
|------|-----------|---------|
| `heading` | Inline `<h2>` | Section heading (auto-generates TOC anchor) |
| `text` | Inline `<p>` + SmartText | Body paragraph with auto-linking |
| `definition` | `DefinitionCard` | Term definition |
| `formula` | `FormulaCard` | Formula display |
| `takeaways` | `KeyTakeaways` | Summary bullet list |
| `benchmark` | `BenchmarkTable` | Data comparison table |
| `comparison` | `ComparisonTable` | Feature/option comparison |
| `warning` | `WarningBox` | Amber caution box |
| `proTip` | `ProTip` | Sky practical tip |
| `cta` | `CalculatorCTA` | Calculator call-to-action |
| `relatedMetrics` | `RelatedMetrics` | Cross-links to related calculators |
| `expertInsight` | `ExpertInsight` | Sky-accented expert analysis |
| `realityCheck` | `RealityCheck` | Amber misconception challenge |
| `founderNote` | `FounderNote` | Mint-accented personal voice |
| `decisionFramework` | `DecisionFramework` | Numbered condition → recommendation |
| `practicalChecklist` | `PracticalChecklist` | Mint checkbox action items |
| `caseStudy` | `CaseStudy` | Structured business scenario |
| `commonMisconception` | `CommonMisconception` | Split myth/reality panel |
| `timeline` | `Timeline` | Vertical dot-line chronology |
| `methodology` | `Methodology` | Source/approach transparency |
| `officialSources` | `OfficialSources` | Authoritative reference links |

### 1.2 Page-Level Components (Outside Section Loop)

| Component | Position | Purpose |
|-----------|----------|---------|
| `FAQ` | Below article grid | Accordion Q&A + FAQPage JSON-LD |
| `Continue Exploring` | After metadata, before content | Related guides + calculators |
| Related Calculators grid | Bottom of content column | Same-category calculators |
| Related Posts grid | Below FAQ | Same-category published posts |
| Progress bar | Fixed top of viewport | Scroll progress indicator |
| Sticky TOC sidebar | Left column on desktop | Heading navigation + scroll-spy |

---

## 2. Component Rules

### 2.1 Mandatory Components

Every published article MUST include:

| Component | Why |
|-----------|-----|
| `heading` (2+) | At least two section headings for structure and TOC |
| `text` (3+) | Minimum three paragraphs of body content |
| `takeaways` | Summary of key points (placed near the top, after intro) |
| `faq` (3+) | At least three questions in the post-level FAQ array |

### 2.2 Optional Components

All other components are optional. Use them when they genuinely improve the article:

| Component | Recommended When |
|-----------|-----------------|
| `definition` | Introducing a metric or term the reader may not know |
| `formula` | A calculation is central to the article |
| `benchmark` | Industry data or ranges exist to cite |
| `comparison` | Two or more options/approaches need side-by-side evaluation |
| `warning` | A common pitfall could cause real harm (financial, strategic) |
| `proTip` | A tactical shortcut that saves time or money |
| `cta` | A specific calculator directly supports the article topic |
| `relatedMetrics` | Multiple related calculators reinforce the topic |
| `expertInsight` | You can offer an observation that goes beyond surface-level definition |
| `realityCheck` | You are correcting a misconception you have actually seen in practice |
| `founderNote` | You have personal experience with the topic (max one per article) |
| `decisionFramework` | The reader faces a genuine choice between approaches |
| `practicalChecklist` | The article describes an actionable process with discrete steps |
| `caseStudy` | A real or realistic scenario improves understanding (max one per article) |
| `commonMisconception` | A specific myth is widespread and harmful |
| `timeline` | Historical context adds genuine value (e.g., model releases, standard changes) |
| `methodology` | Numbers, benchmarks, or comparisons need sourcing transparency |
| `officialSources` | Authoritative external references exist and strengthen trust |

### 2.3 Single-Use Components (Max One Per Article)

| Component | Reason |
|-----------|--------|
| `founderNote` | Personal voice loses impact if repeated |
| `caseStudy` | One scenario is illustrative; more than one is overwhelming |
| `takeaways` | One summary section near the top; additional summaries defeat the purpose |
| `methodology` | One transparency block per set of sourced data |
| `timeline` | One timeline per topic |

### 2.4 Components That Should Never Appear Together

| Conflict | Reason |
|----------|--------|
| `realityCheck` + `commonMisconception` adjacent | Same purpose — choose the format that fits best, use only one per misconception |
| `warning` + `realityCheck` adjacent | Both use amber styling; visual redundancy. Separate with text or heading |
| `takeaways` + `practicalChecklist` adjacent | Both are lists; readers will confuse summary with action items |
| Two `cta` within 3 sections of each other | Calculator CTAs need context between them to feel natural |
| `founderNote` + `expertInsight` adjacent | Personal and third-party voice clash side by side. Separate by at least one other section |

---

## 3. Recommended Article Flow

### 3.1 AI Guides (AI cost, API pricing, ROI, agent savings)

```
Eyebrow + Title + Description + Metadata
  ↓
Continue Exploring (related guides + calculators)
  ↓
Text — Introduction (what problem this solves)
  ↓
Takeaways (key points)
  ↓
Definition — Core term (if applicable)
  ↓
Expert Insight — Industry observation
  ↓
Heading — How [model/tool] works
  ↓
Text — Explanation
  ↓
Formula — Pricing or calculation (if applicable)
  ↓
Timeline — Model releases or pricing changes (if relevant)
  ↓
Heading — Practical example
  ↓
Text — Step-by-step walkthrough
  ↓
Benchmark — Cost comparison table
  ↓
Decision Framework — Which model/tier to choose
  ↓
Reality Check — Common misconception about AI costs
  ↓
CTA — Related calculator
  ↓
Checklist — Implementation steps
  ↓
Methodology — Data sources and dates
  ↓
Official Sources — OpenAI/Anthropic/Google links
  ↓
Related Calculators grid (auto)
  ↓
FAQ
  ↓
Related Posts (auto)
```

### 3.2 SaaS/Startup Guides (CAC, LTV, MRR, churn, burn rate)

```
Eyebrow + Title + Description + Metadata
  ↓
Continue Exploring (related guides + calculators)
  ↓
Text — Introduction (why this metric matters to founders)
  ↓
Takeaways
  ↓
Definition — What the metric is
  ↓
Founder Note — Personal experience with this metric
  ↓
Heading — How to calculate it
  ↓
Formula
  ↓
Text — Step-by-step calculation
  ↓
Case Study — Realistic startup scenario
  ↓
Heading — Benchmarks by stage
  ↓
Benchmark — Data table
  ↓
Common Misconception — Myth vs reality
  ↓
Checklist — Monthly review steps
  ↓
Decision Framework — When to optimize vs when to ignore
  ↓
CTA — Related calculator
  ↓
Methodology
  ↓
Official Sources
  ↓
Related Calculators grid (auto)
  ↓
FAQ
  ↓
Related Posts (auto)
```

### 3.3 Marketing Guides (ROAS, CPC, CPM, conversion rate, CPA)

```
Eyebrow + Title + Description + Metadata
  ↓
Continue Exploring
  ↓
Text — Introduction (campaign optimization context)
  ↓
Takeaways
  ↓
Definition — Core metric
  ↓
Heading — How to calculate
  ↓
Formula
  ↓
Text — Walkthrough with numbers
  ↓
Benchmark — Industry averages table
  ↓
Reality Check — Vanity metric warning
  ↓
Heading — Optimization strategies
  ↓
Text — Practical tactics
  ↓
Decision Framework — Which channel to prioritize
  ↓
Checklist — Campaign setup or review steps
  ↓
Pro Tip — Tactical shortcut
  ↓
Case Study — Campaign before/after
  ↓
CTA — Related calculator
  ↓
Methodology
  ↓
Official Sources
  ↓
Related Calculators grid (auto)
  ↓
FAQ
  ↓
Related Posts (auto)
```

### 3.4 Finance Guides (EMI, GST, loan, mortgage, SIP, compound interest)

```
Eyebrow + Title + Description + Metadata
  ↓
Continue Exploring
  ↓
Text — Introduction (everyday relevance)
  ↓
Takeaways
  ↓
Definition — Key term
  ↓
Heading — How it works
  ↓
Text — Simple explanation
  ↓
Formula
  ↓
Text — Step-by-step example with numbers
  ↓
Comparison — Options side by side (e.g., fixed vs floating rate)
  ↓
Warning — Common financial mistake with real cost
  ↓
Expert Insight — Economic context
  ↓
Checklist — Steps to apply this knowledge
  ↓
Decision Framework — Which option fits your situation
  ↓
CTA — Related calculator
  ↓
Methodology
  ↓
Official Sources — RBI, IRS, government links
  ↓
Related Calculators grid (auto)
  ↓
FAQ
  ↓
Related Posts (auto)
```

---

## 4. Article Standards

### 4.1 Length and Structure

| Cluster | Min Words | Max Words | Recommended Sections | Min Internal Links |
|---------|-----------|-----------|---------------------|-------------------|
| AI | 1,500 | 3,000 | 8–15 | 4 |
| SaaS/Startup | 1,500 | 3,500 | 10–18 | 5 |
| Marketing | 1,200 | 2,500 | 8–14 | 4 |
| Finance | 1,000 | 2,000 | 6–12 | 3 |

### 4.2 Internal Links

- Every article must link to at least one calculator via `cta` or `relatedMetrics`
- Every article must link to at least one other blog post (handled automatically by "Continue Exploring" + "Related Posts")
- Calculator links should be contextually placed (not just at the bottom)
- SmartText handles automatic inline linking of calculator and blog names — use the exact title casing in your text

### 4.3 Calculator CTAs

- At least one `cta` per article, placed after the reader understands what the calculator does
- Never place a `cta` as the first or second section
- Maximum one `cta` per 800 words
- The CTA calculator must be directly relevant to the article topic

---

## 5. Writing Rules

### 5.1 Voice and Tone

- Write as an experienced operator, not a textbook
- Use first-person plural ("we", "our") for CalcioCalc observations
- Use second person ("you", "your") for reader guidance
- Avoid academic language ("it is important to note", "it should be considered")
- Prefer contractions ("don't", "can't", "you'll", "it's")
- Keep paragraphs under 60 words where possible

### 5.2 Introduction Rules

- Never start with a dictionary definition
- Open with a specific problem or scenario the reader recognizes
- Example hook: "You are three months into building your AI feature and your API bill is climbing faster than your user count."
- The first paragraph must make the reader feel the article was written for them

### 5.3 Quality Rules

1. Every article must contain at least one genuinely useful insight — something the reader can act on immediately, not just information
2. Explain WHY a metric matters, not just WHAT it is
3. Every benchmark or data point must include context (source, date, methodology)
4. Never pad word count with obvious explanations
5. Every claim about best practices should be grounded in experience or cite a source
6. If you mention a number, show the calculation — even if briefly
7. Prefer concrete examples over abstract statements

### 5.4 Section-Specific Writing Rules

| Component | Writing Rule |
|-----------|-------------|
| `text` | One idea per paragraph. Lead with the conclusion. |
| `heading` | Must be scannable and descriptive (not "Introduction" but "Why CAC Keeps Rising") |
| `takeaways` | Each item must be independently useful (not "we covered X, Y, Z") |
| `founderNote` | Must be based on actual experience. Never invent a founder anecdote. Always attribute. |
| `expertInsight` | Must cite or reference a real industry pattern. Avoid generic observations. |
| `realityCheck` | Must challenge a misconception you have actually observed, not a straw man. |
| `caseStudy` | Company name can be anonymized ("a Series A SaaS company") but numbers must be realistic. |
| `commonMisconception` | Myth must be a real, widespread belief (quote a tweet or forum post if possible). |
| `methodology` | Must disclose data source, collection date, and any limitations. |
| `officialSources` | Only include links you have verified. No dead links. |

---

## 6. Component Placement Rules

| Component | Recommended Position |
|-----------|---------------------|
| `takeaways` | Within first 3 sections (after intro text) |
| `definition` | After introducion if the term needs defining |
| `formula` | Before the worked example, after the concept is introduced |
| `benchmark` | After the calculation, before optimization guidance |
| `comparison` | Before a decision framework or checklist |
| `founderNote` | After the reader understands the basics, before deeper analysis |
| `expertInsight` | After a concept is established, to add depth |
| `realityCheck` | After presenting conventional wisdom, before challenging it |
| `caseStudy` | After explaining the concept, before abstract principles |
| `commonMisconception` | After the reader has enough context to appreciate the correction |
| `decisionFramework` | Near the end, before the checklist or CTA |
| `practicalChecklist` | At the end of actionable content, before methodology/sources |
| `timeline` | Early, if historical context helps frame the article |
| `methodology` | Near the end, before official sources |
| `officialSources` | Very near the end, before FAQ |
| `cta` | After the reader understands why the calculator matters |
| `relatedMetrics` | After main content, before CTA |
| `warning` | Immediately before the section where the mistake commonly occurs |

---

## 7. Publishing Checklist

Before marking an article as `published: true`, verify every item:

### SEO

- [ ] `metaTitle` is set and between 50–60 characters
- [ ] `description` is between 145–160 characters
- [ ] Description includes primary keyword naturally
- [ ] Description does not repeat the title
- [ ] `slug` matches the article URL convention
- [ ] `tags` include the primary topic + related calculator names

### EEAT

- [ ] Article demonstrates experience (practical insight, not just definitions)
- [ ] Article cites sources where applicable (`officialSources` or `methodology`)
- [ ] At least one EEAT block is present (`expertInsight`, `founderNote`, `caseStudy`, `realityCheck`, `commonMisconception`, or `methodology`)
- [ ] All claims about benchmarks or industry standards are sourced
- [ ] `methodology` block included if the article contains original data

### Internal Links

- [ ] At least one `cta` linking to a relevant calculator
- [ ] SmartText will match at least 2 calculator or blog names in the text
- [ ] No broken links (verify all `to` paths)
- [ ] `relatedMetrics` items point to existing calculators

### Content

- [ ] Word count meets minimum for the cluster
- [ ] Introduction hooks with a real problem, not a definition
- [ ] Every `heading` is scannable and descriptive
- [ ] All paragraphs are under 60 words (approximately)
- [ ] No placeholder text or "TODO" markers
- [ ] `takeaways` is within first 3 sections
- [ ] `faq` has at least 3 questions
- [ ] Questions are real queries a reader would search for

### Technical

- [ ] All `sections` types match keys in `sectionRenderers`
- [ ] `published: true`
- [ ] `publishedDate` is set
- [ ] `readingTime` is accurate (approx 200 words per minute)
- [ ] `npm run build` passes with zero errors
- [ ] Article renders correctly in desktop and mobile viewports
- [ ] All images referenced exist (if any)
- [ ] All external `officialSources` URLs are valid

---

## 8. Cluster-Specific Requirements

### 8.1 AI Finance

| Requirement | Standard |
|-------------|----------|
| `timeline` | Recommended (model releases change pricing frequently) |
| `benchmark` | Strongly recommended (cost comparison across providers) |
| `officialSources` | Required (must link to provider pricing pages) |
| `methodology` | Required (pricing changes frequently; must note date) |
| Calculator CTA | Must link to the relevant cost calculator |

### 8.2 Startup Metrics

| Requirement | Standard |
|-------------|----------|
| `founderNote` | Strongly recommended (founder voice adds credibility) |
| `caseStudy` | Recommended (startup scenarios improve understanding) |
| `benchmark` | Required (metrics need stage-based context) |
| `decisionFramework` | Recommended (founders face real trade-offs) |
| `methodology` | Required for any benchmarks |

### 8.3 Growth Analytics (Marketing)

| Requirement | Standard |
|-------------|----------|
| `benchmark` | Required (marketing metrics need industry context) |
| `realityCheck` | Recommended (vanity metrics are widespread) |
| `proTip` | Recommended (tactical shortcuts are valued) |
| `warning` | Recommended (budget waste is a real risk) |
| Calculator CTA | Must link to the relevant marketing calculator |

### 8.4 Finance

| Requirement | Standard |
|-------------|----------|
| `comparison` | Recommended (loan types, investment options) |
| `warning` | Recommended (financial mistakes are costly) |
| `officialSources` | Required (regulatory or government sources) |
| `definition` | Recommended (financial terms need clarity) |
| `methodology` | Required if using specific rates or assumptions |

---

## 9. Example: Article Section Data

For reference, here is how the new block types are used in blog data:

```js
// Expert Insight
{ type: "expertInsight", content: "One pattern we consistently see is that companies monitoring MRR weekly grow 2x faster than those reviewing it monthly. The frequency forces accountability." },

// Reality Check
{ type: "realityCheck", content: "Many founders believe lower CAC is always better. In reality, cutting CAC below the optimal point often means you are underinvesting in your highest-performing channels." },

// Founder Note (max one per article)
{ type: "founderNote", content: "The single best thing we did for MRR tracking was switching from monthly to weekly reviews.", author: "Navneet" },

// Decision Framework
{ type: "decisionFramework", title: "Choose Your AI Model",
  options: [
    { condition: "You need real-time chat responses", recommendation: "GPT-4o mini — lowest latency" },
    { condition: "You are processing complex documents", recommendation: "Claude 3.5 Sonnet — best at reasoning" }
  ]
},

// Practical Checklist
{ type: "practicalChecklist", title: "Monthly CAC Review",
  items: [
    "Pull sales and marketing spend from the last 3 months",
    "Segment spend by channel (paid, organic, referral, sales)",
    "Calculate blended and channel-specific CAC",
    "Compare against the previous quarter trend"
  ]
},

// Case Study (max one per article)
{ type: "caseStudy",
  company: "SupportFlow AI",
  situation: "SaaS startup spending $12K/mo on GPT-4 with no ROI tracking.",
  numbers: "Before: $12K/mo cost, $0 attributed revenue. After: $12K/mo cost, $48K/mo savings.",
  decision: "Audited tickets to tag AI-handled resolutions.",
  outcome: "4:1 ROI in 90 days with same headcount.",
  lesson: "Always measure cost savings before revenue lift."
},

// Common Misconception
{ type: "commonMisconception",
  myth: "You need thousands of users before cohort analysis is useful.",
  reality: "Cohort analysis reveals retention patterns as early as 50 paying users.",
  explanation: "Early cohort data prevents you from building features nobody uses."
},

// Timeline
{ type: "timeline", title: "OpenAI Model Releases",
  events: [
    { date: "Mar 2023", label: "GPT-4 released" },
    { date: "Nov 2023", label: "GPT-4 Turbo announced" },
    { date: "May 2024", label: "GPT-4o launched" }
  ]
},

// Methodology
{ type: "methodology",
  approach: "Prices averaged across pay-as-you-go and batch API tiers as of July 2026.",
  source: "Official OpenAI pricing page",
  date: "July 2026"
},

// Official Sources
{ type: "officialSources",
  sources: [
    { name: "OpenAI API Pricing", url: "https://openai.com/pricing" },
    { name: "OpenAI API Reference", url: "https://platform.openai.com/docs" }
  ]
},
```

---

## 10. What Makes a CalcioCalc Article Pass

An article is ready for publication only when every element below is satisfied. This is the minimum bar — the article must:

1. **Be genuinely useful** — The reader should learn something they can apply immediately, not just read a definition
2. **Sound human** — It should read like an experienced professional explaining something to a colleague, not like an SEO template
3. **Build trust** — Every claim about benchmarks, pricing, or best practices is either sourced or framed as experience
4. **Guide the reader forward** — By the end, the reader knows which calculator to use, which metric to track, or which decision to make next
5. **Be technically correct** — All formulas, calculations, and data points are verified; all links resolve; the build passes
6. **Be professionally scannable** — Headings, takeaways, and section structure let the reader find what they need in under 30 seconds
7. **Not waste the reader's time** — Every section has a purpose. No fluff, no padding, no filler
