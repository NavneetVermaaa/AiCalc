import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeftRight, Copy, RotateCcw, Share2 } from "lucide-react";
import { currencies, getCurrencyFlag, popularCurrencyCodes } from "../data/currencies.js";

const API_BASE = "https://open.er-api.com/v6/latest";

const formatCurrency = (value) => {
  let safeValue = Number.isFinite(value) ? value : 0;
  if (safeValue < 0 && safeValue > -0.005) safeValue = 0;
  return safeValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const sanitizeAmount = (raw) => {
  if (typeof raw !== "string") return "";
  let cleaned = raw.replace(/[eE+-]/g, "").replace(/[^0-9.]/g, "");
  const dot = cleaned.indexOf(".");
  if (dot !== -1) cleaned = cleaned.slice(0, dot + 1) + cleaned.slice(dot + 1).replace(/\./g, "");
  return cleaned;
};

const formatTimestamp = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  try {
    return date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
      })
      .replace(",", " •") + " UTC";
  } catch {
    return dateStr;
  }
};

export default function CurrencyConverterTool({ calculator }) {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rates, setRates] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [announcement, setAnnouncement] = useState("");
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const fetchRates = useCallback(async (base, isManualRefresh = false) => {
    if (isManualRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/${base}`);
      if (!mountedRef.current) return;
      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const data = await res.json();
      if (!mountedRef.current) return;
      if (data.result !== "success") throw new Error("API returned unsuccessful result");
      setRates(data.rates);
      setLastUpdated(data.time_last_update_utc);
      if (isManualRefresh) {
        setAnnouncement("Exchange rates refreshed.");
        setTimeout(() => setAnnouncement(""), 2000);
      }
    } catch (err) {
      if (!mountedRef.current) return;
      setError(err.message || "Failed to fetch exchange rates");
    } finally {
      if (mountedRef.current) {
        setLoading(false);
        setRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchRates(fromCurrency);
  }, [fromCurrency, fetchRates]);

  const handleRefresh = useCallback(() => {
    fetchRates(fromCurrency, true);
  }, [fetchRates, fromCurrency]);

  const exchangeRate = useMemo(() => {
    if (!rates || !rates[toCurrency]) return null;
    return rates[toCurrency];
  }, [rates, toCurrency]);

  const reverseRate = useMemo(() => {
    if (exchangeRate === null || exchangeRate === 0) return null;
    return 1 / exchangeRate;
  }, [exchangeRate]);

  const numericAmount = useMemo(() => {
    const n = Number(amount);
    return Number.isFinite(n) && n >= 0 ? n : null;
  }, [amount]);

  const convertedAmount = useMemo(() => {
    if (numericAmount === null || exchangeRate === null) return null;
    return numericAmount * exchangeRate;
  }, [numericAmount, exchangeRate]);

  const isReady = numericAmount !== null && exchangeRate !== null;

  const exampleResult = useMemo(() => {
    return 100 * (rates?.["INR"] || 83.5);
  }, [rates]);

  const sortedCurrencies = useMemo(() => {
    const entries = Object.entries(currencies);
    const popular = [];
    const rest = [];
    const popularSet = new Set(popularCurrencyCodes);
    for (const [code, info] of entries) {
      if (popularSet.has(code)) {
        popular.push({ code, ...info });
      } else {
        rest.push({ code, ...info });
      }
    }
    popular.sort((a, b) => popularCurrencyCodes.indexOf(a.code) - popularCurrencyCodes.indexOf(b.code));
    rest.sort((a, b) => a.name.localeCompare(b.name));
    return { popular, rest };
  }, []);

  const handleFromChange = (value) => {
    if (value === toCurrency) {
      setToCurrency(fromCurrency);
    }
    setFromCurrency(value);
  };

  const handleToChange = (value) => {
    if (value === fromCurrency) {
      setFromCurrency(toCurrency);
    }
    setToCurrency(value);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAnnouncement(`Swapped currencies.`);
    setTimeout(() => setAnnouncement(""), 2000);
  };

  const handleReset = () => {
    setAmount("");
    setFromCurrency("USD");
    setToCurrency("INR");
    setError(null);
    setCopied(false);
    setShared(false);
    setAnnouncement("Currency converter inputs cleared.");
    setTimeout(() => setAnnouncement(""), 2000);
  };

  const handleCopy = async () => {
    if (!isReady) return;
    const text = `${formatCurrency(numericAmount)} ${fromCurrency} = ${formatCurrency(convertedAmount)} ${toCurrency} (rate: 1 ${fromCurrency} = ${formatCurrency(exchangeRate)} ${toCurrency})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setAnnouncement("Conversion result copied to clipboard.");
      setTimeout(() => { setCopied(false); setAnnouncement(""); }, 2000);
    } catch {
      setAnnouncement("Result could not be copied.");
      setTimeout(() => setAnnouncement(""), 2000);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Currency Converter", text: `${formatCurrency(numericAmount)} ${fromCurrency} = ${formatCurrency(convertedAmount)} ${toCurrency}`, url });
        setShared(true);
        setAnnouncement("Result shared.");
        setTimeout(() => { setShared(false); setAnnouncement(""); }, 2000);
      } catch {
        setAnnouncement("Share canceled.");
        setTimeout(() => setAnnouncement(""), 2000);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setAnnouncement("Calculator link copied to clipboard.");
        setTimeout(() => { setShared(false); setAnnouncement(""); }, 2000);
      } catch {
        setAnnouncement("Calculator link could not be copied.");
        setTimeout(() => setAnnouncement(""), 2000);
      }
    }
  };

  const renderCurrencyOptions = (selected) => (
    <>
      <optgroup label="Popular currencies">
        {sortedCurrencies.popular.map((c) => (
          <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
        ))}
      </optgroup>
      <optgroup label="All currencies">
        {sortedCurrencies.rest.map((c) => (
          <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
        ))}
      </optgroup>
    </>
  );

  const Flag = ({ code }) => {
    const flag = getCurrencyFlag(code);
    if (!flag) return null;
    return <span className="mr-1.5" aria-hidden="true">{flag}</span>;
  };

  const formattedRate = exchangeRate !== null ? formatCurrency(exchangeRate) : "—";
  const formattedReverse = reverseRate !== null ? formatCurrency(reverseRate) : "—";
  const formattedResult = convertedAmount !== null ? formatCurrency(convertedAmount) : "—";
  const fromFlag = getCurrencyFlag(fromCurrency);
  const toFlag = getCurrencyFlag(toCurrency);

  return (
    <section className="container-page grid gap-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <div className="panel p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black text-white">Currency Converter</h2>
          <button onClick={handleReset} className="button-secondary gap-2" aria-label="Reset all fields">
            <RotateCcw size={14} /> Reset
          </button>
        </div>
        <div className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fromCurrency" className="grid gap-2 text-sm font-semibold text-slate-200">
                <span>From <Flag code={fromCurrency} /></span>
              </label>
              <select
                id="fromCurrency"
                value={fromCurrency}
                onChange={(e) => handleFromChange(e.target.value)}
                className="min-h-12 w-full rounded-md border border-line bg-ink px-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              >
                {renderCurrencyOptions(fromCurrency)}
              </select>
            </div>
            <div>
              <label htmlFor="amount" className="grid gap-2 text-sm font-semibold text-slate-200">Amount</label>
              <input
                id="amount"
                className="min-h-12 w-full rounded-md border border-line bg-ink px-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                type="number"
                inputMode="decimal"
                min="0"
                value={amount}
                placeholder="100"
                onKeyDown={(event) => {
                  if (event.key === "-" || event.key === "+" || event.key === "e" || event.key === "E") {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setAmount(sanitizeAmount(e.target.value))}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={handleSwap} className="button-secondary gap-2" aria-label="Swap currencies">
              <ArrowLeftRight size={16} /> Swap
            </button>
          </div>
          <div>
            <label htmlFor="toCurrency" className="grid gap-2 text-sm font-semibold text-slate-200">
              <span>To <Flag code={toCurrency} /></span>
            </label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => handleToChange(e.target.value)}
              className="min-h-12 w-full rounded-md border border-line bg-ink px-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
            >
              {renderCurrencyOptions(toCurrency)}
            </select>
          </div>
        </div>
      </div>
      <aside className="panel flex flex-col justify-between p-6">
        {loading && !refreshing && (
          <div className="animate-pulse space-y-4">
            <div className="h-4 w-24 rounded bg-slate-700" />
            <div className="h-12 w-48 rounded bg-slate-700" />
            <div className="h-4 w-36 rounded bg-slate-700" />
          </div>
        )}
        {error && (
          <div className="space-y-4">
            <p className="text-red-400">Could not load exchange rates.</p>
            <p className="text-sm text-slate-400">{error}</p>
            <button onClick={() => fetchRates(fromCurrency)} className="button-secondary gap-2">
              <RotateCcw size={14} /> Retry
            </button>
          </div>
        )}
        {!loading && !error && (
          <>
            {!isReady && exchangeRate !== null && (
              <p className="mb-4 rounded-md border border-line bg-ink px-4 py-2.5 text-sm text-slate-300">
                Enter an amount to see the live conversion.
              </p>
            )}
            <div className="result-box min-w-0">
              <p className="eyebrow">Converted Amount</p>
              <p className={`mt-4 result-value font-black ${isReady ? "text-white" : "text-slate-400"}`} aria-live="polite">
                <span className="sr-only">{isReady ? "Calculated result: " : "Example result: "}</span>
                {formattedResult} {toFlag && <span aria-hidden="true">{toFlag}</span>} {toCurrency}
              </p>
            </div>
            {exchangeRate !== null && (
              <div className="mt-4 space-y-1">
                <p className="text-sm text-slate-400">
                  1 {fromFlag && <span aria-hidden="true">{fromFlag}</span>} {fromCurrency} = {formattedRate} {toFlag && <span aria-hidden="true">{toFlag}</span>} {toCurrency}
                </p>
                <p className="text-sm text-slate-400">
                  1 {toFlag && <span aria-hidden="true">{toFlag}</span>} {toCurrency} = {formattedReverse} {fromFlag && <span aria-hidden="true">{fromFlag}</span>} {fromCurrency}
                </p>
              </div>
            )}
            {lastUpdated && (
              <div className="mt-3 flex items-center gap-2">
                <p className="text-xs text-slate-500">
                  Updated: {formatTimestamp(lastUpdated)}
                </p>
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="inline-flex size-5 items-center justify-center rounded text-slate-500 transition hover:text-white disabled:pointer-events-none disabled:opacity-50"
                  aria-label="Refresh exchange rates"
                >
                  <RotateCcw size={12} className={refreshing ? "animate-spin" : ""} />
                </button>
              </div>
            )}
            <p className="mt-4 text-xs text-slate-500">
              Exchange rates provided by ExchangeRate API. Rates may differ from banks, payment providers, or Google.
            </p>
          </>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={handleCopy}
            disabled={!isReady}
            className="button-secondary gap-2 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Copy result to clipboard"
          >
            <Copy size={14} /> {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleShare}
            className="button-secondary gap-2"
            aria-label="Share calculator"
          >
            <Share2 size={14} /> {shared ? "Link copied!" : "Share"}
          </button>
        </div>
        <p className="mt-6 rounded-md border border-line bg-ink p-4 font-mono text-sm leading-6 text-slate-300">
          Converted amount = amount × exchange rate
        </p>
      </aside>
    </section>
  );
}
