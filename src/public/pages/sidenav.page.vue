<template>
  <div class="layout">
    <!-- Sidebar que contiene el menú -->
    <div class="sidenav">
      <MenuComponent />
    </div>

    <!-- Contenido principal de la aplicación -->
    <div class="wrapper-content">
      <main class="content">
        <router-view /> <!-- Aquí se renderizan las rutas -->
      </main>
    </div>
  </div>
</template>

<script>
import MenuComponent from '../components/menu.component.vue';
 // Importamos el componente Menu

export default {
  components: {
    MenuComponent
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidenav {
  width: 250px;
  background-color: #f4f4f4;
  padding: 10px;
}

.wrapper-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 20px;
}
</style>
