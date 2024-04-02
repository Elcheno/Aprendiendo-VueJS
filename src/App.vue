<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header-component.vue';
import { useSessionStore } from '@/stores/session';
import { onMounted } from 'vue';

const session = useSessionStore();

onMounted(async() => {
  session.loadSession();
});

</script>

<template>
  <Header />

  <router-view />
  
</template>