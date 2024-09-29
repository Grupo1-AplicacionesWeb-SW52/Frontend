<template>
  <div>
    <h1>Reservations</h1>
    <ReservationList :reservations="reservations" />
  </div>
</template>

<script>
import { ReservationsApiService } from '../services/reservations-api.service';
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
  created() {
    this.fetchReservations();
  },
  methods: {
    fetchReservations() {
      const apiService = new ReservationsApiService();
      apiService.getAll()
          .then(response => {
            this.reservations = response.data;
          })
          .catch(error => {
            console.error("Error fetching reservations:", error);
          });
    }
  }
};
</script>
