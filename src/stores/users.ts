import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', () => {
    const users = ref<any>({
        userList: null,
        revalidate: false
    });

    const set = (value: any) => {
        users.value.userList = value;
    };

    const add = (value: any) => {
        users.value.push(value);
    };

    const rehidrate = () => {
        console.log(users);
        users.value.revalidate = true;
    };

    return { users, set, add, rehidrate };
});