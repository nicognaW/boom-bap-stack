import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    watch: {
      ignored: [],
    },
  },
  plugins: [remix({ unstable_ssr: false }), tsconfigPaths()],
});
