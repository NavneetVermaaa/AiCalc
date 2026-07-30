import { ArrowDown } from "lucide-react";

const defaultSteps = [
  { question: "Need AI?", answer: null },
  { question: "Need best writing?", answer: "Claude" },
  { question: "Need Google Workspace?", answer: "Gemini" },
  { question: "Need broad ecosystem?", answer: "OpenAI" }
];

const answerColors = {
  "Claude": "text-amber border-amber/30 bg-amber/5",
  "Gemini": "text-sky border-sky/30 bg-sky/5",
  "OpenAI": "text-white border-white/20 bg-white/5"
};

function getAnswerStyle(provider) {
  return answerColors[provider] || "text-accent border-accent/30 bg-accent/5";
}

export default function DecisionTree({ title, steps }) {
  const items = steps || defaultSteps;
  return (
    <div className="my-8 rounded-xl border border-line bg-panel/60 p-6 sm:p-8">
      {title && <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</p>}
      <div className="flex flex-col items-center gap-1">
        {items.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="rounded-lg border border-line bg-panel px-5 py-3 text-center">
              {step.answer ? (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm text-slate-400">{step.question}</span>
                  <span className={`rounded-full px-3 py-1 text-sm font-bold ${getAnswerStyle(step.answer)}`}>
                    {step.answer}
                  </span>
                </div>
              ) : (
                <span className="text-sm font-medium text-white">{step.question}</span>
              )}
            </div>
            {i < items.length - 1 && <ArrowDown size={18} className="my-1 text-slate-500" />}
          </div>
        ))}
      </div>
    </div>
  );
}
