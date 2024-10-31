<template>
  <div class="payment-history-container">
    <h1 class="header-title">Your payment history</h1>
    <pv-button label="Go back" icon="pi pi-arrow-left" @click="$router.back()" />

    <pv-data-table :value="paymentListData" class="payment-history-table">
      <pv-column field="id" header="No." />
      <pv-column field="date" header="Created at" />
      <pv-column field="totalAmount" header="Amount" :body="formatAmount" />
      <pv-column
        field="fullName"
        :header="user.role === 'tutor' ? 'Caregiver' : 'Tutor' + `'s name`"
        :body="formatName"
      />
      <pv-column field="cardNumber" header="Card number" :body="formatCardNumber" />
    </pv-data-table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import PaymentServices from '../services/payment.services';

export default {
  name: 'PaymentHistory',
  setup() {
    const paymentListData = ref([]);
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const loadPayments = async () => {
      try {
        if (user.role === 'tutor') {
          paymentListData.value = await PaymentServices.getByTutorId(user.id);
        } else {
          paymentListData.value = await PaymentServices.getByCaregiverId(user.id);
        }
      } catch (error) {
        console.error('Error loading payment history:', error);
      }
    };

    const formatAmount = (rowData) => `S/ ${rowData.totalAmount?.toFixed(2)}`;
    const formatName = (rowData) =>
      user.role === 'tutor' ? rowData.caregiver.fullName : rowData.tutor.fullName;
    const formatCardNumber = (rowData) =>
      user.role === 'tutor'
        ? rowData.tutorPaymentMethod.cardNumber
        : rowData.caregiverPaymentMethod.cardNumber;

    onMounted(loadPayments);

    return {
      paymentListData,
      user,
      formatAmount,
      formatName,
      formatCardNumber,
    };
  },
};
</script>

<style scoped>
.payment-history-container {
  padding: 20px;
}
.header-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #0d3a5a;
}
.payment-history-table {
  width: 100%;
  margin-top: 20px;
}
</style>
