const claudeStarIcon = (
  <svg viewBox="0 0 48 48" className="h-9 w-9" fill="#d97757" aria-hidden="true">
    <g transform="translate(24,24)">
      <path d="M-3,-16 Q0,-22 3,-16 Q0,-4 0,0 Q0,-4 -3,-16Z" />
      <path d="M-3,-16 Q0,-22 3,-16 Q0,-4 0,0 Q0,-4 -3,-16Z" transform="rotate(60)" />
      <path d="M-3,-16 Q0,-22 3,-16 Q0,-4 0,0 Q0,-4 -3,-16Z" transform="rotate(120)" />
      <path d="M-3,-16 Q0,-22 3,-16 Q0,-4 0,0 Q0,-4 -3,-16Z" transform="rotate(180)" />
      <path d="M-3,-16 Q0,-22 3,-16 Q0,-4 0,0 Q0,-4 -3,-16Z" transform="rotate(240)" />
      <path d="M-3,-16 Q0,-22 3,-16 Q0,-4 0,0 Q0,-4 -3,-16Z" transform="rotate(300)" />
    </g>
  </svg>
);

const defaultCards = [
  {
    icon: (
      <svg viewBox="0 0 65 65" className="h-9 w-9" aria-hidden="true">
        <path d="M32.4473 0C33.1278 0 33.7197 0.464783 33.8857 1.125C34.3947 3.14441 35.0586 5.11414 35.8848 7.03027C38.0369 12.0299 40.99 16.406 44.7393 20.1553C48.4903 23.9045 52.8647 26.8576 57.8643 29.0098C59.7821 29.8359 61.7502 30.4998 63.7695 31.0088C64.4297 31.1748 64.8944 31.7668 64.8945 32.4473C64.8945 33.1278 64.4298 33.7198 63.7695 33.8857C61.7502 34.3947 59.7803 35.0586 57.8643 35.8848C52.8646 38.037 48.4885 40.99 44.7393 44.7393C40.99 48.4904 38.037 52.8646 35.8848 57.8643C35.0586 59.7822 34.3947 61.7502 33.8857 63.7695C33.7198 64.4298 33.1278 64.8945 32.4473 64.8945C31.7668 64.8944 31.1748 64.4297 31.0088 63.7695C30.4998 61.7502 29.8359 59.7803 29.0098 57.8643C26.8576 52.8647 23.9063 48.4885 20.1553 44.7393C16.4041 40.99 12.0299 38.0369 7.03027 35.8848C5.1123 35.0586 3.14441 34.3947 1.125 33.8857C0.464783 33.7197 0 33.1278 0 32.4473C8.67651e-05 31.7668 0.464826 31.1748 1.125 31.0088C3.14442 30.4998 5.11413 29.836 7.03027 29.0098C12.03 26.8575 16.406 23.9046 20.1553 20.1553C23.9046 16.406 26.8575 12.03 29.0098 7.03027C29.836 5.11229 30.4998 3.14442 31.0088 1.125C31.1748 0.464826 31.7668 8.67651e-05 32.4473 0Z" fill="url(#g-compare)"/>
        <defs>
          <linearGradient id="g-compare" x1="18.4474" y1="43.4202" x2="52.1528" y2="15.0035" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4893FC"/>
            <stop offset="0.27" stop-color="#4893FC"/>
            <stop offset="0.777" stop-color="#969DFF"/>
            <stop offset="1" stop-color="#BD99FE"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Gemini",
    cheaperFor: "High-volume workflows, Google-native teams, caching-heavy apps",
    pros: ["Strong Google ecosystem fit", "Flash efficiency for high-volume tasks", "Useful grounding and caching options"],
    cons: ["Some users may prefer OpenAI's product ecosystem or workflow style"]
  },
  {
    icon: (
      <svg viewBox="0 0 158.7128 157.296" className="h-9 w-9 fill-white" aria-hidden="true">
        <path d="M60.8734 57.2556v-14.9432c0-1.2586.4722-2.2029 1.5728-2.8314l30.0443-17.3023c4.0899-2.3593 8.9662-3.4599 13.9988-3.4599 18.8759 0 30.8307 14.6289 30.8307 30.2006 0 1.1007 0 2.3593-.158 3.6178l-31.1446-18.2467c-1.8872-1.1006-3.7754-1.1006-5.6629 0l-39.4812 22.9651ZM131.0276 115.4561v-35.7074c0-2.2028-.9446-3.7756-2.8318-4.8763l-39.481-22.9651 12.8982-7.3934c1.1007-.6285 2.0453-.6285 3.1458 0l30.0441 17.3024c8.6523 5.0341 14.4708 15.7296 14.4708 26.1107 0 11.9539-7.0769 22.965-18.2461 27.527v.0021ZM51.593 83.9964l-12.8982-7.5497c-1.1007-.6285-1.5728-1.5728-1.5728-2.8314v-34.6048c0-16.8303 12.8982-29.5722 30.3585-29.5722 6.607 0 12.7403 2.2029 17.9324 6.1349l-30.987 17.9324c-1.8871 1.1007-2.8314 2.6735-2.8314 4.8764v45.6159l-.0014-.0015ZM79.3562 100.0403l-18.4829-10.3811v-22.0209l18.4829-10.3811 18.4812 10.3811v22.0209l-18.4812 10.3811ZM91.2319 147.8591c-6.607 0-12.7403-2.2031-17.9324-6.1344l30.9866-17.9333c1.8872-1.1005 2.8318-2.6728 2.8318-4.8759v-45.616l13.0564 7.5498c1.1005.6285 1.5723 1.5728 1.5723 2.8314v34.6051c0 16.8297-13.0564 29.5723-30.5147 29.5723v.001ZM53.9522 112.7822l-30.0443-17.3024c-8.652-5.0343-14.471-15.7296-14.471-26.1107 0-12.1119 7.2356-22.9652 18.403-27.5272v35.8634c0 2.2028.9443 3.7756 2.8314 4.8763l39.3248 22.8068-12.8982 7.3938c-1.1007.6287-2.045.6287-3.1456 0ZM52.2229 138.5791c-17.7745 0-30.8306-13.3713-30.8306-29.8871 0-1.2585.1578-2.5169.3143-3.7754l30.987 17.9323c1.8871 1.1005 3.7757 1.1005 5.6628 0l39.4811-22.807v14.9435c0 1.2585-.4721 2.2021-1.5728 2.8308l-30.0443 17.3025c-4.0898 2.359-8.9662 3.4605-13.9989 3.4605h.0014ZM91.2319 157.296c19.0327 0 34.9188-13.5272 38.5383-31.4594 17.6164-4.562 28.9425-21.0779 28.9425-37.908 0-11.0112-4.719-21.7066-13.2133-29.4143.7867-3.3035 1.2595-6.607 1.2595-9.909 0-22.4929-18.2471-39.3247-39.3251-39.3247-4.2461 0-8.3363.6285-12.4262 2.045-7.0792-6.9213-16.8318-11.3254-27.5271-11.3254-19.0331 0-34.9191 13.5268-38.5384 31.4591C11.3255 36.0212 0 52.5373 0 69.3675c0 11.0112 4.7184 21.7066 13.2133 29.4143-.7867 3.3035-1.2595 6.607-1.2595 9.909 0 22.4929 18.2471 39.3247 39.3251 39.3247 4.2461 0 8.3363-.6285 12.4262-2.045 7.0792 6.9213 16.8318 11.3254 27.5271 11.3254Z"/>
      </svg>
    ),
    title: "OpenAI",
    cheaperFor: "Workflows that fit OpenAI's smaller models and routing patterns",
    pros: ["Strong ChatGPT familiarity", "Broad ecosystem and model range", "Clear model family structure"],
    cons: ["Not always the cheapest choice for repetitive or Google-native workloads"]
  }
];

export default function ComparisonCards({ title, cards }) {
  const items = cards || defaultCards;
  const gridCols = items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className="my-8">
      {title && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mint">{title}</p>}
      <div className={`grid gap-6 ${gridCols}`}>
        {items.map((card, i) => (
          <div key={i} className="rounded-xl border border-line bg-panel/60 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                {card.title === "Claude" ? claudeStarIcon : card.icon}
              </div>
              <span className="text-lg font-bold text-white">{card.title}</span>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Cheaper for</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{card.cheaperFor}</p>
              </div>
              {card.pros && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Pros</p>
                  <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-slate-300">
                    {card.pros.map((pro, j) => <li key={j}>{pro}</li>)}
                  </ul>
                </div>
              )}
              {card.cons && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Cons</p>
                  <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-slate-300">
                    {card.cons.map((con, j) => <li key={j}>{con}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
