/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import { createRouter, createWebHistory } from 'vue-router';
import CaregiverSearch from '../searches/pages/caregiver-search.vue';
import HomeComponent from '../public/pages/home.component.vue';
import AboutComponent from '../public/pages/about.component.vue';
import TutorialManagementComponent from '../learning/pages/tutorial-management.component.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/home', component: HomeComponent, meta: { title: 'Home' } },
		{ path: '/search', component: CaregiverSearch, meta: { title: 'Search' } },
		{
			path: '/tutorials',
			component: TutorialManagementComponent,
			meta: { title: 'Tutorials' },
		},
		{ path: '/about', component: AboutComponent, meta: { title: 'About us' } },
		{ path: '/', redirect: '/home' },
	],
});

/**
 * Set Business name as prefix for each page title
 */
router.beforeEach((to, from, next) => {
	let baseTitle = 'ACME Learning Center';
	document.title = `${baseTitle} | ${to.meta['title']}`;
	next();
});

export default router;
