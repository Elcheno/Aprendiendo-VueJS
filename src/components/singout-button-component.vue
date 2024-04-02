<script setup lang="ts">
import { IconSignOut } from './icons';
import { useSessionStore } from '@/stores/session';

const session = useSessionStore();

const handlerSignOut = () => {    
    session.signOut();
}

</script>

<template>
    <div class="h-16 mr-4">
        <button @click="handlerSignOut" class="flex items-center gap-2 text-sm font-medium bg-slate-400 text-slate-900 hover:bg-slate-500 h-12 rounded-xl transition-colors px-3 py-2">
            <IconSignOut class="w-6 h-6 text-slate-900"/>
            Sign Out
        </button>
    </div>
</template>