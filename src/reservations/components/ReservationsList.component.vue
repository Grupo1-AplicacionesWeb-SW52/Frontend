<template>
  <div class="reservations-list">
    <h1>Reservations</h1>
    <div v-for="reservation in reservations" :key="reservation.id">
      <ReservationCard :caregiver="reservation.caregiver" :reservation="reservation" />
    </div>
  </div>
</template>

<script>
import ReservationCard from './ReservationCard.component.vue';
import reservationsApi from '../../reservations/services/reservations-api.service.js';

export default {
  components: {
    ReservationCard
  },
  data() {
    return {
      reservations: []
    };
  },
  mounted() {
    this.fetchReservations();
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await reservationsApi.getAll();
        this.reservations = response.data;
      } catch (error) {
        console.error('Error fetching reservations', error);
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para la lista de reservas */
</style>
