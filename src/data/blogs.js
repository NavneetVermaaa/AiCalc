const topics = [
  "AI cost forecasting", "LLM pricing benchmarks", "agent workflow ROI", "startup runway planning",
  "burn rate reduction", "CAC payback", "LTV modeling", "break-even analysis", "ROAS optimization",
  "CPC benchmarks", "CPM planning", "conversion rate strategy", "AI budget governance", "founder metrics",
  "marketing finance"
];

export const blogCategories = [
  { id: "ai-finance", title: "AI Finance", description: "Pricing, ROI, and AI budget planning." },
  { id: "startup-metrics", title: "Startup Metrics", description: "Founder finance and SaaS operating metrics." },
  { id: "growth-analytics", title: "Growth Analytics", description: "Marketing math and paid growth strategy." }
];

export const posts = Array.from({ length: 100 }, (_, index) => {
  const topic = topics[index % topics.length];
  const category = blogCategories[index % blogCategories.length];
  const number = index + 1;
  return {
    slug: `${topic.replaceAll(" ", "-")}-guide-${number}`,
    title: `${topic.replace(/\b\w/g, (c) => c.toUpperCase())}: Practical Guide ${number}`,
    description: `A practical operating guide for ${topic}, with examples, formulas, and internal calculator links.`,
    category: category.id,
    categoryTitle: category.title,
    date: `2026-${String((index % 12) + 1).padStart(2, "0")}-${String((index % 27) + 1).padStart(2, "0")}`,
    author: "Calcio Editorial",
    readingTime: 5 + (index % 7),
    tags: [topic, category.title, "calculator"],
    faq: [
      { question: `Why does ${topic} matter?`, answer: `${topic} helps teams convert assumptions into decisions that can be reviewed and improved.` },
      { question: "Which calculator should I use with this guide?", answer: "Use the related calculator block below to model the numbers discussed in this article." }
    ],
    body: [
      `Teams use ${topic} to make faster planning decisions without waiting for a full finance model.`,
      "The strongest approach is to define the input, document the assumption, and revisit the metric after real operating data changes.",
      "Use this article as a placeholder content template for future editorial expansion, search intent mapping, and internal link planning."
    ]
  };
});

export const getPost = (slug) => posts.find((post) => post.slug === slug);
export const postsByCategory = (category) => posts.filter((post) => post.category === category);
export const relatedPosts = (post, limit = 3) => posts.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, limit);
