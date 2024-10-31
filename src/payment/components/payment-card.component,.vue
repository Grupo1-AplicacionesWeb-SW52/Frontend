<template>
  <div class="payment-card p-card p-component p-card-outlined">
    <!-- Encabezado de la tarjeta -->
    <div class="payment-card-header"></div>
    <!-- Contenido de la tarjeta -->
    <div class="payment-card-content">
      <p>Num: {{ card.cardNumber }}</p>
      <p>Exp. Date: {{ card.expirationDate }}</p>
      <p style="text-transform: uppercase">{{ card.cardHolder }}</p>
    </div>
    <!-- Acciones de la tarjeta -->
    <div class="payment-card-actions">
      <pv-button
        label="Delete"
        class="p-button-text p-button-danger"
        @click="handleDelete"
      />
      <pv-button
        label="Edit"
        class="p-button-text p-button-primary"
        @click="handleEdit"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete", "edit"],
  methods: {
    handleDelete() {
      this.$emit("delete", this.card);
    },
    handleEdit() {
      this.$emit("edit", this.card);
    },
  },
};
</script>

<style scoped>
.payment-card {
  margin-top: 24px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
}

.payment-card-header {
  background-color: #156683;
  height: 48px;
}

.payment-card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px 16px;
}
</style>
