<script setup lang="ts">
</script>

<template>
    <div class="px-5 md:px-10 lg:px-24 ">

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
            <h2 class="text-2xl font-bold">Recent Articles</h2>
            <br>
            <div class="">
                <ContentList>
                    <template v-slot="{ list }">
                        <ArticleCard v-for="article in list" :key="article.id" :title="article.title"
                            :description="article.description" :url="article._path" :date="article.date" />
                    </template>
                    <template #not-found>
                        <p>No articles found.</p>
                    </template>
                </ContentList>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>

</style>