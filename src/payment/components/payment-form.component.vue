<script>
export default {
  name: 'PaymentFormComponent',
  data() {
    return {
      newCard: {
        cardHolderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.newCard.cardHolderName && this.newCard.cardNumber && this.newCard.expirationDate && this.newCard.cvv) {
        this.$emit('addCard', { ...this.newCard });
        this.newCard = { cardHolderName: '', cardNumber: '', expirationDate: '', cvv: '' }; // Resetea el formulario
      }
    }
  }
}
</script>


<template>
  <div class="payment-form-container">
    <h2>Add New Card</h2>

    <form @submit.prevent="onSubmit" class="payment-form">

      <div class="form-group full-width">
        <label for="cardHolderName" class="label-highlight">Cardholder Name* </label>
        <input type="text" v-model="newCard.cardHolderName" id="cardHolderName" required />
      </div>

      <div class="form-group full-width">
        <label for="cardNumber" class="label-highlight">Card Number* </label>
        <input type="text" v-model="newCard.cardNumber" id="cardNumber" required />
      </div>

      <div class="form-row">

        <div class="form-group half-width">
          <label for="expirationDate" class="label-highlight">Expiration Date* </label>
          <input type="text" v-model="newCard.expirationDate" id="expirationDate" required />
        </div>

        <div class="form-group half-width">
          <label for="cvv" class="label-highlight" style="display: block; margin-bottom: 5px;">CVV*</label>
          <input type="password" v-model="newCard.cvv" id="cvv" required />
        </div>
      </div>

      <button type="submit" class="submit-button">Submit Payment</button>
    </form>
  </div>
</template>

<style scoped>

.label-highlight {
  color: darkblue; /* Cambia este valor al color que desees */
}

.payment-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.full-width {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  background-color: #e3e6f0;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.half-width {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  background-color: #e3e6f0;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
}

.submit-button {
  align-self: center;
  padding: 10px 20px;
  background-color: white;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 50px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.submit-button:hover {
  background-color: #007bff;
  color: white;
}

@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
  }
  .half-width {
    width: 100%;
  }
}
</style>
