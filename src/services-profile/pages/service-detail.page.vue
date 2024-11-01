<template>
  <div class="page-container">
    <ServiceHeader :canEdit="canEdit" :serviceSearch="serviceSearch" />
    <div class="content-container">
      <CaregiverProfile :serviceSearch="serviceSearch" />
      <div class="details-container">
        <BiographySection :canEdit="canEdit" :serviceSearch="serviceSearch" />
        <ScheduleSection :canEdit="canEdit" :serviceSearch="serviceSearch" />
        <PlacesAndFareSection :farePerHour="farePerHour" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceHeader from "../component/service-header.component.vue";
import CaregiverProfile from "../component/caregiver-profile.component.vue";
import BiographySection from "../component/biography-section.component.vue";
import ScheduleSection from "../component/schedule-section.component.vue";
import PlacesAndFareSection from "../component/places-and-fare-section.component.vue";


export default {
  name: "ServiceDetailPage",
  components: {
    ServiceHeader,
    CaregiverProfile,
    BiographySection,
    ScheduleSection,
    PlacesAndFareSection,
  },
  data() {
    return {
      canEdit: true,
      serviceSearch: {
        caregiver: {
          fullName: "John Doe",
          profileImg: "https://via.placeholder.com/150",
          address: "123 Street",
          district: "Central",
        },
        description: "Experienced caregiver...",
        schedules: [
          { day: "Monday", workHours: { startTime: "08:00", endTime: "16:00" } },
          { day: "Tuesday", workHours: { startTime: "10:00", endTime: "18:00" } },
        ],
      },
      farePerHour: 20.0,
    };
  },
};
</script>

<style scoped>
.page-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.content-container {
  display: flex;
  gap: 24px;
}

.caregiver-profile {
  flex: 1;
  max-width: 300px;
}

.details-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

</style>
