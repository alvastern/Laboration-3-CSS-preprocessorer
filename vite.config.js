import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  css: {
    devSourcemap: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sass: resolve(__dirname, "src/html/sass.html")
      }
    }
  }
});