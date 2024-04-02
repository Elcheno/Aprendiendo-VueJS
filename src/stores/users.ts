import { ref } from 'vue';
import { defineStore } from 'pinia';
import { signal } from '@/lib/signal';

export const useUsersStore = defineStore('users', () => {
    const usersSignal = signal({ userList: [] });

    const revalidate = signal(true);

    const set = (value: any) => {
        usersSignal.set(value);
        revalidate.set(false);
    };

    const add = (value: any) => {
        usersSignal.set((state: any) => {
            state.userList.push(value);
        })
    };

    const rehidrate = () => {
        revalidate.set(true);
    };

    return { usersSignal, set, add, rehidrate, revalidate };
});