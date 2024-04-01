<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { IconHome, IconUsers, IconAbout } from './icons';

const links = ref([
    {
        title: 'Home',
        path: '/',
        icon: IconHome
    }, 
    {
        title: 'Users',
        path: '/users',
        icon: IconUsers
    },
    {
        title: 'About',
        path: '/about',
        icon: IconAbout
    }
]);
</script>

<template>
    <div class="flex gap-1 h-16 px-2 mt-2">
        <div v-for="link in links" :key="link.title" class="h-min">
            <RouterLink :to="`${link.path}`" class="flex items-center gap-2 text-slate-800 rounded-lg px-3 py-2 transition-colors">
                <component :is="link.icon" class="h-6 w-6" />
                {{ link.title }}
            </RouterLink>
        </div>
    </div>
</template>

<style>
    .router-link-active {
        background-color: rgb(148 163 184);
    }
</style>