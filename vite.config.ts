import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import basicSsl from "@vitejs/plugin-basic-ssl";
import refresh from "@vitejs/plugin-react-refresh";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import https from "https";
import path from "path";
// import { dependencies } from "./package.json";
//
// function renderChunks(deps: Record<string, string>) {
//   const chunks: Record<string, string[]> = {};
//   Object.keys(deps).forEach((key) => {
//     if (["react", "react-router-dom", "react-dom"].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
//

const agent = new https.Agent({ keepAlive: true });
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    basicSsl(),
    refresh(),
    nodePolyfills({
      include: ["process"],
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
    }),
  ],
  define: {
    "process.env": {
      ...loadEnv("development", __dirname),
    },
  },
  optimizeDeps: {
    include: ["react-i18next", "react-router-dom"],
  },
  build: {
    sourcemap: true,
    outDir: "./build",
    rollupOptions: {
      cache: true,
      output: {
        manualChunks: {},
      },
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
});
