<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: "Ayitinya's Blog",
  meta: [
    {
      name: 'description',
      content: 'Ayitinya is a software engineer who loves to write about software development, programming, and technology.'
    },
    {
      name: 'theme-color',
      media: '(prefers-color-scheme: dark)',
      content: '#000000'
    },
    {
      name: 'theme-color',
      media: '(prefers-color-scheme: light)',
      content: '#ffffff'
    },
  ],
})
</script>

<template>
  <div class="min-h-screen dark:bg-black dark:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;1,200;1,400;1,500&display=swap');

* {
  font-family: 'Spectral', serif;
}
</style>
