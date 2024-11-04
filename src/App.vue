<template>
  <div id="app">
    <pv-toast></pv-toast>
    <pv-confirm-dialog/>
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './shared/components/sidebar.component.vue';
import LanguageSwitcher from './public/component/lenguaje-switcher.component.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    LanguageSwitcher
  }
};
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
}
</style>
