<template>
  <nav class="sidebar">
    <ul>
      <li><router-link to="/search-caregivers">Search Caregivers</router-link></li>
      <li><router-link to="/reservations">Reservations</router-link></li>
      <li><router-link to="/chat">Chat Online</router-link></li>
      <li><router-link to="/chat">Service Detail</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 200px; /* Ajusta el ancho del sidebar */
  background-color: #f8f9fa; /* Color de fondo */
  padding: 15px; /* Espaciado interno */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra */
}

.sidebar ul {
  list-style-type: none; /* Sin viñetas */
  padding: 0; /* Sin padding */
}

.sidebar li {
  margin: 10px 0; /* Espaciado entre elementos */
}

.sidebar a {
  text-decoration: none; /* Sin subrayado */
  color: #333; /* Color del texto */
}

.sidebar a:hover {
  color: #007bff; /* Color al pasar el mouse */
}
</style>
