<template>
  <div class="reservation-card">
    <h3>{{ reservation.caregiver }}</h3>
    <p><strong>Reservation Date:</strong> {{ reservation.reservationDate }}</p>
    <p><strong>Total Time:</strong> {{ reservation.totalTimeWork }}</p>
    <p><strong>Status:</strong> {{ reservation.status }}</p>
  </div>
</template>

<script>
export default {
  name: 'ReservationCard',
  props: {
    reservation: {
      type: Object,
      required: true // Esto significa que la prop es obligatoria
    }
  }
};
</script>

<style scoped>
.reservation-card {
  background-color: white;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
