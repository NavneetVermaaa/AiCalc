export default function FAQ({ faqs }) {
  return (
    <section className="container-page py-10">
      <h2 className="text-2xl font-black text-white">FAQ</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <details key={faq.question} className="panel p-5">
            <summary className="cursor-pointer font-bold text-white">{faq.question}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
