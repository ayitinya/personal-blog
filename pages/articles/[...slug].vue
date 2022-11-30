<script setup lang="ts">
const progressIndicator = ref<HTMLElement | null>(null)


onMounted(() => {
    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY
        const pageHeight = document.body.scrollHeight - window.innerHeight
        const progress = (scrollPosition / pageHeight) * 100

        if (progressIndicator.value) {
            progressIndicator.value.style.width = `${progress}%`
        }
    })
})

</script>

<template>
        <ContentDoc>
            <template v-slot="{ doc }">
                <ClientOnly>
                    <Teleport to="body">
                        <div id="progress-indicator" ref="progressIndicator" class="h-1 rounded-r fixed top-0 bg-black dark:bg-blue-500"></div>
                    </Teleport>
                </ClientOnly>
                <img v-if="doc.image" :src="doc.image" :alt="doc.alt" class="w-full pb-10 max-h-[450px] object-cover object-center" />
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