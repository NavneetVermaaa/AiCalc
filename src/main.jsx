import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const CategoryPage = lazy(() => import("./pages/CategoryPage.jsx"));
const CalculatorPage = lazy(() => import("./pages/CalculatorPage.jsx"));
const BlogListPage = lazy(() => import("./pages/BlogListPage.jsx"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage.jsx"));
const BlogCategoryPage = lazy(() => import("./pages/BlogCategoryPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-ink p-8 text-slate-200">Loading AI Calc Pro...</div>}>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path="calculators/:category" element={<CategoryPage />} />
              <Route path="calculator/:slug" element={<CalculatorPage />} />
              <Route path="blog" element={<BlogListPage />} />
              <Route path="blog/category/:category" element={<BlogCategoryPage />} />
              <Route path="blog/:slug" element={<BlogPostPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
