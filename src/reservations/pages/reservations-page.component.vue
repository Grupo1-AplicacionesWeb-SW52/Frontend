<template>
  <div>
    <h1>Reservations</h1>
    <ReservationList :reservations="reservations" />
  </div>
</template>

<script>
import { ReservationsApiService } from '../services/reservations-api.service.js';
import ReservationList from '../components/reservations-list.component.vue';

export default {
  name: 'ReservationPage',
  components: {
    ReservationList
  },
  data() {
    return {
      reservations: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const apiService = new ReservationsApiService();
      try {
        // Llamada a getAll() para obtener las reservas con los cuidadores
        const reservationsWithCaregiver = await apiService.getAll();
        this.reservations = reservationsWithCaregiver;
        console.log('Reservations with caregivers:', this.reservations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>
