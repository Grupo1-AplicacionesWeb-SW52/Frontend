<script>
const defaultStyle = { width: '450px' };

export default {
  name: "reservation-create-and-edit",
  props: {
    reservation: null,
    visible: Boolean,
    edit: Boolean,
    size: 'default'
  },
  methods: {
    onCancel() {
      this.$emit('canceled');
    },
    onSave() {
      this.$emit('saved', this.reservation);
    },
    getHeaderTitle() {
      return `${this.edit ? 'Edit' : 'New'} Reservation`;
    },
    getSubmitLabel() {
      return this.edit ? 'Update' : 'Create';
    },
    getDialogStyle() {
      let dialogStyle = defaultStyle;
      dialogStyle = this.size === 'standard' ? { width: '600px' } : defaultStyle;
      dialogStyle = this.size === 'large' ? { width: '900px' } : defaultStyle;
      return dialogStyle;
    }
  }
}
</script>

<template>
  
  <pv-dialog v-bind:visible="visible" :modal="true" :style="getDialogStyle()" class="p-fluid" :header="getHeaderTitle()">
    <template #header>
      <div class="flex justify-content-start">
        <div>{{ getHeaderTitle() }}</div>
      </div>
    </template>

    <slot name="content"></slot>

    <template #footer>
      <div class="flex justify-content-end">
        <pv-button type="button" :label="getSubmitLabel()" class="p-button-text" icon="pi pi-check" @click="onSave" />
        <pv-button type="button" label="Cancel" severity="secondary" class="p-button-text" icon="pi pi-times" @click="onCancel" />
      </div>
    </template>
  </pv-dialog>
</template>
