<script>

export default {
  name: 'app',
  title: 'CareNest',
  components:{
  },
  // data() {
  //   return {
  //     drawer: false,
  //     items: [
  //       { label: 'Search', to: '/search'},
  //       {label:'Payment',to:'/payment'},
  //       { label: 'Search Caregivers', to: '/search-caregivers' },
  //       { label: 'Reservations', to: '/reservations' },
  //     ]
  //   };
  // },
  // methods: {
  //   toggleDrawer() {
  //     this.drawer = !this.drawer;
  //   }
  // },
  // created() {
  //   this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  // }
}
</script>
<template>
  <!-- <div id="app">
    <pv-toast />
    <NavbarComponent></NavbarComponent>

    <div class="main-content">
      <router-view />
    </div>
  </div> -->
  <router-view></router-view>
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