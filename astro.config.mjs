import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

// https://astro.build/config

export default defineConfig({
  site: "https://blog.ayitinya.me",
  image: {
    service: squooshImageService(),
  },
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
