<script>
import CaregiverList from './caregiver-list.component.vue';
import { SearchesApiService } from '../services/searches-api.services';

export default {
  name: 'SearchComponent',
  components: {
    CaregiverList
  },data() {
    return {
      caregivers: [], 
      filterLocation: '',  
      filterRating: 0,  
      filteredCaregivers: []  
    };
  },
  methods: {

    async fetchCaregivers() {
      const apiService = new SearchesApiService();
      try {
        const response = await apiService.getAll();
        this.caregivers = response.data;
        this.filteredCaregivers = this.caregivers;  
      } catch (error) {
        console.error('Error al obtener los cuidadores:', error);
      }
    },
   
    filterCaregivers() {
      this.filteredCaregivers = this.caregivers.filter(caregiver => {
        const locationMatch = caregiver.location.toLowerCase().includes(this.filterLocation.toLowerCase()); 
        const ratingMatch = caregiver.rating >= this.filterRating;
        return locationMatch && ratingMatch;
      });
    }
  },
  watch: {

    filterLocation() {
      this.filterCaregivers();
    },
    filterRating() {
      this.filterCaregivers();
    }
  },
  async mounted() {
    await this.fetchCaregivers();
  }
};
</script>

<template>
  <div class="p-fluid search-container">
    <h2>Buscar cuidadores</h2>

    <div class="p-grid filters">
      
      <div class="p-col-12 p-md-6">
        <label for="location">Filtrar por localidad:</label>
        <pv-input-text v-model="filterLocation" placeholder="Buscar por localidad" id="location" />
      </div>

      
      <div class="p-col-12 p-md-6">
        <label for="rating">Filtrar por valoración mínima:</label>
        <pv-input-number
          v-model.number="filterRating"
          mode="decimal"
          placeholder="Valoración mínima"
          id="rating"
          :min="0"
          :max="5"
          :step="0.1"
        />
      </div>
    </div>

    <CaregiverList :caregivers="filteredCaregivers" />
  </div>
</template>


<style scoped>
.search-container {
  padding: 20px;
}

.filters {
  margin-bottom: 20px;
}
</style>
