import { createRouter, createWebHistory } from 'vue-router';
import ChatManagement from '../chat/pages/chat-management.component.vue';
import ChatDetail from '../chat/pages/chat-detail.component.vue';

const routes = [
    { path: '/chat', name: 'Chat', component: ChatManagement, meta: { title: 'Chat Online' } },
    { path: '/chat/:id', name: 'ChatDetail', component: ChatDetail, meta: { title: 'Chat Detail' } },
    { path: '/', redirect: '/chat' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `EduNest | ${to.meta.title}`;
    next();
});

export default router;
