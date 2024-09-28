<script>
import DataManager from "../../shared/components/data-manager.component.vue";
import ReservationItemCreateAndEditDialog from "../components/reservation-item-create-and-edit-dialog.component.vue";
import { Reservation } from "../model/reservation.entity.js";
import { ReservationsApiService } from "../services/reservations-api.service.js";

export default {
  name: "reservation-management",
  components: { ReservationItemCreateAndEditDialog, DataManager },
  data() {
    return {
      title: { singular: 'Reservation', plural: 'Reservations' },
      reservations: [],
      reservation: {},
      selectedReservations: [],
      statuses: [
        { label: 'Realized', value: 'realized' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Pending', value: 'pending' }
      ],
      reservationsService: null,
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false,
    };
  },
  methods: {
    // Helper Methods

    notifySuccessfulAction(message) {
      this.$toast.add({
        severity: "success",
        summary: "Success",
        detail: message,
        life: 3000,
      });
    },

    getSeverity(status) {
      switch (status) {
        case 'Realized': return 'success';
        case 'Cancelled': return 'error';
        case 'Pending': return 'info';
        default: return null;
      }
    },

    findIndexById(id) {
      return this.reservations.findIndex((reservation) => reservation.id === id);
    },

    // Event Handlers for Data Manager

    onNewItemEventHandler() {
      this.reservation = {};
      this.submitted = false;
      this.isEdit = false;
      this.createAndEditDialogIsVisible = true;
    },

    onEditItemEventHandler(item) {
      this.reservation = item;
      this.submitted = false;
      this.isEdit = true;
      this.createAndEditDialogIsVisible = true;
    },

    onDeleteItemEventHandler(item) {
      this.reservation = item;
      this.deleteReservation();
    },

    onDeleteSelectedItemsEventHandler(selectedItems) {
      this.selectedReservations = selectedItems;
      this.deleteSelectedReservations();
    },

    // Event Handlers for Reservation Dialog

    onCanceledEventHandler() {
      this.createAndEditDialogIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.reservation.caregiverId) {
        if (item.id) {
          this.updateReservation();
        } else {
          this.createReservation();
        }
      }
      this.createAndEditDialogIsVisible = false;
      this.isEdit = false;
    },

    // Data Actions

    createReservation() {
      this.reservation.id = 0;
      this.reservation = Reservation.fromDisplayableReservation(this.reservation);
      this.reservationsService.create(this.reservation).then((response) => {
        this.reservation = Reservation.toDisplayableReservation(response.data);
        this.reservations.push(this.reservation);
        this.notifySuccessfulAction("Reservation Created");
      });
    },

    updateReservation() {
      this.reservation = Reservation.fromDisplayableReservation(this.reservation);
      this.reservationsService.update(this.reservation.id, this.reservation).then((response) => {
        this.reservations[this.findIndexById(response.data.id)] =
            Reservation.toDisplayableReservation(response.data);
        this.notifySuccessfulAction("Reservation Updated");
      });
    },

    deleteReservation() {
      this.reservationsService.delete(this.reservation.id).then(() => {
        this.reservations = this.reservations.filter((r) => r.id !== this.reservation.id);
        this.reservation = {};
        this.notifySuccessfulAction("Reservation Deleted");
      });
    },

    deleteSelectedReservations() {
      this.selectedReservations.forEach((reservation) => {
        this.reservationsService.delete(reservation.id).then(() => {
          this.reservations = this.reservations.filter((r) => r.id !== reservation.id);
        });
      });
      this.notifySuccessfulAction("Reservations Deleted");
    },
  },
  created() {
    this.reservationsService = new ReservationsApiService();
    this.reservationsService.getAll().then((response) => {
      let reservations = response.data;
      this.reservations = reservations.map((reservation) =>
          Reservation.toDisplayableReservation(reservation)
      );
    });
  },
};
</script>

<template>
  <div class="w-full">
    <!-- Reservation Data Manager -->
    <data-manager
        :title="title"
        v-bind:items="reservations"
        v-on:new-item="onNewItemEventHandler"
        v-on:edit-item="onEditItemEventHandler($event)"
        v-on:delete-item="onDeleteItemEventHandler($event)"
        v-on:delete-selected-items="onDeleteSelectedItemsEventHandler($event)"
    >
      <template #custom-columns>
        <pv-column :sortable="true" field="id" header="Id" style="min-width: 12rem" />
        <pv-column :sortable="true" field="caregiverId" header="Caregiver ID" style="min-width: 16rem" />
        <pv-column :sortable="true" field="reservationDate" header="Reservation Date" style="min-width: 16rem" />
        <pv-column :sortable="true" field="totalTime" header="Total Time" style="min-width: 16rem" />
        <pv-column :sortable="true" field="status" header="Status" style="min-width: 16rem">
          <template #body="slotProps">
            <pv-tag :severity="getSeverity(slotProps.data.status)" :value="slotProps.data.status" />
          </template>
        </pv-column>
      </template>
    </data-manager>

    <!-- Reservation Item Create and Edit Dialog -->
    <reservation-item-create-and-edit-dialog
        :statuses="statuses"
        :item="reservation"
        :edit="isEdit"
        :visible="createAndEditDialogIsVisible"
        v-on:canceled="onCanceledEventHandler"
        v-on:saved="onSavedEventHandler($event)"
    />
  </div>
</template>

<style scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 960px) {
  :deep(.p-toolbar) {
    flex-wrap: wrap;
  }
}

@media (min-width: 1024px) {
  .reservations {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
