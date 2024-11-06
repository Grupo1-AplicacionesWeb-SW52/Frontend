<template>
  <div class="p-card p-component p-card-outlined caregiver-card">
    <!-- Encabezado de la Tarjeta -->
    <div class="p-card-header p-d-flex p-jc-center p-ai-center">
      <img
        :src="serviceSearch.caregiver.profileImg"
        alt="A user"
        class="caregiver-img"
      />
    </div>

    <!-- Contenido de la Tarjeta -->
    <div class="p-card-body">
      <h3 class="caregiver-name p-text-center">{{ serviceSearch.caregiver.fullName }}</h3>
      <h4 class="caregiver-address p-text-center">{{ serviceSearch.caregiver.district }}</h4>
      <p class="caregiver-biography">{{ serviceSearch.description }}</p>
    </div>

    <!-- Acciones de la Tarjeta -->
    <div class="p-card-footer p-d-flex p-jc-center">
      <router-link :to="`./${serviceSearch.id}`" class="p-text-center">
        <pv-button label="See more" class="p-button-rounded p-button-outlined p-button-primary" />
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CaregiverCardComponent',
  components: {
  },
  props: {
    serviceSearch: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.caregiver-card {
  width: 100%;
  max-width: 400px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.caregiver-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
}

.caregiver-name {
  font-size: 1.5em;
  margin: 0.5em 0;
}

.caregiver-address {
  font-size: 1em;
  color: #757575;
}

.caregiver-biography {
  font-size: 1em;
  color: #333;
  margin-top: 1em;
}
</style>
