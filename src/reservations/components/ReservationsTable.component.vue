<!--
<template>
  <div>
    <h1>Reservations</h1>
    <table class="reservations-table">
      <thead>
      <tr>
        <th>N°</th>
        <th>Caregiver</th>
        <th>Created at</th>
        <th>Schedule</th>
        <th>Total fare</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(reservation, index) in reservations" :key="reservation.id">
        <td>{{ index + 1 }}</td>
        <td>{{ getCaregiverName(reservation.caregiverId) }}</td>
        <td>{{ reservation.createdAt }}</td>
        <td>{{ reservation.schedule.date }} - {{ reservation.schedule.startTime }} to {{ reservation.schedule.endTime }}</td>
        <td>{{ reservation.totalFare }}</td>
        <td :class="statusClass(reservation.status)">{{ reservation.status }}</td>
        <td>

          <button @click="handleAction(reservation.id)">Action</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ReservationsTable',
  props: {
    reservations: {
      type: Array,
      required: true
    },
    caregivers: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCaregiverName(caregiverId) {
      const caregiver = this.caregivers.find(c => c.id === caregiverId);
      return caregiver ? caregiver.fullName : 'Unknown';
    },
    statusClass(status) {
      return {
        'pending-status': status === 'pending',
        'realized-status': status === 'completed',
        'cancelled-status': status === 'cancelled'
      };
    },
    handleAction(reservationId) {
      // Lógica para manejar acciones en la fila de la tabla
      console.log(`Acción en reserva con ID: ${reservationId}`);
    }
  }
};
</script>

<style scoped>
.reservations-table {
  width: 100%;
  border-collapse: collapse;
}

.reservations-table th,
.reservations-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
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
</style>