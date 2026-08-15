import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";

// Inline the app stylesheet into <head> at build time so the browser paints without a
// render-blocking CSS round-trip (LCP/FCP win on slow networks). The .css asset stays in
// dist/assets (the gz/br twins still ship) but pages no longer link it; every prerendered
// page inherits the inline <style> from the shell index.html.
function inlineCss() {
  return {
    name: "calciocalc-inline-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const cssAsset = Object.values(ctx.bundle || {}).find(
          (asset) => asset.type === "asset" && asset.fileName.startsWith("assets/") && asset.fileName.endsWith(".css")
        );
        if (!cssAsset || typeof cssAsset.source !== "string") return html;
        const localLink = /<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>\s*/;
        if (!localLink.test(html)) return html;
        return html.replace(localLink, `<style>\n${cssAsset.source}\n</style>\n`);
      }
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    inlineCss(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginalAssets: false,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginalAssets: false,
    }),
  ],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            // Consolidate the small shared UI chunks used across nearly every route into one
            // request instead of 5+ (component: minified size 1-7 kB each).
            if (/src[\\/](?:components|utils)[\\/](?:SEO|schema|Breadcrumbs|CardLink|AuthorBlock)\.(?:jsx|js)$/.test(id)) return "ui";
            return undefined;
          }
          if (id.includes("react-helmet-async")) return "seo";
          return "vendor";
        },
      },
    },
  },
});