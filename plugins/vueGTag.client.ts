import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (config.public.ENV !== "production") {
    return;
  }

  nuxtApp.vueApp.use(
    VueGtag,
    {
      property: {
        id: config.public.G_TAG_ID,
        params: {
          linker: {
            domains: ["ayitinya.me", "blog.ayitinya.me"],
          },
        },
      },
    },
    nuxtApp.$router
  );
});
