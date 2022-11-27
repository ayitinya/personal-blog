<script setup lang="ts"></script>

<template>
    <header>
        <nav class="flex-row justify-between flex px-5 md:px-10 lg:px-24 py-2">
            <NuxtLink to="https://ayitinya.me" :external="true">
                <img src="~/assets/images/logo.png" class="h-12 dark:invert" alt="logo" />
            </NuxtLink>
            <ul class="flex items-center">
                <li class="mx-2">
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="px-3">
                    <NuxtLink to="/articles/">Articles</NuxtLink>
                </li>
                <li class="px-3">
                    <NuxtLink to="https://ayitinya.me" :external="true">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>