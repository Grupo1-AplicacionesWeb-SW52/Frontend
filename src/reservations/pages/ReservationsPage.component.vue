<template>
  <div class="reservations-page">
    <h1>Reservations</h1>
    <div v-for="(reservation, index) in reservations" :key="index" class="reservation-card">
      <div class="reservation-info">
        <img :src="reservation.caregiver.photo" alt="Caregiver photo" />
        <div>
          <h3>Caregiver: {{ reservation.caregiver.name }}</h3>
          <p>Work location: {{ reservation.location }}</p>
          <p>Reservation date: {{ reservation.date }}</p>
          <p>Total timework: {{ reservation.timework }}</p>
          <p>Total fair: S/ {{ reservation.fair }}</p>
        </div>
      </div>
      <div class="reservation-status">
        <p :class="reservation.status">{{ reservation.status }}</p>
        <button v-if="reservation.status === 'Pending'" @click="updateReservation(reservation.id)">Update</button>
        <button v-if="reservation.status === 'Pending'" @click="cancelReservation(reservation.id)">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservations: [
        {
          caregiver: { name: 'Julio Cesar', photo: 'path-to-image.jpg' },
          location: 'San Isidro',
          date: 'March 22th, 2024',
          timework: 'From 9AM to 5PM (8 hours)',
          fair: 40.00,
          status: 'Pending'
        },
        // Agrega más datos aquí
      ]
    };
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

<style>
/* Aquí defines los estilos para hacer que las tarjetas se vean como la primera imagen */
</style>
