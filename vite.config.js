import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import react from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/React_ElectionResults_Website/",
});
