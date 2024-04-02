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
import { ref } from 'vue';

const props = defineProps(['list']);
const itemList = ref(props.list);
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
      <TableRow v-for="item in itemList()" :key="item.id">
        <TableCell>{{ item.email }}</TableCell>
        <TableCell>{{ item.name }}</TableCell>
        <TableCell>{{ item.state }}</TableCell>
        <TableCell> <DropdownUsersTable :user="item" /> </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>