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
      <pv-button
          label="Reserve"
          icon="pi pi-calendar-plus"
          class="p-button-rounded p-button-outlined p-button-primary"
          @click="showConfirmDialog"
      />
    </div>

    <!-- Diálogo de Confirmación -->
    <Dialog
        header="Confirm Reservation"
        :visible="dialogVisible"
        modal
        :closable="false"
        @hide="closeDialog"
    >
      <p>Are you sure you want to make a reservation?</p>
      <div class="p-d-flex p-jc-end p-gap-2">
        <pv-button
            label="Cancel"
            class="p-button-text"
            @click="closeDialog"
        />
        <pv-button
            label="Accept"
            icon="pi pi-check"
            class="p-button-success"
            @click="confirmReservation"
        />
      </div>
    </Dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';  // Importación necesaria
import Button from 'primevue/button';  // Asegúrate de importar el Button también

export default {
  name: 'CaregiverCardComponent',
  props: {
    serviceSearch: {
      type: Object,
      required: true,
    },
  },
  components: {
    Dialog,  // Registrar el Dialog
    Button,  // Registrar el Button
  },
  setup(props, { emit }) {
    const dialogVisible = ref(false);

    const showConfirmDialog = () => {
      dialogVisible.value = true;
    };

    const closeDialog = () => {
      dialogVisible.value = false;
    };

    const confirmReservation = () => {
      emit('reserve', props.serviceSearch);
      dialogVisible.value = false;
    };

    return {
      dialogVisible,
      showConfirmDialog,
      closeDialog,
      confirmReservation,
    };
  },
};
</script>

<style scoped>
/* Mantén tus estilos anteriores */
</style>
