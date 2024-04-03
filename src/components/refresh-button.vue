<script setup lang="ts">
import { IconRefresh } from './icons';
import { useUsersStore } from '@/stores/users';

const usersStore = useUsersStore();

const refresh = () => {
  usersStore.reloadUsers();  
}
</script>

<template>
  <button @click="refresh()" class="flex items-center justify-center rounded-xl bg-slate-400 px-4 py-2 hover:bg-slate-500 transition-colors">
    <IconRefresh class="w-6 h-6 text-slate-900" />
  </button>
</template>