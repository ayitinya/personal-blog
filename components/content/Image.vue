<script setup lang="ts">
const props = defineProps<{ src: string, alt: string, caption?: string }>()
</script>

<template>
    <figure>
        <NuxtImg provider="cloudinary" :src="props.src" :alt="props.alt" />
        <figcaption v-if="props.caption" class="text-center">{{ props.caption }}</figcaption>
    </figure>
</template>