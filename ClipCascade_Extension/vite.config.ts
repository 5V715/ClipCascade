import { defineConfig } from "vite";

// Builds the service worker and the extension pages as ES modules.
// The content script cannot be an ES module, so it has its own build
// (vite.content.config.ts) that emits a single IIFE file.
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "chrome116",
    modulePreload: false,
    rollupOptions: {
      input: {
        background: "src/background/index.ts",
        popup: "popup.html",
        options: "options.html",
        offscreen: "offscreen.html",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
