<script setup lang="ts">
import TableComponent from '@/components/users/table-component.vue';
import { fetchAllUsers } from '@/services/data-public';
import { watch } from 'vue';
import { useUsersStore } from '@/stores/users';

const users = useUsersStore();

const fetchData = async () => {
    console.log('fetching data');
    
    const response = await fetchAllUsers({ page: 1 });
    if (response !== null) users.set(response); 
}

console.log(users);

watch(users.users.revalidate, () => {
    fetchData();
});

await fetchData();
</script>

<template>
    <TableComponent :list="users.users.userList"/>
</template>