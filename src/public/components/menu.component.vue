<template>
  <div>
    <!-- Perfil del Usuario -->
    <ProfileComponent :user="user" />

    <!-- Lista de Menú -->
    <ul class="nav-menu p-list">
      <li
        v-for="(item, index) in filteredMenuList"
        :key="index"
        class="nav-menu-item"
      >
        <router-link :to="item.link" class="nav-menu-item__link" active-class="active">
          <i :class="`pi pi-${item.icon}`"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>

    <!-- Menú de Configuración y Logout -->
    <ul class="nav-menu p-list" style="margin-top: auto">
      <li class="nav-menu-item">
        <router-link to="/" class="nav-menu-item__link">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </router-link>
      </li>
      <li class="nav-menu-item">
        <router-link to="/sign-in-father" @click.native.prevent="logout" class="nav-menu-item__link">
          <i class="pi pi-sign-out"></i>
          <span>Logout</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ProfileComponent from './profile.component.vue'; // Importamos el componente

export default {
  components: { ProfileComponent },
  data() {
    return {
      user: null, // Información del usuario
      menuList: [
        { name: 'Search Caregivers', link: '/search-caregiver', icon: 'search', role: 'tutor' },
        { name: 'Your Reservations', link: '/reservations', icon: 'book', role: 'all' },
        { name: 'Payment methods', link: '/payment', icon: 'credit-card', role: 'all' },
        { name: 'Your service', link: '/your-service', icon: 'book', role: 'caregiver' },
        { name: 'Online Chat', link: '/chat', icon: 'headphones', role: 'all' }

      ],
      filteredMenuList: []
    };
  },
  created() {
    // Obtener el usuario almacenado en localStorage
    const userData = window.localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.filterMenu();
    }
  },
  methods: {
    filterMenu() {
      // Filtrar el menú según el rol del usuario
      this.filteredMenuList = this.menuList.filter(
        (menu) => menu.role === this.user.role || menu.role === 'all'
      );
    },
    logout(event) {
      event.preventDefault();
      window.localStorage.removeItem('user');
      this.$router.push('/sign-in-father'); 
    }
  }
};
</script>
<style scoped>
.menu-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-block: 24px;
}

.nav-menu-item {
  width: 100%;
  padding: 12px 24px;
}

.nav-menu-item__link {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.nav-menu-item__link.active {
  background: #003547;
}
</style>