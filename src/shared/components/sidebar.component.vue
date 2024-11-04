<template>
  <div class="sidebar">
    <div class="sidebar-menu">
      <pv-button icon="pi pi-search" label="Search Caregivers" class="p-button-text" />
      <pv-button icon="pi pi-book" label="Reservations" class="p-button-text" />
      <pv-button icon="pi pi-headphones" label="Chat Online" class="p-button-text" />
    </div>
    <div class="sidebar-footer">
      <pv-button icon="pi pi-sign-out" label="Logout" class="p-button-text-end" />
      <div class="user-profile">
        <div class="profile-placeholder"></div> <!-- Círculo que simula la imagen de perfil -->
        <span>User Name</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #0D3A5A;
  padding: 20px;
}
.p-button-text {
  font-size: 18px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 200px;
  color: white;
}

.sidebar-footer {
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  color: white;
}
.p-button-text-end {
  gap: 20px;
}

.profile-placeholder {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd; /* Color de fondo para simular un contenedor de imagen */
  margin-top: 10px;
}
.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
