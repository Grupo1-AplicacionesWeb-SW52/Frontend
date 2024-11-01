<template>
  <header class="section-header">
    <h1 class="header-title">
      {{ canEdit ? "Your offer description" : `Detail of ${serviceSearch.caregiver.fullName}'s caregiver service` }}
    </h1>

    <router-link v-if="!canEdit" to="../" class="go-back-btn">
      <i class="pi pi-arrow-left"></i>
      <span>Go back</span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "ServiceHeader",
  props: {
    canEdit: {
      type: Boolean,
      required: true,
    },
    serviceSearch: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.section-header {
  margin-bottom: 24px;
}
.header-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0d3a5a;
}
.go-back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0d3a5a;
  text-decoration: none;
  font-weight: 600;
}
</style>
