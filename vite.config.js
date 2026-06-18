import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("react-helmet-async")) return "seo";
          if (id.includes("react") || id.includes("react-router-dom")) return "vendor";
          return "vendor";
        }
      }
    }
  }
});
