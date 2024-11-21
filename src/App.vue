<template>
  <div id="app">
    <pv-toast />

    <!-- Header -->
    <header>
    </header>

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
