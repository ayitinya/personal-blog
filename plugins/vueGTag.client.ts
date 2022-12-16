import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  if (config.public.ENV !== 'production') {
    return;
  }

  console.log('G_TAG_ID', config.public.G_TAG_ID);

  nuxtApp.vueApp.use(
    VueGtag,
    {
      property: {
        id: config.public.G_TAG_ID,
        params: {
          linker: {
              domains: ['ayitinya.me', 'blog.ayitinya.me'],
          }
      }
      },
    },
    nuxtApp.$router
  );
});
