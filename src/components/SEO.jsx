import { Helmet } from "react-helmet-async";
import { siteUrl } from "../data/internalLinks";
import { BRAND } from "../config/brand";

export default function SEO({ title, description, path = "/", type = "website", schema = [] }) {
  const canonical = `${siteUrl}${path}`;
  const fullTitle = title.includes(BRAND.name) ? title : `${title} | ${BRAND.name}`;
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const adsenseClient = import.meta.env.VITE_ADSENSE_CLIENT;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BRAND.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {gaId && <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />}
      {gaId && (
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
        </script>
      )}
      {adsenseClient && <script async crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`} />}
      {schema.filter(Boolean).map((item, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
