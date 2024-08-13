import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import workerPlugin from "@chialab/esbuild-plugin-worker";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [react(), mkcert()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [workerPlugin()],
    },
  },
  build: {
    outDir: "docs",
  },
  base: "./",
});
