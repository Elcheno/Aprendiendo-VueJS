<script setup lang="ts">
import spinnerLoader from '@/components/spinner-component.vue';
import { useUsersStore } from '@/stores/users';
import { ref, watch } from 'vue';

const usersStore = useUsersStore();
const tableLoader = ref(null) as any;

watch(usersStore.reload, () => {
  tableLoader.value?.classList.toggle('hidden');
});

</script>

<template>
  <div ref="tableLoader" class="absolute hidden flex justify-center items-center bg-slate-600 bg-opacity-70 h-3/4 w-full">
    <spinnerLoader class="w-16 h-16"/>
  </div>
</template>