# Calcio Editorial & SEO Standards Handbook

This document governs every article published on Calcio. It is the single source of truth for content creation, review, and quality assurance. Every article must follow these standards without exception.

---

## 1. Article Template (Final Section Order)

Every article uses this exact order. No deviations without documented justification.

```
H1: Primary Keyword — Complete Guide

Section 1: Quick Answer Box
  One paragraph answering "What is X?" in plain English. 3–4 sentences max.
  Serves as meta description + featured snippet target.

Section 2: What Is [Metric]?
  Definition. Formula in plain English. Why it matters.
  Include: "The formula is: [formula]"

Section 3: How to Calculate [Metric] (Step-by-Step)
  3–5 numbered steps. Each step is 1–2 sentences.
  Include a worked example with real numbers.

Section 4: Interactive Calculator CTA
  A contextual inline callout:
  "Use our free [Calculator Name] to calculate your [metric] instantly."
  Link to `/calculator/[slug]`

Section 5: Industry Benchmarks
  A table with 3–5 rows showing good/average/poor values.
  Source every number (or mark as "estimated range").

Section 6: Common Mistakes
  3–5 mistakes. Each is a short paragraph.
  Format: Mistake name → explanation → how to avoid.

Section 7: Tips to Improve
  3–5 actionable tips. Each is a short paragraph.
  Format: Tip name → 2–3 sentences on how.

Section 8: Frequently Asked Questions
  5–7 questions. Each answer is 2–4 sentences.
  Target People Also Ask queries from Google.

Section 9: Related Calculators
  A list of 2–4 related calculator links.

Section 10: Related Guides
  A list of 2–3 related blog article links.

Section 11: References
  Only included when making data-backed claims.
```

---

## 2. Writing Style Guide

### Sentence & Paragraph Rules

| Rule | Standard |
|------|----------|
| Sentence length | Max 25 words. One idea per sentence. |
| Paragraph length | 3–5 sentences. One concept per paragraph. |
| Reading level | Grade 8–10. Write for a college graduate, not a professor. |
| Tone | Direct, helpful, authoritative. "You" language. Active voice. |
| Voice | Second person ("you"). Imperative for instructions ("Enter your revenue..."). |

### Heading Rules

| Level | Format | Case |
|-------|--------|------|
| H1 | Only one per page | Title Case |
| H2 | Section headers | Title Case |
| H3 | Sub-sections within H2 | Sentence case |

### Formatting Conventions

- **Bold**: First mention of the target metric per section. Key numbers or terms. Not for emphasis.
- *Italic*: Introducing new terms only ("The *churn rate* measures..."). Not for emphasis.
- Bullet lists: 2–5 items. Never single-item lists.
- Numbered lists: Sequential steps only.
- Tables: For benchmarks or comparisons. Always have a header row. Minimum 3 rows of data.
- Calculator CTA format: `Use our free [Calculator Name] to calculate your [metric] instantly. → /calculator/[slug]`
- Pro Tip format: `Pro Tip: [1–2 sentence actionable insight]`

### Examples

Every article must include at least one real-world example. Follow this format:

> **Example:** [Company type] with [metric value A] and [metric value B] has [result]. This means [what it means in plain language].

### CTA Style

Every article must have one primary calculator CTA. Format:

