<template>
  <div>
    <!-- Mostrar las tarjetas de reserva -->
    <div v-for="reservation in paginatedReservations" :key="reservation.id">
      <ReservationCard
          :reservation="reservation"
          @cancel-reservation="handleCancelReservation"
      />
    </div>

    <!-- Paginador de PrimeVue -->
    <Paginator
        v-model:first="first"
        :rows="itemsPerPage"
        :totalRecords="reservations.length"
        :rowsPerPageOptions="[4, 8, 12]"
        class="p-mt-4"
    />
  </div>
</template>

<script>
import ReservationCard from './reservation-card.component.vue';
import Paginator from 'primevue/paginator';

export default {
  name: 'ReservationList',
  components: {
    ReservationCard,
    Paginator
  },
  props: {
    reservations: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      first: 0,
      itemsPerPage: 4,
    };
  },
  computed: {
    // Reservas paginadas para mostrar en la página actual
    paginatedReservations() {
      return this.reservations.slice(this.first, this.first + this.itemsPerPage);
    }
  },
  methods: {
    handleCancelReservation(reservationId) {
      console.log('Canceling reservation with ID:', reservationId);
      this.$emit('cancel-reservation', reservationId);
    }
  }
};
</script>

<style scoped>
/* Añade tu estilo personalizado para el paginador o las tarjetas si lo deseas */
</style>
