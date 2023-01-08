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
    <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
