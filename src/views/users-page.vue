<script setup lang="ts">
    import UsersTable from '@/components/users/users-table.vue';
    import SpinnerComponent from '@/components/spinner-component.vue';
</script>

<template>
    <main class="flex flex-col px-4">
        <h1 class="text-2xl font-bold text-slate-700">Users</h1>

        <Suspense>

            <UsersTable />
            
            <template #fallback>
                <div class="flex justify-center items-center mt-40">
                    <SpinnerComponent />
                </div>
            </template>
        </Suspense>
    </main>
</template>