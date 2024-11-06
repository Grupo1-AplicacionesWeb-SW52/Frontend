<template>
  <div>
    <h2>Are you sure?</h2>
    <p>All your reservations made by you will keep the card number.</p>
    <div class="dialog-actions">
      <pv-button
        label="Cancel"
        class="btn btn--secondary"
        @click="onCancel"
      />
      <pv-button
        label="Delete"
        class="btn btn--primary"
        @click="onDelete"
        autofocus
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DeletePaymentDialog",
  emits: ["close"],
  methods: {
    onCancel() {
      this.$emit("close", "cancel");
    },
    onDelete() {
      this.$emit("close", "delete");
    },
  },
};
</script>

<style scoped>
.btn {
  border-radius: 5px;
}

.btn--secondary {
  color: #156683 !important;
}

.btn--primary {
  background: #156683 !important;
  color: #fff;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}
</style>
