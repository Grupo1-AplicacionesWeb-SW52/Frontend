<template>
  <div>
    <h2 class="dialog-title">
      {{ editMode ? "Update your card" : "Add a new card" }}
    </h2>
    <form @submit.prevent="onSubmit" class="card-form">
      <!-- Campo de Número de Tarjeta -->
      <div class="form-field--full">
        <pv-input-text
          v-model="cardForm.cardNumber"
          placeholder="Card number"
          required
          class="p-inputtext-sm p-d-block"
        />
      </div>

      <!-- Campo de Titular de la Tarjeta -->
      <div class="form-field--full">
        <pv-input-text
          v-model="cardForm.cardHolder"
          placeholder="Card holder"
          required
          class="p-inputtext-sm p-d-block"
        />
      </div>

      <!-- Campos de Fecha de Expiración y CVV -->
      <div class="form-row">
        <pv-input-text
          v-model="cardForm.expirationDate"
          placeholder="Exp. Date"
          required
          class="p-inputtext-sm"
        />
        <pv-input-text
          v-model="cardForm.cvv"
          placeholder="CVV"
          required
          class="p-inputtext-sm"
        />
      </div>

      <!-- Botones de Acción -->
      <div class="p-d-flex p-jc-end p-mt-3">
        <pv-button
          label="Cancel"
          class="btn btn--secondary p-button-outlined"
          @click="onCancel"
        />
        <pv-button
          label="Add"
          v-if="!editMode"
          class="btn btn--primary p-button-raised p-ml-2"
          type="submit"
        />
        <pv-button
          label="Update"
          v-if="editMode"
          class="btn btn--primary p-button-raised p-ml-2"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<script>
import PaymentMethodosService from '../services/payment-methodos.service';

export default {
  name: "CreateEditPaymentDialog",
  props: {
    data: Object,
  },
  setup(props, { emit }) {
    const dialog = useDialog();

    // Modo edición y formulario reactivo
    const editMode = ref(!!props.data);
    const cardForm = reactive({
      cardNumber: props.data?.cardNumber || "",
      cardHolder: props.data?.cardHolder || "",
      cvv: props.data?.cvv || "",
      expirationDate: props.data?.expirationDate || "",
    });

    const user = JSON.parse(window.localStorage.getItem("user") || "{}");

    // Función para cerrar el diálogo
    const onCancel = () => {
      dialog.close();
    };

    // Método para agregar una nueva tarjeta
    const onAddCard = async () => {
      const card = {
        cardNumber: cardForm.cardNumber,
        cardHolder: cardForm.cardHolder,
        cvv: cardForm.cvv,
        expirationDate: cardForm.expirationDate,
      };

      // Asigna el tutorId o caregiverId basado en el rol
      if (user.role === "tutor") card.tutorId = user.id;
      else if (user.role === "caregiver") card.caregiverId = user.id;

      try {
        const createdCard = await PaymentMethodsService.create(card);
        dialog.close(createdCard);
      } catch (error) {
        console.error("Error adding card:", error);
      }
    };

    // Método para editar una tarjeta existente
    const onEditCard = async () => {
      try {
        const updatedCard = await PaymentMethodsService.patch(props.data.id, cardForm);
        dialog.close(updatedCard);
      } catch (error) {
        console.error("Error updating card:", error);
      }
    };

    // Manejo del envío del formulario
    const onSubmit = () => {
      if (editMode.value) {
        onEditCard();
      } else {
        onAddCard();
      }
    };

    return {
      cardForm,
      editMode,
      onSubmit,
      onCancel,
    };
  },
};
</script>

<style scoped>
.dialog-title {
  text-align: center;
}

.card-form {
  padding-top: 8px;
}

.form-field--full {
  width: 100%;
  margin-bottom: 16px;
}

.form-row {
  display: flex;
  gap: 16px;
}

.btn--secondary {
  color: #156683 !important;
}

.btn--primary {
  background: #156683 !important;
}
</style>
