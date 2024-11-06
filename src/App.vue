<template>
  <div id="app">
    <pv-toast />

    <!-- Header -->
    <header>
      <pv-toolbar class="bg-primary" fixed>
        <template #start>
          <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
          <h3 class="title">Care Nest</h3>
        </template>
      </pv-toolbar>
    </header>

    <!-- Sidebar (Drawer) -->
    <pv-sidebar v-model:visible="drawer" header="Care Nest">
      <div class="sidebar-content">
        <ul class="list-none p-3 m-0">
          <li v-for="item in items" :key="item.label" class="flex align-items-center p-2 cursor-pointer text-white hover:bg-primary-light">
            <i :class="item.icon" class="mr-2"></i>
            <router-link :to="item.to" class="text-white">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </pv-sidebar>

    <!-- Main Content -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  title: 'CareNest',
  data() {
    return {
      drawer: false,
      items: [
        {label: 'Home', to: '/home', icon: 'pi pi-home'},
        {label: 'About', to: '/about', icon: 'pi pi-info-circle'},
        {label: 'Search', to: '/search', icon: 'pi pi-search'},
        {label: 'Payment', to: '/payment', icon: 'pi pi-wallet'},
        {label: 'Reservations', to: '/reservations', icon: 'pi pi-calendar'},
        {label: 'Chat Online', to: '/chat', icon: 'pi pi-comments'}
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  created() {
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  }
}
</script>

<style scoped>
.bg-primary {
  background-color: #25618B;
  color: white;
}

.sidebar-content .hover\:bg-primary-light:hover {
  background-color: #527bb8;
}

.text-white {
  color: black;
  padding: 0.2rem;
  font-weight: bold;
  list-style: none;
  text-decoration: none;
}
.mr-2 {
  margin-right: 0.5rem;
}

.title {
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 16px;
}
</style>
