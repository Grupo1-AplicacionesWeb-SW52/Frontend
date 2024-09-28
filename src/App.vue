<script>
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
  }
}
</script>

<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-primary" fixed>
      <template #start>
        <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
        <h3>Care Nest</h3>
      </template>
    </pv-toolbar>
  </header>

  <!-- Sidebar (Drawer) -->
  <pv-sidebar v-model:visible="drawer" class="p-sidebar-sm sidebar">
    <div class="sidebar-content">
      <ul>
        <!-- Generar el menú en el drawer (sidebar) -->
        <li v-for="item in items" :key="item.label">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </pv-sidebar>

  <!-- Vista principal de la página -->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.sidebar {
  background-color: #25618B; /* Color del sidebar */
}

.sidebar-content {
  padding: 16px;
  font-family: 'Open Sans', sans-serif; /* Cambiar la fuente */
}

.sidebar-content ul {
  list-style-type: none; /* Sin puntos de lista */
  padding: 0;
}

.sidebar-content li {
  margin-bottom: 10px; /* Espaciado entre secciones */
}

.sidebar-content a {
  color: white; /* Color del texto en el sidebar */
  font-weight: bold; /* Texto en negrita */
  font-size: 16px; /* Tamaño de fuente */
  text-decoration: none; /* Sin subrayado */
}

.p-button-text {
  color: white;
}

.bg-primary {
  background-color: #25618B; /* Color del encabezado */
}
</style>

