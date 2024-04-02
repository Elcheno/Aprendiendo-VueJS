<script setup lang="ts">
    import UsersTable from '@/components/users/users-table.vue';
</script>

<template>
    <main class="flex flex-col">
        <h1 class="text-2xl font-bold text-slate-700">Users</h1>

        <Suspense>

            <UsersTable />
            
            <template #fallback>
                <div class="h-16 w-16 animate-spin"></div>
            </template>
        </Suspense>
    </main>
</template>