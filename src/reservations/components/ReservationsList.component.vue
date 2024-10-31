<template>
  <div>
    <div v-for="reservation in reservations" :key="reservation.id">
      <ReservationCard :reservation="reservation" />
    </div>
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