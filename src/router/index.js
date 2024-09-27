/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import {createRouter, createWebHistory} from "vue-router";
import ReservationsPage from "../reservations/pages/ReservationsPage.component.vue";
import Sidebar from "../shared/components/Sidebar.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/reservations', component: ReservationsPage, meta: { title: 'Reservations' } },
    { path: '/sidebar', component: Sidebar, meta: { title: 'Sidebar' } },
    { path: '/', redirect: '/reservations' },  // Default redirection
  ],
});

/**
 * Set Business name as prefix for each page title
 */
router.beforeEach((to, from, next) => {
  let baseTitle = 'Care Nest';
  document.title = `${baseTitle} | ${to.meta['title']}`;
  next();
});

export default router;
