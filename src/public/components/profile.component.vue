<template>
  <div class="container">
    <div class="profile-img">
      <img :src="user?.profileImg" alt="Profile picture" />
    </div>
    <div class="profile-description">
      <p class="profile-name">{{ user?.fullName }}</p>
      <p class="profile-role">{{ user?.role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
}

.profile-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-name {
  font-size: 20px;
  font-weight: 600;
}

.profile-role {
  font-size: 14px;
  text-transform: capitalize;
}
</style>
