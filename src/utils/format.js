export const isINRUnit = (unit) =>
  unit === "\u20b9" || unit === "\u00e2\u201a\u00b9" || unit.startsWith("\u20b9/") || unit.startsWith("\u00e2\u201a\u00b9/");

export const isUSDUnit = (unit) => unit === "$" || unit.startsWith("$/");

export const getCompactScale = (number, isINR) => {
  const abs = Math.abs(number);
  const scales = isINR
    ? [
        { threshold: 1e6, divisor: 1e5, suffix: " L" },
        { threshold: 1e7, divisor: 1e7, suffix: " Cr" }
      ]
    : [
        { threshold: 1e5, divisor: 1e3, suffix: "K" },
        { threshold: 1e6, divisor: 1e6, suffix: "M" },
        { threshold: 1e9, divisor: 1e9, suffix: "B" },
        { threshold: 1e12, divisor: 1e12, suffix: "T" }
      ];
  const scale = [...scales].reverse().find((s) => abs >= s.threshold);
  if (!scale) return null;
  let scaled = number / scale.divisor;
  let suffix = scale.suffix;
  const next = scales[scales.indexOf(scale) + 1];
  if (next && scaled >= next.threshold / scale.divisor - 0.5) {
    scaled = number / next.divisor;
    suffix = next.suffix;
  }
  return {
    scaled,
    text: scaled.toLocaleString(isINR ? "en-IN" : undefined, { maximumFractionDigits: 2 }),
    suffix
  };
};

const formatExact = (number, unit) => {
  if (isINRUnit(unit)) return `\u20b9${number.toLocaleString("en-IN", { maximumFractionDigits: 2 })}${unit.slice(1).startsWith("/") ? unit.slice(1) : ""}`;
  if (isUSDUnit(unit)) return `$${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}${unit.slice(1).startsWith("/") ? unit.slice(1) : ""}`;
  if (unit === "%") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
  if (unit === "x") return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}x`;
  return `${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}${unit || ""}`;
};

export const formatValue = (value, unit) => {
  let number = Number.isFinite(value) ? value : 0;
  if (number < 0 && number > -0.005) number = 0;
  const exact = formatExact(number, unit);
  const inr = isINRUnit(unit);
  const scale = inr || isUSDUnit(unit) ? getCompactScale(number, inr) : null;
  if (!scale) return { display: exact, exact, compacted: false };
  const glyph = inr ? "\u20b9" : "$";
  const remainder = unit.slice(1).startsWith("/") ? unit.slice(1) : "";
  return {
    display: `${glyph}${scale.text}${scale.suffix}${remainder}`,
    exact,
    compacted: true
  };
};