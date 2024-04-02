<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconDropdown } from '../icons';
import { ref } from 'vue';
import { updateUserState } from '@/services/data-public';
import { useUsersStore } from '@/stores/users';

const props = defineProps([
  'user'
])

const user = props.user;
const users = useUsersStore();

const updateStateUser = async () => {
    console.log(user);
    
    if (user.state === 'active') {
        const response = await updateUserState({ id: user.id, state: 'inactive' });
        console.log(response);
        users.users.userList.splice(users.users.userList.findIndex((u: any) => u.id === user.id), 1, response);
        users.rehidrate(); 
    } else {
        const response = await updateUserState({ id: user.id, state: 'active' });     
        console.log(response); 
        users.users.userList.splice(users.users.userList.findIndex((u: any) => u.id === user.id), 1, response);
        users.rehidrate();
    }
}
</script>

<template>

    <DropdownMenu>
        <DropdownMenuTrigger> <IconDropdown class="w-6 h-6" aria-label="Open menu" /> </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>{{  user.name  }}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="updateStateUser()">Update state</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

</template>