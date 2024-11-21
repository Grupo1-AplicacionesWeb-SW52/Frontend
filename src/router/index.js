import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes existentes
import SignUpFatherComponent from '../auth/pages/sign-up-father.component.vue';
import SignInFatherComponent from '../auth/pages/sign-in-father.component.vue';
import SignInChildCareComponent from '../auth/pages/sign-in-child-care.component.vue';
import SignUpChildCareComponent from '../auth/pages/sign-up-child-care.component.vue';
import SearchPage from '../search-caregivers/page/search.page.vue';
import PaymentPageComponent from '../payment/pages/payment-page.component.vue';
import ReservationsPageComponent from '../reservations/pages/ReservationsPage.component.vue';
import SelectRole from '../auth/pages/select-role.vue';
import SidenavPage from '../public/pages/sidenav.page.vue';
import PaymentHistory from '../payment/pages/payment-history.page.vue';
import ServiceDetailPage from '../services-profile/pages/service-detail.page.vue';


import ChatManagement from '../chat/pages/chat-management.component.vue';
import ChatDetail from '../chat/pages/chat-detail.component.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/select-role', component: SelectRole },
		{ path: '/sign-up-father', component: SignUpFatherComponent },
		{ path: '/sign-in-father', component: SignInFatherComponent },
		{ path: '/sign-in-child', component: SignInChildCareComponent },
		{ path: '/sign-up-child', component: SignUpChildCareComponent },

		{ path: '/', redirect: '/sign-in-father' },

		{
			path: '/',
			component: SidenavPage,  // El layout principal con el sidebar
			children: [
				{
					path: '/search-caregiver',
					component: SearchPage,
					meta: { title: 'Search' },
				},
				{
					path: '/payment',
					component: PaymentPageComponent,
					meta: { title: 'Payment' },
				},
				{
					path: '/history',
					component: PaymentHistory,
					meta: { title: 'Payment History' },
				},
				{
					path: '/reservations',
					component: ReservationsPageComponent,
					meta: { title: 'Reservation' },
				},
				{
					path: '/your-service',
					component: ServiceDetailPage,
					meta: { title: 'Your Services' },
				},
				// chat
				{
					path: '/chat',
					name: 'Chat',
					component: ChatManagement,
					meta: { title: 'Chat Online' },
				},
				{
					path: '/chat/:id',
					name: 'ChatDetail',
					component: ChatDetail,
					meta: { title: 'Chat Detail' },
				},
			],
		},
	],
});

// Cambia el título de la página antes de cada cambio de ruta
router.beforeEach((to, from, next) => {
	let baseTitle = 'CartNest';
	document.title = `${baseTitle} | ${to.meta['title']}`;
	next();
});

export default router;
