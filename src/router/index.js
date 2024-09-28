import { createRouter, createWebHistory } from 'vue-router';
import ProfileDetails from '../components/profile/ProfileDetails.vue';
import ProfileBiography from '../components/profile/ProfileBiography.vue';
import ProfileHeader from '../components/profile/ProfileHeader.vue';
import ProfileServiceInfo from '../components/profile/ProfileServiceInfo.vue';

const routes = [
  {
    path: '/profile/details',
    name: 'ProfileDetails',
    component: ProfileDetails,
    meta: { title: 'Profile Details' }
  },
  {
    path: '/profile/biography',
    name: 'ProfileBiography',
    component: ProfileBiography,
    meta: { title: 'Profile Biography' }
  },
  {
    path: '/profile/header',
    name: 'ProfileHeader',
    component: ProfileHeader,
    meta: { title: 'Profile Header' }
  },
  {
    path: '/profile/service-info',
    name: 'ProfileServiceInfo',
    component: ProfileServiceInfo,
    meta: { title: 'Profile Service Info' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `SafeChild | ${to.meta.title}`;
  next();
});

export default router;
