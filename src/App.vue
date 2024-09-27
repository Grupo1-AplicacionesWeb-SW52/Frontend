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
        <div class="flex-column">
          <!-- Iterar sobre los items de navegación -->
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>

  <!-- Sidebar (Drawer) -->
  <pv-sidebar v-model:visible="drawer" class="p-sidebar-sm">
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
/* Aquí podrías añadir estilos personalizados, si es necesario */
.sidebar-content {
  padding: 16px;
}

.p-button-text {
  color: white;
}

.bg-primary {
  background-color: #007bff; /* Ajusta este color según tu branding */
}
</style>
