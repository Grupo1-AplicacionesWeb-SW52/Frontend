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
.sidebar {
  width: 200px; 
  background-color: #f8f9fa; 
  padding: 15px; 
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
}

.sidebar ul {
  list-style-type: none; 
  padding: 0; 
}

.sidebar li {
  margin: 10px 0; 
}

.sidebar a {
  text-decoration: none; 
  color: #333; 
}


.sidebar a:hover {
  color: #007bff;
}
</style>
