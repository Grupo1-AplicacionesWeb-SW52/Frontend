<template>
  <div id="app">
    <SidebarComponent />
    <router-view />
  </div>
</template>

<script>
import SidebarComponent from '@/shared/components/sidebar.component.vue';

export default {
  components: {
    SidebarComponent,
  },
};
</script>

<style>
#app {
  display: flex;
}
</style>
