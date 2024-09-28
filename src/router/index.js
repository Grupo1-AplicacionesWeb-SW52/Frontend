import Vue from 'vue';
import VueRouter from 'vue-router';
import ChatList from '@/learning/pages/chat-list.vue';
import ChatDetail from '@/learning/pages/chat-detail.vue';
import { createRouter, createWebHistory } from "vue-router";


const routes =createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/chat', component: ChatList},
        {path: '/', redirect: '/chat' },
        {path: '/chat/:id', component: ChatDetail},
    ],
}) ;


router.beforeEach((to, from, next) => {
    let baseTitle = 'CareNest';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})
const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
