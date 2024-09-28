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
        { label: 'Chat Online', to:'/chat'}
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