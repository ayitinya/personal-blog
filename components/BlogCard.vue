<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
    image: string
    url: string
    alt: string
    date: string
}>()

const card = ref<HTMLDivElement | null>(null)

const mouseMove = (e: MouseEvent) => {
    if (card.value) {
        const rect = card.value.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.value.style.setProperty("--mouse-x", `${x}px`);
        card.value.style.setProperty("--mouse-y", `${y}px`);
    }
}
</script>

<template>
    <NuxtLink :to="props.url">
        <div ref="card" @mousemove="mouseMove"
            class=" relative shadow-md backdrop-blur-2xl shadow-slate-700/10 h-96 bg-slate-800/20 flex flex-col  rounded-b-md  border border-t-0 border-gray-500/25">
            <div class="flex-grow h-52">
                <img :src="props.image" :alt="props.alt" class="w-full h-full object-cover object-center" />
            </div>
            <div class="flex-grow py-2  px-1 h-full">
                <h3 class="text-xl font-bold">{{ props.title }}</h3>
                <span class="text-sm font-thin">{{props.date}}</span>
                <p class="text-lg font-light">{{ props.description }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<style  lang="scss">

</style>