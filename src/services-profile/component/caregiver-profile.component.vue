<template>
  <div class="caregiver-profile">
    <img class="caregiver-img" :src="serviceSearch.caregiver.profileImg" :alt="serviceSearch.caregiver.fullName" />
    <p class="caregiver-card-name">{{ serviceSearch.caregiver.fullName }}</p>
    <div class="caregiver-card-list">
      <div class="caregiver-card-item"><i class="pi pi-user"></i> <span>24 years old</span></div>
      <div class="caregiver-card-item"><i class="pi pi-map-marker"></i> <span>{{ serviceSearch.caregiver.address }}, {{ serviceSearch.caregiver.district }}</span></div>
      <div class="caregiver-card-item"><i class="pi pi-calendar"></i> <span>2 years in SafeChild</span></div>
      <div class="caregiver-card-item"><i class="pi pi-briefcase"></i> <span>42 services realized</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaregiverProfile",
  props: {
    serviceSearch: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.caregiver-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 340px;
}
.caregiver-img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}
.caregiver-card-name {
  font-size: 20px;
  font-weight: 600;
  color: #0d3a5a;
}
.caregiver-card-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.caregiver-card-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
