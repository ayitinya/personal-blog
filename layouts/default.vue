<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex flex-col">
        <Navbar class="px-5 md:px-10 lg:px-24" />
        <main class="px-5 py-10 md:px-10 lg:px-24">
            <slot></slot>
        </main>

        <Footer class="mt-auto px-5 py-2 border-t dark:border-slate-800 md:px-10 lg:px-24" />
    </div>
</template>

<style scoped lang="scss">

</style>