import VueDisqus from "vue-disqus";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (config.public.ENV !== "production") {
    return;
  }

  nuxtApp.vueApp.use(VueDisqus, {
    shortname: "ayitinyas-blog",
  });
});
