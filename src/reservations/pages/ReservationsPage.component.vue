<template>
  <div>
    <h1>Reservations</h1>
    <ReservationList :reservations="reservations" />
  </div>
</template>

<script>
import { ReservationsApiService } from '../services/reservations-api.service.js';
import ReservationList from '../components/ReservationsList.component.vue';

export default {
  name: 'ReservationsPage',
  components: {
    ReservationList
  },
  data() {
    return {
      reservations: []
    };
  },
  async mounted() {
    await this.fetchReservations();
  },
  methods: {
    async fetchReservations() {
      const apiService = new ReservationsApiService();
      try {
        const rawReservations = await apiService.getAll();
        // Example: Transform data if needed
        this.reservations = rawReservations.map(reservation => ({
          ...reservation,
          reservationDate: new Date(reservation.reservationDate).toLocaleDateString()
        }));
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    }
  }
};
</script>
