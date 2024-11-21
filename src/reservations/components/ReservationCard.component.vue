<template>
  <div class="reservation-card">
    <div class="caregiver-info">
      <!-- Verificar si caregiver está disponible antes de mostrar la imagen y el nombre -->
      <div v-if="reservation.caregiver">
        <img :src="reservation.caregiver.profileImg" alt="Caregiver Image" class="caregiver-img" />
        <div class="caregiver-details">
          <p><strong>Caregiver Name:</strong> {{ reservation.caregiver.fullName }}</p>
          <p><strong>Created At:</strong> {{ reservation.createdAt }}</p>
          <p><strong>Total Fare:</strong> {{ reservation.totalFare }}</p>
          <p><strong>Status:</strong> {{ reservation.status }}</p>
          <!-- Mostrar el botón solo si el status es 'pending' -->
          <button v-if="reservation.status === 'pending'" @click="cancelReservation">Cancel Reservation</button>
        </div>
      </div>
      <!-- Si no hay caregiver asignado, mostrar un mensaje alternativo -->
      <div v-else>
        <p>No caregiver assigned</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reservation: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log('Reservation data:', this.reservation);  // Verifica los datos que llegan al componente
  },
  methods: {
    cancelReservation() {
      console.log('Reserva cancelada');
    }
  }
}
</script>



<style scoped>
.reservation-card {
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.caregiver-info {
  display: flex;
}

.caregiver-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
}

.caregiver-details {
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 10px;
  background-color: #25618B;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1d4e6d;
}
</style>
