<template>
  <div class="reservation-card">
    <img :src="caregiver.photo" alt="Caregiver photo" class="caregiver-photo">
    <div class="reservation-info">
      <h3>{{ caregiver.name }}</h3>
      <p><strong>Location:</strong> {{ caregiver.workLocation }}</p>
      <p><strong>Date:</strong> {{ reservation.date }}</p>
      <p><strong>Total Time:</strong> {{ reservation.totalTimeWork }}</p>
      <p><strong>Total Fair:</strong> ${{ reservation.totalFair }}</p>
    </div>
    <div class="reservation-status">
      <span :class="statusClass">{{ reservation.status }}</span>
      <div v-if="reservation.status === 'Pending'">
        <button @click="updateReservation(reservation.id)">Update</button>
        <button @click="cancelReservation(reservation.id)">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caregiver: Object,
    reservation: Object
  },
  computed: {
    statusClass() {
      return {
        'status-realized': this.reservation.status === 'Realized',
        'status-cancelled': this.reservation.status === 'Cancelled',
        'status-pending': this.reservation.status === 'Pending',
      };
    }
  },
  methods: {
    updateReservation(id) {
      // Lógica para actualizar la reserva
    },
    cancelReservation(id) {
      // Lógica para cancelar la reserva
    }
  }
};
</script>

<style scoped>
/* Aquí van los estilos para la tarjeta */
</style>
