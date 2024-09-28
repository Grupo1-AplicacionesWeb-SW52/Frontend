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
    <pv-sidebar v-model:visible="drawer" class="p-sidebar-sm">
      <div class="sidebar-content">
        <ul>
          <li v-for="item in items" :key="item.label">
            <router-link :to="item.to">{{ item.label }}</router-link>
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
import Sidebar from './shared/components/sidebar.component.vue'; // Asegúrate de importar el sidebar

export default {
  name: 'app',
  title: 'Care Nest',
  data() {
    return {
      drawer: false,
      items: [
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
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  z-index: 1; /* Asegura que el header esté siempre por encima */
}

.main-content {
  display: flex;
  flex: 1; /* Ocupa el resto del espacio disponible */
}

.sidebar-content {
  padding: 16px;
}

.p-button-text {
  color: white;
}

.bg-primary {
  background-color: #007bff; /* Ajusta este color según tu branding */
}

.title {
  margin-left: 10px; /* Espaciado entre el botón y el título */
  color: white; /* Color del título */
}
</style>
