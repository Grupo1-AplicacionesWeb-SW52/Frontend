<template>
  <div class="schedule-section">
    <h3>Schedule</h3>
    <ul v-if="!scheduleEditMode">
      <li v-for="(schedule, index) in serviceSearch.schedules" :key="index">
        {{ schedule.day }}: {{ schedule.workHours.startTime }} - {{ schedule.workHours.endTime }}
      </li>
    </ul>
    <button v-if="canEdit && !scheduleEditMode" @click="scheduleEditMode = true">Edit</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ScheduleSection",
  props: {
    serviceSearch: {
      type: Object,
      required: true,
    },
    canEdit: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const scheduleEditMode = ref(false);

    return { scheduleEditMode };
  },
};
</script>

<style scoped>
.schedule-section {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
}
</style>
