<script setup lang="ts">
const {data: articles} = await useFetch('/api/articles')
</script>

<template>
    <div class="px-5 md:px-10 lg:px-24">

        <section class="flex gap-2 py-10">
            <div class="grow-0 md:shrink-0 md:basis-2/3">
                <h1 class="text-4xl font-bold">Hello, I'm Ayitinya</h1>
                <br>
                <p class="text-xl font-light">
                    I'm a software engineer and a web developer. I love to build things that are useful and solve
                    problems.
                    I also love to write about my experiences and share them with the world. I'm currently working on a
                    few
                    projects and I'm also learning new things everyday. I'm also a huge fan of open source and I love to
                    contribute to open source projects. Checkout my articles below and if you want to know more about
                    me,
                    checkout my about page.
                </p>
            </div>
            <div class="grow-0">
            </div>
        </section>

        <section class="py-10">
            <h2 class="text-2xl font-bold">Articles</h2>
            <br>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <template v-if="articles">
                    <BlogCard v-for="article in articles" :key="article.id" :title="article.title"
                        :description="article.description" :image="article.image" :url="`/articles/${article.id}`" :alt="article.alt" :date="article.date" />
                </template>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>

</style>