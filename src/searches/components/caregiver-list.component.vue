<script>
import CaregiverCardComponent from './caregiver-card.component.vue';

export default {
  name: 'caregiver-list',
  components: {
    CaregiverCardComponent
  },
  props: {
    caregivers: {
      'type': Array,
      required: true
    }
  },
};
</script>

<template>
  <div class="p-grid caregiver-list">
    <div 
      v-for="caregiver in caregivers" 
      :key="caregiver.id" 
      class="p-col-12 p-md-6 p-lg-4">
      <CaregiverCardComponent :caregiver="caregiver" />
    </div>
  </div>
</template>


<style scoped>
.caregiver-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 16px; 
  padding: 20px;
}
</style>