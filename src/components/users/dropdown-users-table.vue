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
import { ref, watchEffect } from 'vue';
import { updateUserState } from '@/services/data-public';
import { useUsersStore } from '@/stores/users';

const props = defineProps([
  'user'
])

let user = props.user;
const users = useUsersStore();

watchEffect( async () => {
    user = props.user;
});

const updateStateUser = () => { 
    if (user.state === 'active') {        
        updateUserState({ id: user.id, state: 'inactive' }).then((res: any) => {
            const result = users.usersSignal().map((u: any) => u.id === res.id ? res : u); 
            users.set(result);
            users.rehidrate();
        });
    } else {
        updateUserState({ id: user.id, state: 'active' }).then(( res: any) => {
            const result = users.usersSignal().map((u: any) => u.id === res.id ? res : u); 
            users.set(result);
            users.rehidrate();
        });

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