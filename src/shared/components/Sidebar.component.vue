<template>
  <nav class="sidebar">
    <ul>
      <li><router-link to="/search-caregivers">Search Caregivers</router-link></li>
      <li><router-link to="/reservations">Reservations</router-link></li>
      <li><router-link to="/chat">Chat Online</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
/* Estilos para el sidebar */
</style>
