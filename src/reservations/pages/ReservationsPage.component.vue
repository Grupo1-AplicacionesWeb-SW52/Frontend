<template>
  <div>
    <h1>Reservations</h1>
    <DataTable :value="reservationsWithCaregiver" tableStyle="min-width: 50rem">
      <Column field="id" header="N°"></Column>
      <Column field="caregiverName" header="Caregiver"></Column>
      <Column field="createdAt" header="Created at"></Column>
      <Column header="Schedule" :body="formatSchedule"></Column>
      <Column field="totalFare" header="Total fare"></Column>
      <Column field="status" header="Status"></Column>
      <Column header="Actions" :body="renderActions"></Column>
    </DataTable>
  </div>
</template>

<script>
import { ReservationsApiService } from '../services/reservations-api.service.js';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  name: 'ReservationsPage',
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      reservationsWithCaregiver: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const apiService = new ReservationsApiService();
      try {
        const [reservationsResponse, caregiversResponse] = await Promise.all([
          apiService.getAll(),
          apiService.getAllCaregivers()
        ]);

        const reservations = reservationsResponse || [];
        const caregivers = caregiversResponse || [];

        // Mapea las reservas e incluye el campo `schedule`
        this.reservationsWithCaregiver = reservations.map(reservation => {
          const caregiver = caregivers.find(c => c.id === reservation.caregiverId);
          return {
            ...reservation,
            caregiverName: caregiver ? caregiver.fullName : 'Unknown',
            createdAt: new Date(reservation.createdAt).toLocaleDateString(),
            totalFare: `$${reservation.totalFare.toFixed(2)}`,
            schedule: reservation.schedule // Asegura que `schedule` esté presente
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    formatSchedule(reservation) {
      // Accede a `schedule.date` si está definido, de lo contrario, muestra un valor por defecto
      if (reservation.schedule && reservation.schedule.date) {
        const date = new Date(reservation.schedule.date);
        return date.toLocaleDateString();
      }
      return "No schedule";
    },
    renderActions() {
      return '<button>Action</button>';
    },
  },
};
</script>

<style scoped>

</style>
