<script setup lang="ts"></script>

<template>
    <header>
        <nav class="flex-row justify-between flex py-2">
            <NuxtLink to="https://ayitinya.me" :external="true">
                <img src="~/assets/images/logo.png" class="h-12 dark:invert" alt="logo" />
            </NuxtLink>
            <ul class="flex items-center text-gray-400">
                <li class="mx-2">
                    <NuxtLink class="hover:text-black dark:hover:text-white transition-all duration-500" to="/">Home</NuxtLink>
                </li>
                <li class="px-3">
                    <NuxtLink class="hover:text-black dark:hover:text-white transition-all duration-500" to="/articles/">Articles</NuxtLink>
                </li>
                <li class="px-3">
                    <NuxtLink class="hover:text-black dark:hover:text-white transition-all duration-500" to="https://ayitinya.me" :external="true">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>