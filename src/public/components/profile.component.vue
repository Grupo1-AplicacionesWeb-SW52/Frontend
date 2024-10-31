<script>
export default {
  // Definimos la prop user como opcional y de tipo objeto
  props: {
    user: {
      type: Object,
      required: false // Permitir que sea undefined, como en Angular
    }
  }
};
</script>

<template>
  <div class="profile">
    <img :src="user?.profileImg" alt="User Image" class="profile-img" />
    <h3>{{ user?.fullName }}</h3>
    <p>{{ user?.email }}</p>
  </div>
</template>

<style scoped>
.profile {
  text-align: center;
  margin-bottom: 20px;
}

.profile-img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>
