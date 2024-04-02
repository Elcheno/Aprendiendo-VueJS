import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSessionStore = defineStore('session', () => {
    const session = ref<any>(null);
    const setSession = (value: any) => {
        session.value = value;
        window.document.cookie = `session=${JSON.stringify(value)}`
    };
    function signOut() {
        setSession(null);
        window.document.cookie = `session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.reload();
    }
    function loadSession() {
        const cookie = window.document.cookie;        
        if (cookie) {
            const session = JSON.parse(cookie.split('=')[1]);
            setSession(session);
        }  
    }

    return { session, setSession, signOut, loadSession };
});