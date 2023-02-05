import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.ayitinya.me",
  integrations: [
    tailwind(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
    }),
    mdx(),
  ],
});
