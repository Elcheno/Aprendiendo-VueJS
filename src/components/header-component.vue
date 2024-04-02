<script setup lang="ts">
import NavBar from './nav-bar.vue';
import SignOutButtonComponent from './singout-button-component.vue';
</script>

<template>
    <h1 class="text-3xl font-bold text-slate-800">Aprendiendo VueJS 😁</h1>
    
    <div class="flex justify-between">
        <NavBar />
        <SignOutButtonComponent />
    </div>
</template>