<template>
  <div class="reservation-card">
    <div class="caregiver-info">
      <!-- Imagen del cuidador -->
      <div class="caregiver-image-container">
        <img :src="reservation.caregiver.profileImg" alt="Caregiver Image" class="caregiver-img" />
      </div>

      <!-- Información del cuidador -->
      <div class="caregiver-details">
        <p><strong>Caregiver Name:</strong> {{ reservation.caregiver.fullName }}</p>
        <p><strong>Created At:</strong> {{ reservation.createdAt }}</p>
        <p><strong>Total Fare:</strong> {{ reservation.totalFare }}</p>
        <p><strong>Status:</strong> {{ reservation.status }}</p>
        <!-- Mostrar el botón solo si el status es 'pending' -->
        <button v-if="reservation.status === 'pending'" @click="cancelReservation">Cancel Reservation</button>
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
  flex-direction: row;  /* Coloca los elementos en una fila */
  align-items: center;   /* Centra verticalmente los elementos */
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px; /* Agrega más espacio entre las tarjetas */
}

.caregiver-info {
  display: flex;
  flex-direction: row;
  align-items: center;  /* Centra la imagen y los detalles verticalmente */
}

.caregiver-image-container {
  margin-right: 16px;   /* Espacio entre la imagen y el texto */
}

.caregiver-img {
  width: 80px;  /* Ajusta el tamaño de la imagen */
  height: 80px; /* Mantén la imagen cuadrada */
  border-radius: 50%;  /* Da forma redonda a la imagen */
  object-fit: cover;  /* Asegura que la imagen se recorte adecuadamente */
}

.caregiver-details {
  flex: 1;  /* Ocupa el espacio restante */
}

.caregiver-details p {
  margin: 4px 0;  /* Ajusta el espaciado entre los párrafos */
}
</style>

