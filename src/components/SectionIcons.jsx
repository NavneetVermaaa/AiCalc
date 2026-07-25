const className = "inline-block h-5 w-5 shrink-0";

export function ApiIcon() {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-label="API" role="img">
      <rect x="1" y="1" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 7l-3 3 3 3M13 7l3 3-3 3M11 5l-2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-label="Google Search" role="img">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function CacheIcon() {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-label="Context caching" role="img">
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 7h16" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 3v14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
      <path d="M13 3v14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
    </svg>
  );
}

export function WarningIcon() {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-label="Warning" role="img">
      <path d="M10 2L1 18h18L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="15" r="0.75" fill="currentColor"/>
    </svg>
  );
}

export function ChecklistIcon() {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-label="Checklist" role="img">
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CalculatorIcon() {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-label="Calculator" role="img">
      <rect x="2" y="1" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 9h2M9 9h2M13 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 12h2M9 12h2M13 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 15h2M9 15h2M13 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function LightningIcon() {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-label="Performance" role="img">
      <path d="M9 1L3 11h6l-1 8 7-11H9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

export const ICON_MAP = {
  api: ApiIcon,
  search: SearchIcon,
  cache: CacheIcon,
  warning: WarningIcon,
  checklist: ChecklistIcon,
  calculator: CalculatorIcon,
  lightning: LightningIcon,
};
