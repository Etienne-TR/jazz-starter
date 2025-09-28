import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    // Pour Firefox et les passkeys, décommenter ces lignes et utiliser HTTPS
    //https: true,
    //host: true,
  },
});
