<script setup lang="ts">
import TableComponent from '@/components/users/table-component.vue';
import { fetchAllUsers } from '@/services/data-public';
import { useUsersStore } from '@/stores/users';
import { ref, watch } from 'vue';
import refreshButton from '../refresh-button.vue';

const usersStore = useUsersStore();
const reload = ref(usersStore.reload);
const userList = ref(usersStore.usersSignal);

const fetchData = async () => {
    const response = await fetchAllUsers({ page: 1 });    
    if (response !== null) usersStore.set(response); 
}

await fetchData();

watch(reload.value, () => {
    fetchData(); 
});

</script>

<template>
    <TableComponent :list="userList"/>
    <div class="flex justify-center mt-12">
        <refreshButton />
    </div>
</template>