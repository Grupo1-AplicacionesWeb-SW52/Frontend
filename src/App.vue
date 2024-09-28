<script>
export default {
  name: 'app',
  title: 'SafeChild',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Profile Details', to: '/profile/details' },
        { label: 'Profile Biography', to: '/profile/biography' },
        { label: 'Profile Header', to: '/profile/header' },
        { label: 'Profile Service Info', to: '/profile/service-info' }
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
        <h3>SafeChild</h3>
        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href }" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"/>
  <router-view/>
</template>
