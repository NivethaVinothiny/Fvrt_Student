import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes asset paths relative, so the built site works from
// any sub-path (e.g. https://user.github.io/repo-name/) instead of showing
// a blank page because /assets/... could not be found.
export default defineConfig({
  plugins: [react()],
  base: "./",
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
  },
});
