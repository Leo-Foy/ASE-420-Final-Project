import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },      // Home Page
    { path: '/login', name: 'Login', component: Login } // Login Page
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;