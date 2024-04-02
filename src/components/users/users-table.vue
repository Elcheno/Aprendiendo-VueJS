<script setup lang="ts">
import TableComponent from '@/components/users/table-component.vue';
import { fetchAllUsers } from '@/services/data-public';
import { onMounted, ref } from 'vue';

const users = ref(null);

const response = await fetchAllUsers({ page: 1 });
if (response !== null) users.value = response;
console.log(users.value);

</script>

<template>
    <TableComponent :list="users"/>
</template>