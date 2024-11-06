<template>
  <div class="payment-methods-container">
    <h1>Your payment methods</h1>
    <p>
      In this section, you manage your payment wallet by registering your cards
      and setting up preferred payment methods for a seamless checkout experience.
    </p>

    <!-- Botones de Acción -->
    <div class="action-buttons">
      <pv-button
        label="Add a card"
        icon="pi pi-plus"
        class="btn btn--add-card"
        @click="openAddEditDialog"
      />
      <pv-button
        label="History"
        icon="pi pi-history"
        class="btn btn--history"
        @click="goToHistory"
      />
    </div>

    <!-- Lista de Tarjetas -->
    <div class="card-list">
      <PaymentCard
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @delete="confirmRemoveCard(card)"
        @edit="openAddEditDialog(card)"
      />
    </div>

    <!-- Diálogo para Añadir/Editar Tarjeta -->
    <CreateEditPaymentDialog
      v-if="isAddEditDialogOpen"
      :data="selectedCard"
      @close="handleAddEditDialogClose"
    />

    <!-- Diálogo para Confirmar Eliminación -->
    <DeletePaymentDialog
      v-if="isDeleteDialogOpen"
      @close="handleDeleteDialogClose"
    />
  </div>
</template>

<script>
import PaymentCard from "../components/payment-card.component.vue"
import CreateEditPaymentDialog from "../components/create-edit-payment-dialog.component.vue";
import DeletePaymentDialog from "../components/delete-payment-dialog.component.vue";
import PaymentMethodsService from "../services/payment-methods.service.js";

export default {
  name: "PaymentPage",
  components: {
    PaymentCard,
    CreateEditPaymentDialog,
    DeletePaymentDialog,
  },
  data() {
    return {
      cards: [],
      isAddEditDialogOpen: false,
      isDeleteDialogOpen: false,
      selectedCard: null,
      cardToDelete: null,
      user: JSON.parse(window.localStorage.getItem("user") || "{}"),
    };
  },
  mounted() {
    this.loadCards();
  },
  methods: {
    async loadCards() {
      try {
        this.cards = await PaymentMethodsService.getByUserId(this.user.id, this.user.role);
      } catch (error) {
        console.error("Error loading cards:", error);
      }
    },
    openAddEditDialog(card = null) {
      this.selectedCard = card;
      this.isAddEditDialogOpen = true;
    },
    handleAddEditDialogClose(result) {
      this.isAddEditDialogOpen = false;
      if (result) {
        const index = this.cards.findIndex((c) => c.id === result.id);
        if (index !== -1) {
          this.cards[index] = result;
          toast.add({ severity: "success", summary: "Success", detail: "Card updated successfully", life: 2000 });
        } else {
          this.cards.push(result);
          toast.add({ severity: "success", summary: "Success", detail: "Card added successfully", life: 2000 });
        }
      }
    },
    confirmRemoveCard(card) {
      this.cardToDelete = card;
      this.isDeleteDialogOpen = true;
    },
    handleDeleteDialogClose(result) {
      this.isDeleteDialogOpen = false;
      if (result === "delete" && this.cardToDelete) {
        PaymentMethodsService.delete(this.cardToDelete.id)
          .then(() => {
            this.cards = this.cards.filter((c) => c.id !== this.cardToDelete.id);
            toast.add({ severity: "info", summary: "Success", detail: "Card removed successfully", life: 2000 });
          })
          .catch((error) => console.error("Error deleting card:", error));
      }
    },
    goToHistory() {
      this.$router.push("/history");
    },
  },
};
</script>

<style scoped>
.payment-methods-container {
  padding: 20px;
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.btn {
  border-radius: 5px;
  width: 100%;
}

.btn--add-card {
  background-color: #156683 !important;
  color: white;
}

.btn--history {
  color: #156683 !important;
  border-color: #156683 !important;
}

.payment-card-content p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.payment-card-actions .btn {
  font-size: 12px;
  padding: 6px 12px;
}
</style>
