<template>
  <div class="payment-methods-container">
    <h1 class="title">Your payment methods</h1>
    <p class="description">
      In this section, you manage your payment wallet by registering your cards and setting up preferred payment methods for a seamless checkout experience.
    </p>

    <!-- Botones de Acción -->
    <div class="action-buttons">
      <pv-button
        label="Add a new card"
        class="btn btn--add-card"
        icon="pi pi-plus"
        @click="addEditCard"
      />
      <pv-button
        label="History"
        class="btn btn--history"
        icon="pi pi-history"
        @click="$router.push('/history')"
      />
    </div>

    <!-- Lista de Tarjetas -->
    <div class="card-list">
      <div
        class="card-container"
        v-for="card in cards"
        :key="card.id"
      >
        <PaymentCard
          :card="card"
          @delete="removeCard"
          @edit="addEditCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PaymentCard from "../components/payment-card.component,.vue";
import CreateEditPaymentDialog from "../components/create-edit-payment-dialog.component.vue";
import DeletePaymentDialog from "../components/delete-payment-dialog.component.vue";
import PaymentMethodosService from "../services/payment-methodos.service.js";

export default {
  name: "PaymentPage",
  components: {
    PaymentCard,
  },
  setup() {
  
    const cards = ref([]);
    const user = JSON.parse(window.localStorage.getItem("user") || "{}");

    const loadCards = async () => {
      try {
        cards.value = await PaymentMethodosService.getByUserId(user.id, user.role);
      } catch (error) {
        console.error("Error loading cards:", error);
      }
    };

    const addEditCard = (card = null) => {
      dialog.open(CreateEditPaymentDialog, {
        data: card,
        header: card ? "Edit Card" : "Add New Card",
      }).onClose((result) => {
        if (result) {
          if (card) {
            const index = cards.value.findIndex((c) => c.id === result.id);
            if (index !== -1) cards.value[index] = result;
            toast.add({ severity: "success", summary: "Success", detail: "Card updated successfully", life: 2000 });
          } else {
            cards.value.push(result);
            toast.add({ severity: "success", summary: "Success", detail: "Card added successfully", life: 2000 });
          }
        }
      });
    };

    const removeCard = (card) => {
      dialog.open(DeletePaymentDialog, {
        header: "Confirm Deletion",
      }).onClose((result) => {
        if (result === "delete") {
          PaymentMethodsService.delete(card.id)
            .then(() => {
              cards.value = cards.value.filter((c) => c.id !== card.id);
              toast.add({ severity: "info", summary: "Card Removed", detail: "Card removed successfully", life: 2000 });
            })
            .catch((error) => console.error("Error deleting card:", error));
        }
      });
    };

    onMounted(loadCards);

    return {
      cards,
      addEditCard,
      removeCard,
    };
  },
};
</script>

<style scoped>
.payment-methods-container {
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.description {
  font-size: 14px;
  margin-bottom: 20px;
  color: #666;
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

.card-container {
  width: 300px;
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

.payment-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.payment-card-header {
  background-color: #156683;
  height: 48px;
}

.payment-card-content {
  padding: 16px;
  background-color: #f0f4f8;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-card-content p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.payment-card-actions {
  padding: 16px;
  display: flex;
  justify-content: space-between;
}

.payment-card-actions .btn {
  font-size: 12px;
  padding: 6px 12px;
}
</style>
