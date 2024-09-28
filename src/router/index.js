/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import { createRouter, createWebHistory } from "vue-router";
import ReservationsPageComponent from "../reservations/pages/ReservationsPage.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/reservations', component: ReservationsPageComponent, meta: { title: 'Reservations' } },
    { path: '/', redirect: '/reservations' },
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
