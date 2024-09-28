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
        {label:'Payment',to:'/payment'}
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
  <pv-toast></pv-toast>
  <header v-if="isAuthenticated">
    <pv-toolbar class="bg-primary" fixed>
      <template #start>
        <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
        <h3>CareNest</h3>
        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"/>
  <router-view/>
</template>

<style scoped>
.bg-primary {
  background-color: #013b58;  /* Asegúrate de que este sea el color azul que quieres */
  color: white;
}

.sign-in-container {
  background-color: #013b58;  /* Si esta clase controla la sección del inicio de sesión */
  color: white;
}

</style>