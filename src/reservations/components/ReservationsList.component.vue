<template>
  <div>
    <div v-for="reservation in reservations" :key="reservation.id">
      <ReservationCard
          :reservation="reservation"
          @cancel-reservation="handleCancelReservation"
      />
    </div>
  </div>
</template>

<script>
import ReservationCard from './ReservationCard.component.vue';

export default {
  name: 'ReservationList',
  components: {
    ReservationCard
  },
  props: {
    reservations: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCancelReservation(reservationId) {
      // Aquí puedes implementar la lógica para cancelar la reserva.
      console.log('Canceling reservation with ID:', reservationId);
      // Llama al servicio de API para cancelar la reserva
      this.$emit('cancel-reservation', reservationId);
    }
  }
};
</script>
