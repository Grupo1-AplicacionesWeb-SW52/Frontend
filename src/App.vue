<script>
export default {
  name: 'app',
  title: 'CareNest',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home' },
        { label: 'About', to: '/about' },
        { label: 'Search', to: '/search'},
        {label:'Payment',to:'/payment'},
        { label: 'Search Caregivers', to: '/search-caregivers' },
        { label: 'Reservations', to: '/reservations' },
        { label: 'Chat Online', to: '/chat' }
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
<template>
  <div id="app">
    <pv-toast />

    <header>
      <pv-toolbar class="bg-primary" fixed>
        <template #start>
          <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
          <h3 class="title">Care Nest</h3>
        </template>
      </pv-toolbar>
    </header>

    <pv-sidebar v-model:visible="drawer" class="p-sidebar-sm">
      <div class="sidebar-content">
        <ul>
          <li v-for="item in items" :key="item.label">
            <router-link :to="item.to">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </pv-sidebar>

    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.bg-primary {
  background-color: #013b58; 
  color: white;
}

.sign-in-container {
  background-color: #013b58;  
  color: white;
}

</style>