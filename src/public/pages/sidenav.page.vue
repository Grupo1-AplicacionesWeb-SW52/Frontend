<template>
  <div class="layout">

    <div class="sidenav">
      <MenuComponent />
    </div>

    <div class="wrapper-content">
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import MenuComponent from '../components/menu.component.vue';

export default {
  components: {
    MenuComponent
  }
};
</script>
<style scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100vh; /* Ajustado para Vue */
}

.sidenav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 100%;
  background: linear-gradient(
    172.88deg,
    #156683 -11.67%,
    #25618b 47.61%,
    #156683 106.89%
  );
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 0;
}

.wrapper-content {
  width: 100%;
}

.content {
  width: 100%;
  padding: 24px 40px;
  overflow-y: auto;
}
</style>
