<script>
import PaymentFormComponent from '../components/payment-form.component.vue';

export default {
  name: 'PaymentPageComponent',
  components: {
    PaymentFormComponent,
  },
  data() {
    return {
      cards: [],
      showForm: false,
      paymentSuccess: false,
    };
  },
  methods: {
    addCard(newCard) {
      this.cards.push(newCard);
      this.showForm = false;
    },
    removeCard(card) {
      this.cards = this.cards.filter(c => c !== card);
    },
  },
};
</script>

<template>
  <div class="payment-methods-container">
    <h1>Your payment methods</h1>
    <p>
      In this area, you can oversee your payment wallet by adding your cards and configuring your preferred payment methods for a smooth checkout process.
    </p>

    <button @click="showForm = true" class="primary-button">
      <span class="icon">+</span> Add a card
    </button>

    <PaymentFormComponent v-if="showForm" @addCard="addCard" />

    <div class="card-list">
      <div v-for="(card, index) in cards" :key="index" class="payment-card">
        <div class="card-header">
          <h3>Number: {{ card.cardNumber }}</h3>
          <button @click="removeCard(card)" class="icon-button danger">
            <span class="icon">x</span>
          </button>
        </div>
        <h4>F.V: {{ card.expirationDate }}</h4>
        <div class="card-content">
          {{ card.cardHolderName }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.payment-methods-container {
  padding: 20px;
  border-radius: 8px; /* Borde redondeado */
  background-color: #f9f9f9; /* Fondo claro */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra */
}

.payment-methods-container h1 {
  font-size: 24px;
  font-weight: bold;
}

.payment-methods-container p {
  font-size: 14px;
  margin-bottom: 20px;
  color: #666;
}

.primary-button {
  margin-bottom: 20px;
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.primary-button:hover {
  background-color: #004c99;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.payment-card {
  width: 200px;
  position: relative;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  font-size: 15px;
  color: #333;
}

.icon-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.payment-card h3 {
  font-size: 16px;
  font-weight: bold;
}

.payment-card h4 {
  font-size: 14px;
  color: #888;
}
</style>
