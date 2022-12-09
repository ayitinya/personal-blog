import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      property: {
        id: "G-P0QPNB7PEG",
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
