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

const props = defineProps([
  'list']);

const userList = ref(props.list);

const updateStateUser = async (user: any) => {
    if (user.value.state === 'active') {
        const response = await updateUserState({ id: user.value.id, state: 'inactive' });
        console.log(response);
    
    } else {
        const response = await updateUserState({ id: user.value.id, state: 'active' });
        console.log(response);

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