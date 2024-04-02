import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', () => {
    const users = ref<{ userList: any[], revalidate: boolean }>({
        revalidate: true,
        userList: []
    });

    const set = (value: any) => {
        users.value.userList = value;
        users.value.revalidate = false;
    };

    const add = (value: any) => {
        users.value.userList.push(value);
    };

    const rehidrate = () => {
        users.value.revalidate = true;
    };

    return { users, set, add, rehidrate };
});