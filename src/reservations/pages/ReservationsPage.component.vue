<template>
  <div>
    <h1>Reservations</h1>
    <ReservationList :reservations="reservations" />
  </div>
</template>

<script>
import { ReservationsApiService } from '../services/reservations-api.service.js';
import ReservationList from '../components/ReservationsList.component.vue';

export default {
  name: 'ReservationPage',
  components: {
    ReservationList
  },
  data() {
    return {
      reservations: [],
      caregivers: []
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
          apiService.getAll(),  // Obtener las reservas
          apiService.getCaregivers()  // Obtener los cuidadores
        ]);

        // Verifica los logs para asegurar que los datos estén en la estructura correcta
        console.log('Reservations Response:', reservationsResponse);
        console.log('Caregivers Response:', caregiversResponse);

        // Asegúrate de que ambas respuestas tengan datos antes de proceder
        if (reservationsResponse && caregiversResponse && caregiversResponse.data) {
          // Combinar los datos de las reservas con el nombre y la imagen del cuidador correspondiente
          this.reservations = reservationsResponse.map(reservation => {
            const caregiver = caregiversResponse.data.find(c => c.id === reservation.caregiverId);
            return {
              ...reservation,
              caregiverName: caregiver ? caregiver.fullName : 'Unknown',
              profileImg: caregiver ? caregiver.profileImg : '' // Agrega el profileImg aquí
            };
          });

          console.log('Reservations with caregiver names and images:', this.reservations);
        } else {
          console.error('No data found in one of the responses.');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
};
</script>
