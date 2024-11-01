<template>
  <div class="places-fare-section">
    <h3>Places & Fare</h3>
    <p>Fare per hour: {{ farePerHour }}</p>
  </div>
</template>

<script>
export default {
  name: "PlacesAndFareSection",
  props: {
    farePerHour: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.places-fare-section {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
}
</style>
