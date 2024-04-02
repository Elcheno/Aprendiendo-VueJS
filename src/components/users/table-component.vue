<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DropdownUsersTable from './dropdown-users-table.vue';
import { updateUserState } from '@/services/data-public';
import { ref } from 'vue';
import { useUsersStore } from '@/stores/users';

const props = defineProps(['list']);

const userList = ref(props.list);
const users = useUsersStore();

const updateStateUser = async (user: any) => {
    if (user.value.state === 'active') {
        await updateUserState({ id: user.value.id, state: 'inactive' });
        users.set(users.users.userList.map((u: any) => user.id === u.id ? { ...u, state: 'inactive'} : u))
        users.rehidrate(); 
    } else {
        await updateUserState({ id: user.value.id, state: 'active' });
        console.log(users.users.userList.map((u: any) => user.id === u.id ? { ...u, state: 'active'} : u));
        
        users.rehidrate();
    }
}

</script>

<template>
  <Table>
    <TableCaption>A list of your users.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Email</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>State</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in userList" :key="user.id">
        <TableCell>{{ user.email }}</TableCell>
        <TableCell>{{ user.name }}</TableCell>
        <TableCell>{{ user.state }}</TableCell>
        <TableCell> <DropdownUsersTable :user="user" /> </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>