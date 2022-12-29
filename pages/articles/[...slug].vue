<script setup lang="ts">
const progressIndicator = ref<HTMLElement | null>(null)

onMounted(() => {
    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY
        const pageHeight = document.body.scrollHeight - window.innerHeight

        if (progressIndicator.value) {
            progressIndicator.value.style.transform = `scaleX(${scrollPosition / pageHeight})`
        }
    })
})

</script>

<template>
    <ContentDoc>
        <template v-slot="{ doc }">
            <ClientOnly>
                <Teleport to="body">
                    <div id="progress-indicator" ref="progressIndicator"
                        class="h-1 rounded-r fixed top-0 left-0 right-0 origin-left bg-black dark:bg-blue-500"></div>
                </Teleport>
            </ClientOnly>
            <NuxtImg v-if="doc.providerUrl" provider="cloudinary" format="webp" quality="70" :src="doc.providerUrl"
                class="w-full pb-10 max-h-[450px] object-cover object-center" />
            <NuxtImg v-else-if="doc.image" :src="doc.image" :alt="doc.alt"
                class="w-full pb-10 max-h-[450px] object-cover object-center" />
            <article class="mx-auto prose prose-stone md:prose-lg lg:prose-xl dark:prose-invert">
                <span>{{ doc.date }}</span>
                <h1>{{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
            </article>
        </template>
        <template #empty>
            <h1>Document is empty</h1>
        </template>
    </ContentDoc>
</template>

<style scoped lang="scss">

</style>