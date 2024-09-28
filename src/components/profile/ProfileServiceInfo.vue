<template>
  <div class="profile-service-info">
    <h2>Profile Service Info</h2>
    <p><strong>Working Days:</strong> {{ serviceInfo.workingDays.join(', ') }}</p>
    <p><strong>Schedule:</strong> {{ serviceInfo.schedule }}</p>
    <p><strong>Service Areas:</strong> {{ serviceInfo.serviceAreas.join(', ') }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileServiceInfo',
  props: {
    serviceInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.profile-service-info {
  padding: 1rem;
}
</style>
