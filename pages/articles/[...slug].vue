<template>
    <ContentDoc>
        <template v-slot="{ doc }">
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