

import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue'; // 请根据你的文件路径更改
import UserRegister from '../components/UserRegister.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        path: '/user_login',
        name: 'UserLogin',
        component: UserLogin
    },
    {
        path: '/user_register',
        name: 'UserRegister',
        component: UserRegister
    },
    {
        path: '/hello_world',
        name: 'HelloWorld',
        component: HelloWorld
    }
    // 其他路由定义...
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;