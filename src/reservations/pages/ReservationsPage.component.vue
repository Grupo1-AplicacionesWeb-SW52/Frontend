<template>
  <div>
    <Sidebar /> <!-- Componente para el sidebar con las secciones -->
    <ReservationsList />
  </div>
</template>

<script>
import Sidebar from '../../shared/components/Sidebar.component.vue';
import ReservationsList from '../../reservations/components/ReservationsList.component.vue';

export default {
  components: {
    Sidebar,
    ReservationsList
  }
};
</script>

<style scoped>
/* Estilos para la página */
</style>
