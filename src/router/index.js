/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../public/pages/home.component.vue';
import ServiceDetailPage from '../servicedetail/pages/ServiceDetail-page.component.vue';
import AboutComponent from '../public/pages/about.component.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/home', component: HomeComponent, meta: { title: 'Home' } },
		{ path: '/about', component: AboutComponent, meta: { title: 'About us' } },
		{ path: '/service-detail', component: ServiceDetailPage, name: 'ServiceDetail'},
		{ path: '/', redirect: '/home' },
	],
});

/**
 * Set Business name as prefix for each page title
 */
router.beforeEach((to, from, next) => {
	let baseTitle = 'CartNest';
	document.title = `${baseTitle} | ${to.meta['title']}`;
	next();
});

export default router;
