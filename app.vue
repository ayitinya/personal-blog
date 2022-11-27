<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
})
</script>

<template>
  <div class="min-h-screen dark:bg-black dark:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
