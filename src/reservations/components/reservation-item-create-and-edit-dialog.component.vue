<script>
export default {
  name: "reservation-item-create-and-edit-dialog",
  props: {
    visible: Boolean,
    reservation: {
      type: Object,
      default: () => ({
        id: null,
        caregiver: '',
        workLocation: '',
        reservationDate: '',
        totalTimework: 0,
        totalFair: 0,
        status: 'Pending'
      }),
    },
    editMode: Boolean
  },
  methods: {
    onCancel() {
      this.$emit('close-dialog');
    },
    onSave() {
      this.$emit('save-reservation', this.reservation);
    },
    getHeaderTitle() {
      return this.editMode ? 'Edit Reservation' : 'New Reservation';
    },
    getSubmitLabel() {
      return this.editMode ? 'Update' : 'Create';
    }
  }
}
</script>

<template>
  <pv-dialog v-bind:visible="visible" :modal="true" :header="getHeaderTitle()" class="p-fluid" :style="{width: '600px'}">

    <template #header>
      <div class="flex justify-content-start">
        <div>{{ getHeaderTitle() }}</div>
      </div>
    </template>

    <slot name="content">
      <div class="field">
        <label for="caregiver">Caregiver</label>
        <pv-input-text v-model="reservation.caregiver" id="caregiver" required />
      </div>

      <div class="field">
        <label for="workLocation">Work Location</label>
        <pv-input-text v-model="reservation.workLocation" id="workLocation" required />
      </div>

      <div class="field">
        <label for="reservationDate">Reservation Date</label>
        <pv-calendar v-model="reservation.reservationDate" id="reservationDate" required />
      </div>

      <div class="field">
        <label for="totalTimework">Total Timework (hours)</label>
        <pv-input-number v-model="reservation.totalTimework" id="totalTimework" min="1" required />
      </div>

      <div class="field">
        <label for="totalFair">Total Fair ($)</label>
        <pv-input-number v-model="reservation.totalFair" id="totalFair" min="0" required />
      </div>

      <div class="field">
        <label for="status">Status</label>
        <pv-dropdown v-model="reservation.status" :options="['Pending', 'Realized', 'Cancelled']" required />
      </div>
    </slot>

    <template #footer>
      <div class="flex justify-content-end">
        <pv-button type="button" :label="getSubmitLabel()" class="p-button-text" icon="pi pi-check" @click="onSave" />
        <pv-button type="button" label="Cancel" severity="secondary" class="p-button-text" icon="pi pi-times" @click="onCancel" />
      </div>
    </template>
  </pv-dialog>
</template>
