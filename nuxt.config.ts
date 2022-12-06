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
});
