import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.crowngaming.it",
  integrations: [mdx(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: cloudflare(),
});