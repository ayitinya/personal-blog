<script setup lang="ts"></script>

<template>
    <header>
        <nav class="flex-row justify-between flex py-2">
            <NuxtLink to="https://ayitinya.me" :external="true">
                <NuxtImg  src="/images/logo.png" format="webp" quality="80" height="48" width="48" preload class="h-12 dark:invert" alt="logo" />
            </NuxtLink>
            <ul class="flex items-center">
                <li class="mx-2">
                    <NuxtLink class="hover:underline underline-offset-8 transition-all duration-500" to="/">Home</NuxtLink>
                </li>
                <li class="px-3">
                    <NuxtLink class="hover:underline underline-offset-8 transition-all duration-500" to="/articles/">Articles</NuxtLink>
                </li>
                <li class="px-3">
                    <NuxtLink class="hover:underline underline-offset-8 transition-all duration-500" to="https://ayitinya.me" :external="true">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>