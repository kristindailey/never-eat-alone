import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
    host: true,
    strictPort: true,
    allowedHosts: [
      "never-eat-alone-production.up.railway.app",
      ".railway.app"
    ],
  },
});