<template>
  <nav class="sidebar">
    <ul>
      <li><router-link to="/chat">S</router-link></li
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SidebarComponent',
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
}
</style>
