<template>
  <div class="reservation-list">
    <ReservationCard
        v-for="reservation in reservations"
        :key="reservation.id"
        :reservation="reservation"
    />
  </div>
</template>

<script>
import ReservationCard from './ReservationCard.component.vue';

export default {
  name: 'ReservationList',
  components: {
    ReservationCard
  },
  props: {
    reservations: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.reservation-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
