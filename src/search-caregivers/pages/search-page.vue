<template>
  <div>
    <h1 class="header-title">Search for caregivers</h1>
    <div class="header-tools-container">
      <!-- Controles de filtro y recarga (sin cambios) -->
    </div>

    <!-- Lista de Cuidadores -->
    <div class="search-caregivers-list">
      <CaregiverCardComponent
          v-for="(serviceSearch, index) in filteredSearchServiceList"
          :key="serviceSearch.id"
          :serviceSearch="serviceSearch"
          @reserve="handleReservation"
          class="caregiver-card"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CaregiverCardComponent from '../components/caregiver-card.component.vue';
import ServiceSearchService from '../services/service-search.service';
import { ReservationsApiService } from '../../reservations/services/reservations-api.service.js';

export default {
  name: 'SearchPageComponent',
  components: {
    CaregiverCardComponent,
  },
  setup() {
    const filteredSearchServiceList = ref([]);


    const reservationsApiService = new ReservationsApiService();


    const loadServices = async () => {
      try {
        const services = await ServiceSearchService.getAll();
        filteredSearchServiceList.value = services;
      } catch (error) {
        console.error('Error loading services:', error);
      }
    };

    onMounted(() => {
      loadServices();
    });

    // Función para manejar la reserva
    const handleReservation = async (serviceSearch) => {
      try {
        const reservation = {
          caregiverId: serviceSearch.caregiverId,
          createdAt: new Date().toISOString(),
          schedule: serviceSearch.schedules[0],
          status: 'pending',
          totalFare: 0,
        };

        await reservationsApiService.create(reservation);
        alert('Reservation successful!');
      } catch (error) {
        console.error('Error creating reservation:', error);
        alert('Failed to create reservation.');
      }
    };

    return {
      filteredSearchServiceList,
      handleReservation,
    };
  },
};
</script>

<style scoped>
.search-caregivers-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.caregiver-card {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.caregiver-card .card-content {
  margin-bottom: 15px;
}
</style>
