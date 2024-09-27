/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import TutorialManagementComponent from "../learning/pages/tutorial-management.component.vue";
import SignUpFatherComponent  from "../learning/pages/sign-up-father.component.vue";
import SignInFatherComponent from "../learning/pages/sign-in-father.component.vue";
import SignInChildCareComponent from "../learning/pages/sign-in-child-care.component.vue";
import SignUpChildCareComponent from "../learning/pages/sign-up-child-care.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home',    component: HomeComponent, meta: { title: 'Home' } },
    { path: '/tutorials', component: TutorialManagementComponent, meta: { title: 'Tutorials' } },
    { path: '/about',   component: AboutComponent, meta: { title: 'About us' } },
    { path: '/sign-up-father', component: SignUpFatherComponent},
    { path: '/sign-in-father', component: SignInFatherComponent},
    {path: '/sign-in-child', component: SignInChildCareComponent},
    {path: '/sign-up-child', component: SignUpChildCareComponent},
    { path: '/',        redirect: '/home' },
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