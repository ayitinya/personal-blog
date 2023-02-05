import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ayitinya.me",
  integrations: [
    vue(),
    tailwind(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    sitemap({
      changefreq: 'weekly',
      lastMod: new Date(),
    }),
  ],
});
