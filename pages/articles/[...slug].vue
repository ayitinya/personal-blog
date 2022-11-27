<template>
    <main class="w-full px-5 py-10 md:px-10 lg:px-24 ">
        <ContentDoc>
            <template v-slot="{ doc }">
                <img v-if="doc.image" :src="doc.image" :alt="doc.alt" class="w-full pb-10" />
                <article class="mx-auto prose prose-stone md:prose-lg lg:prose-xl dark:prose-invert">
                    <span>{{doc.date}}</span>
                    <h1>{{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                </article>
            </template>
            <template #empty>
                <h1>Document is empty</h1>
            </template>
        </ContentDoc>
    </main>
</template>