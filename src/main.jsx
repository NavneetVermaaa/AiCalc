import React, { Suspense, lazy, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";
import App from "./App.jsx";
import { calculators } from "./data/calculators.js";
import "./styles.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const Home = lazy(() => import("./pages/Home.jsx"));
const CategoryPage = lazy(() => import("./pages/CategoryPage.jsx"));
const CalculatorAiPage = lazy(() => import("./pages/CalculatorAiPage.jsx"));
const CalculatorStartupPage = lazy(() => import("./pages/CalculatorStartupPage.jsx"));
const CalculatorMarketingPage = lazy(() => import("./pages/CalculatorMarketingPage.jsx"));
const CalculatorFinancePage = lazy(() => import("./pages/CalculatorFinancePage.jsx"));
const BlogListPage = lazy(() => import("./pages/BlogListPage.jsx"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage.jsx"));
const BlogCategoryPage = lazy(() => import("./pages/BlogCategoryPage.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.jsx"));
const Disclaimer = lazy(() => import("./pages/Disclaimer.jsx"));
const EditorialPolicy = lazy(() => import("./pages/EditorialPolicy.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const CALCULATOR_PAGES = {
  ai: CalculatorAiPage,
  startup: CalculatorStartupPage,
  marketing: CalculatorMarketingPage,
  finance: CalculatorFinancePage
};

function CalculatorRouter() {
  const { slug } = useParams();
  const calculator = calculators.find((item) => item.slug === slug);
  const Page = calculator ? CALCULATOR_PAGES[calculator.category] || CalculatorFinancePage : CalculatorFinancePage;
  return <Page />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-ink p-8 text-slate-200">Loading Calcio...</div>}>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path="calculators/:category" element={<CategoryPage />} />
              <Route path="calculator/:slug" element={<CalculatorRouter />} />
              <Route path="blog" element={<BlogListPage />} />
              <Route path="blog/category/:category" element={<BlogCategoryPage />} />
              <Route path="blog/:slug" element={<BlogPostPage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="terms" element={<Terms />} />
              <Route path="cookie-policy" element={<CookiePolicy />} />
              <Route path="disclaimer" element={<Disclaimer />} />
              <Route path="editorial-policy" element={<EditorialPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
