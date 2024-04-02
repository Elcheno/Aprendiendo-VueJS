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

const props = defineProps([
  'list']);

const userList = props.list;

console.log(userList);


</script>

<template>
  <Table>
    <TableCaption>A list of your users.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Email</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>State</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">
          INV001
        </TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>