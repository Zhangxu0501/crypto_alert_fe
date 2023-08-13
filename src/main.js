import { createApp } from 'vue';
import router from './router'; // 确保路径正确
import App from './App.vue';

createApp(App).use(router).mount('#app');