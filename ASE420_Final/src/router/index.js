import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Flashcards from '@/components/Flashcards.vue';
import Quiz from '@/components/Quiz.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },    
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/flashcards/:setId', name: 'Flashcards', component: Flashcards }, 
    { path: '/quiz/:setId', name: 'Quiz', component: Quiz },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;