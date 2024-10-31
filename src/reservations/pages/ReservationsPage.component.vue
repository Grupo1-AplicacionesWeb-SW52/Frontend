<template>
  <div>
    <h1>Reservations</h1>
    <!-- Aquí pasamos las reservas como propiedad al componente de lista -->
    <ReservationList :reservations="reservations" />
  </div>
</template>

<script>
import {ReservationsApiService}from '../services/reservations-api.service.js';
import ReservationList from '../components/ReservationsList.component.vue';  // Este componente importa la lista de tarjetas

export default {
  name: 'ReservationPage',  // Ajusta el nombre del componente aquí
  components: {
    ReservationList  // Importa el componente que maneja la lista de reservas
  },
  data() {
    return {
      reservations: []  // Inicializa la lista de reservas como un array vacío
    };
  },
  async mounted() {
    await this.fetchReservations();  // Llama a la función para cargar las reservas al montar el componente
  },
  methods: {
    async fetchReservations() {
      const apiService = new ReservationsApiService();
      try {
        this.reservations = await apiService.getAll();  // Asigna las reservas al array local
        console.log(this.reservations);  // Verifica si las reservas están siendo recibidas correctamente
      } catch (error) {
        console.error("Error fetching reservations:", error);  // Muestra los errores en caso de fallo
      }
    }
  }
};
</script>
