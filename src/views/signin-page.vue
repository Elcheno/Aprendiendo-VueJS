<script setup lang="ts">
    import { onMounted } from 'vue';
    import { signIn } from '@/services/data-public';
    import { useSessionStore } from '@/stores/session';
    import { useRouter } from 'vue-router';

    const session = useSessionStore();
    const router = useRouter();

    onMounted(async() => {
        setTimeout(async() => {
            const user = await signIn({ email: 'ruben@example.com', password: 'ruben' });
            session.setSession(user);
            router.push('/');
        }, 2000);
    });

</script>

<template>
    <main class="flex flex-col justify-center align-middle">
        <h1 class="text-2xl font-bold text-slate-700 mx-auto mt-20">Home - comming soon</h1>
    </main>
</template>