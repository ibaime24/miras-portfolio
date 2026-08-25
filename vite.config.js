import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

const at = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: at("index.html"),
        work: at("work/index.html"),
        gtm: at("work/gtm/index.html"),
      },
    },
  },
});
