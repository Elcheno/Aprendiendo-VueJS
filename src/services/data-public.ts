import axios from "axios";
import { useSessionStore } from '@/stores/session';

export async function fetchAllUsers({ page }: { page: number }) {
    const session = useSessionStore();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return await axios.get(`http://localhost:8200/user/page/${--page}`, { headers: { 'Authorization': `Bearer ${session.session?.token}` }}).then(res => res.data);
}

export async function signIn({ email, password }: { email: string, password: string }) {
    return await axios.post(`http://localhost:8200/auth/login`, { email, password }).then(res => res.data);
}

export async function singUp({ name, email, password }: { name: string, email: string, password: string }) {
    return await axios.post(`http://localhost:8200/auth/register`, { name, email, password }).then(res => res.data);
}