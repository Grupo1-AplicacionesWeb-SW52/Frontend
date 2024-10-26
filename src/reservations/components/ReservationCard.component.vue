<template>
  <div class="reservation-card">
    <div class="image-container">
      <img :src="reservation.profileImg" alt="Caregiver Image" class="caregiver-image" />
    </div>
    <div class="details">
      <div :class="[statusClass]" class="reservation-status">
        <p>{{ reservation.status }}</p>
      </div>
      <p><strong>Caregiver:</strong> {{ reservation.caregiverName }}</p>
      <p><strong>Work Location:</strong> {{ reservation.workLocation }}</p>
      <p><strong>Reservation Date:</strong> {{ reservation.reservationDate }}</p>
      <p><strong>Total Time Work:</strong> {{ reservation.totalTimeWork }}</p>
      <p><strong>Total Fare:</strong> {{ reservation.totalFare }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservationCard',
  props: {
    reservation: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusClass() {
      return {
        'pending-status': this.reservation.status === 'Pending',
        'realized-status': this.reservation.status === 'Realized',
        'cancelled-status': this.reservation.status === 'Cancelled'
      };
    }
  }
};
</script>

<style scoped>
.reservation-card {
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.image-container {
  display: flex;
  align-items: center;
  margin-right: 16px;
}

.caregiver-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.reservation-status {
  position: absolute;
  top: 10px;
  right: 20px;
}

.pending-status {
  color: black;
  font-weight: bold;
}
.realized-status {
  color: limegreen;
  font-weight: bold;
}
.cancelled-status {
  color: red;
  font-weight: bold;
}

.details {
  flex-grow: 1;
}
</style>
