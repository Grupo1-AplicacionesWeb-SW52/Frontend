<template>
  <div>
    <h1 class="header-title">Search for caregivers</h1>

    <div class="header-tools-container">
      <!-- Filtro de Ubicación -->
      <div class="header-select">
        <label for="location">Location</label>
        <pv-dropdown
          v-model="selectedLocation"
          :options="locationOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="All"
          @change="updateFilteredCaregiversList"
        />
      </div>

      <!-- Filtro de Calificación -->
      <div class="header-select">
        <label for="rating">Rating</label>
        <pv-dropdown
          v-model="orderByRating"
          :options="ratingOptions"
          placeholder="Most relevant"
          @change="updateFilteredCaregiversList"
        />
      </div>

      <!-- Botón de Recarga -->
      <pv-button
        label="Refresh"
        icon="pi pi-refresh"
        class="primary-btn refresh-btn"
        @click="onReloadList"
      />
    </div>

    <!-- Lista de Cuidadores -->
    <div class="search-caregivers-list">
      <CaregiverCardComponent
        v-for="(serviceSearch, index) in filteredSearchServiceList"
        :key="serviceSearch.id"
        :serviceSearch="serviceSearch"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CaregiverCardComponent from '../components/caregiver-card.component.vue';
import ServiceSearchService from '../services/service-search.service';

export default {
  name: 'SearchPageComponent',
  components: {
    CaregiverCardComponent
  },
  setup() {
    // Estado del componente
    const searchServiceList = ref([]);
    const filteredSearchServiceList = ref([]);
    const orderByRating = ref('relevant');
    const selectedLocation = ref('');
    const locationOptions = ref([]);
    const ratingOptions = [
      { label: 'Most relevant', value: 'relevant' },
      { label: 'Most popular', value: 'popular' }
    ];

    // Cargar lista de cuidadores al montar el componente
    onMounted(() => {
      getCaregiversList();
    });

    // Función para recargar la lista
    const onReloadList = () => {
      searchServiceList.value = [];
      filteredSearchServiceList.value = [];
      setTimeout(() => {
        getCaregiversList();
      }, 2000); // Simulación de carga de 2 segundos
    };

    // Obtener la lista de cuidadores desde el servicio
    const getCaregiversList = async () => {
      const searchResults = await ServiceSearchService.getAll();
      searchServiceList.value = searchResults;
      updateFilteredCaregiversList();

      // Generar opciones únicas para el filtro de ubicación
      locationOptions.value = Array.from(
        new Set(searchResults.map((result) => result.caregiver.district))
      ).map((location) => ({ label: location, value: location }));
    };

    // Actualizar la lista filtrada
    const updateFilteredCaregiversList = () => {
      filteredSearchServiceList.value = searchServiceList.value.filter(
        (c) =>
          !selectedLocation.value || c.caregiver.district === selectedLocation.value
      );

      if (orderByRating.value === 'popular') {
        filteredSearchServiceList.value.sort((a, b) => b.rating - a.rating);
      }
    };

    return {
      searchServiceList,
      filteredSearchServiceList,
      orderByRating,
      selectedLocation,
      locationOptions,
      ratingOptions,
      onReloadList,
      updateFilteredCaregiversList
    };
  }
};
</script>

<style scoped>
.header-title {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.header-tools-container {
  display: flex;
  gap: 1em;
  align-items: center;
  margin-bottom: 1.5em;
}

.header-select {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.search-caregivers-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5em;
}

.primary-btn {
  display: flex;
  align-items: center;
}
</style>