> **Try it yourself:** Use our free **[Calculator Name]** to calculate your [metric]. [One sentence what they'll get.]

---

## 3. SEO Rules

### Meta Title Formula

| Article Type | Formula |
|-------------|---------|
| Supporting | `[Primary Keyword]: [Secondary Benefit]` (50–60 chars) |
| Comparison | `[Topic A] vs [Topic B]: Which Is Better?` (50–60 chars) |
| FAQ | `[Topic] FAQ: [Number] Common Questions Answered` (50–60 chars) |

The `SEO` component appends ` | Calcio` automatically. Do not include it in the title field.

### Meta Description Formula

One paragraph, 120–155 characters. Must contain primary keyword + secondary keyword + a value promise.

### Heading Hierarchy

```
H1: Primary keyword
  Section 1: Quick Answer Box (no H2 — inline only)
  H2: What Is [Topic]?
  H2: How to Calculate [Topic]
  H2: [Topic] Benchmarks
  H2: Common Mistakes
  H2: Tips to Improve
  H2: FAQs
```

### Schema Markup

Every article includes `articleSchema(post)` and `faqSchema(post.faq)` via the `SEO` component. No manual schema editing needed. Just ensure `post.faq` has 5–7 entries.

### URL Structure

`/blog/[slug]` — slug is `kebab-case`, max 60 characters, no stop words.

### Internal Link Density

Every article must contain these internal links:

| Link Type | Required Count | Target |
|-----------|---------------|--------|
| Home link (auto via breadcrumb) | 1 | `/` |
| Blog category link | 1 | `/blog` |
| Primary calculator | 1 | `/calculator/[slug]` |
| Secondary calculators | 1–2 | `/calculator/[slug]` |
| Related blog articles | 2–3 | `/blog/[slug]` |

### Anchor Text Rules

- Calculator links: Use calculator title or "our [metric] calculator"
- Blog links: Use article title or descriptive phrase
- Never use "click here" or "read more"
- Vary anchor text — do not use the target keyword for every link

---

## 4. Quality Checklist

Before any article is marked complete, every item must be checked:

- [ ] Grammar: No spelling or grammar errors
- [ ] Originality: No copied content. Paraphrase all sourced material.
- [ ] Helpful content: Article fully satisfies search intent of primary keyword
- [ ] Primary calculator linked in body text
- [ ] Secondary calculators linked (1–2)
- [ ] Related blog articles linked (2–3)
- [ ] Blog category link present
- [ ] `faq` array has 5–7 `{question, answer}` objects
- [ ] `articleSchema(post)` and `faqSchema(post.faq)` are passed to `<SEO>`
- [ ] Paragraphs ≤ 5 sentences each
- [ ] Calculator CTA present
- [ ] Conclusion present
- [ ] `published: true`
- [ ] `wordCount` matches actual word count
- [ ] `readingTime` = wordCount / 200 (rounded up)
- [ ] Build passes (`npm run build` succeeds)

---

## 5. Internal Link Rules

### Mandatory Links

```
Section 4: "Use our free [Calculator Name]" → /calculator/[primary-slug]
Section 9: Related Calculators list → /calculator/[slug] (2–4 links)
Section 10: Related Guides list → /blog/[slug] (2–3 links)
```

### Link Placement Strategy

- Calculator links should be contextual within the body text. Never forced.
- Blog links should reference specific claims or concepts from the linked article.
- Vary anchor text naturally.

---

## 6. EEAT Rules

### Experience
- Every article must include a "real-world example" with specific numbers
- Reference practical use cases, not theoretical ones

### Expertise
- All formulas must be verified against authoritative sources
- Definitions must match industry standards
- Benchmarks must cite a source or be clearly labeled as estimates

### Authoritativeness
- Each article has an author ("Navneet V" as default)
- Industry benchmarks should reference credible sources when available
- Reference authoritative tools and calculators where appropriate

### Trustworthiness
- No unsupported claims. Every "good" or "bad" must reference a benchmark.
- Updated dates must be accurate. Change `updatedDate` when content is revised.

---

## 7. Publishing Workflow

For every article, follow this sequence:

1. Research the keyword and search intent
2. Write the article using the template
3. Review for quality and originality
4. Add to `src/data/blogs.js` in the `realArticles` array
5. Update the relevant calculator page(s) with a link to the new guide
6. Submit the article URL in Google Search Console
7. Record in tracking sheet (publish date, slug, impressions, clicks, avg position)
8. After 7–14 days, review Search Console data
9. Improve the article if it gets impressions but few clicks

---

## 8. Month 1 Article Specifications

All articles belong to the **Startup Metrics** cluster (`category: "startup-metrics"`).

| # | Type | Slug | Est. Words | Primary Keyword |
|---|------|------|-----------|-----------------|
| C3 | Supporting | saas-benchmarks-2026 | 2,500 | saas benchmarks 2026 |
| C4 | Supporting | startup-burn-rate-guide | 2,000 | startup burn rate |
| C6 | Supporting | monthly-recurring-revenue-guide | 2,000 | monthly recurring revenue |
| C5 | Comparison | cac-payback-vs-ltv-cac | 1,800 | cac payback period |
| C7 | Supporting | saas-quick-ratio-guide | 2,000 | saas quick ratio |
| C8 | Supporting | saas-unit-economics-guide | 2,200 | saas unit economics |
| C2 | Expand | customer-acquisition-cost-guide | →2,500 | what is cac |
| C1 | Pillar | saas-metrics-complete-guide | 4,500 | saas metrics guide |
| C9 | FAQ | saas-metrics-faq | 3,000 | saas metrics questions |

Default values: `author: "Navneet V"`, `category: "startup-metrics"`, `categoryTitle: "Startup Metrics"`.
