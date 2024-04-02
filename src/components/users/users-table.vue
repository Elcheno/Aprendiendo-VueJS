<script setup lang="ts">
import TableComponent from '@/components/users/table-component.vue';
import { fetchAllUsers } from '@/services/data-public';
import { useUsersStore } from '@/stores/users';

const users = useUsersStore();

const fetchData = async () => {
    const response = await fetchAllUsers({ page: 1 });
    if (response !== null) users.set(response); 
}

await fetchData();
</script>

<template>
    <TableComponent :list="users.users.userList"/>
</template>