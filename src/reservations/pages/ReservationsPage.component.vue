<template>
  <div>
    <h2>Reservations</h2>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="reservation in reservations" :key="reservation.id">
        <div>
          <strong>Caregiver:</strong> {{ reservation.caregiver }}<br>
          <strong>Work Location:</strong> {{ reservation.workLocation }}<br>
          <strong>Reservation Date:</strong> {{ reservation.reservationDate }}<br>
          <strong>Total Time Work:</strong> {{ reservation.totalTimeWork }}<br>
          <strong>Total Fare:</strong> {{ reservation.totalFare }}<br>
          <strong>Status:</strong> {{ reservation.status }}<br>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ReservationService from '../services/Reservation.service.js';

export default {
  name: 'ReservationsPage',
  data() {
    return {
      reservations: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchReservations();
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await ReservationService.getReservations();
        this.reservations = response.data;
      } catch (error) {
        console.error('Error fetching reservations:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
/* Agrega estilos si es necesario */
</style>
