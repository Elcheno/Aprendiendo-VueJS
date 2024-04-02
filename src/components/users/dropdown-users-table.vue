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

const user = ref(props.user);
const users = useUsersStore();

const updateStateUser = async () => {
    if (user.value.state === 'active') {
        const response = await updateUserState({ id: user.value.id, state: 'inactive' });
        if (response) users.rehidrate();

    } else {
        const response = await updateUserState({ id: user.value.id, state: 'active' });
        if (response) users.rehidrate();
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