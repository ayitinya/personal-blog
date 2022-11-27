<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
    url: string
    date: string
}>()
</script>

<template>
    <!-- inspired by https://charliejoseph.com/blog -->
    <article class="scroll-mt-10 md:flex">
        <p class="pl-7 text-sm leading-6 md:w-1/4 md:pl-0 md:pr-12 md:text-right">
            {{ props.date }}
        </p>
        <div class="relative pt-2 pl-7 pb-16 md:w-3/4 md:pt-0 md:pl-12">
            <div class="absolute bottom-0 left-0 -top-3 w-px bg-gray-200 md:top-2.5"></div>
            <div
                class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-gray-400 md:top-[0.4375rem]">
            </div>
            <NuxtLink :to="props.url">
                <div class="prose dark:prose-invert">
                    <h2>{{ props.title }}</h2>
                    <p>{{ props.description }}</p>
                </div>
            </NuxtLink>
        </div>
    </article>
</template>

<style scoped lang="scss">

</style>