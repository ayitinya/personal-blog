<template>
    <div class="flex flex-col items-center">
        <div class="prose dark:prose-invert ">
            <h1 class="text-center ">Articles</h1>
            <p class="text-center">All my articles</p>
        </div>
        <br>
        <div class="mx-auto py-10">
            <ContentList :query="{ path: '/articles', sort: { id: -1 } }">
                <template v-slot="{ list }">
                    <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <ArticleCard2 v-for="article in list" :key="article.id" :title="article.title"
                        :description="article.description" :url="article._path" :date="article.date" />
                    </ol>
                </template>
                <template #not-found>
                    <p>No articles found.</p>
                </template>
            </ContentList>
        </div>
    </div>
</template>