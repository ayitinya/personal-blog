// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxt/image-edge",
  ],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dnha19v3n/image/upload/",
    },
  },
  runtimeConfig: {
    public: {
      'ENV': process.env.VERCEL_ENV || process.env.NODE_ENV || 'development',
      'G_TAG_ID': process.env.G_TAG_ID,
    }
  }
});
