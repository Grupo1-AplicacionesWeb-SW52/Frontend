<template>
  <pv-dialog
    v-model:visible="isDialogOpen"
    :header="dialogTitle"
    modal
    closable
    @hide="closeDialog"
  >
    <form @submit.prevent="onSubmit" class="card-form">
      <div class="dialog-title">
        <h2>{{ editMode ? "Update your card" : "Add a new card" }}</h2>
      </div>

      <!-- Campos del formulario -->
      <div class="form-field--full">
        <label for="cardNumber">Card Number</label>
        <pv-input-text id="cardNumber" v-model="form.cardNumber" required />
      </div>

      <div class="form-field--full">
        <label for="cardHolder">Card Holder</label>
        <pv-input-text id="cardHolder" v-model="form.cardHolder" required />
      </div>

      <div class="form-row">
        <div class="form-field--half">
          <label for="expirationDate">Exp. Date</label>
          <pv-input-text id="expirationDate" v-model="form.expirationDate" required />
        </div>

        <div class="form-field--half">
          <label for="cvv">CVV</label>
          <pv-input-text id="cvv" v-model="form.cvv" required />
        </div>
      </div>

      <!-- Botones de Acción -->
      <div class="dialog-footer">
        <pv-button label="Cancel" class="p-button-text" @click="closeDialog" />
        <pv-button :label="editMode ? 'Update' : 'Add'" type="submit" />
      </div>
    </form>
  </pv-dialog>
</template>

<script>
import PaymentMethodosService from '../services/payment-methodos.service';

export default {
  name: 'CreateEditPaymentDialog',
  props: {
    data: Object,
  },
  data() {
    return {
      isDialogOpen: true,
      editMode: !!this.data,
      form: {
        cardNumber: this.data?.cardNumber || '',
        cardHolder: this.data?.cardHolder || '',
        expirationDate: this.data?.expirationDate || '',
        cvv: this.data?.cvv || '',
      },
    };
  },
  computed: {
    dialogTitle() {
      return this.editMode ? 'Update your card' : 'Add a new card';
    },
  },
  methods: {
    closeDialog() {
      this.isDialogOpen = false;
      this.$emit('close');
    },
    async onAddCard() {
      try {
        const user = JSON.parse(window.localStorage.getItem('user') || '{}');
        const card = { ...this.form };

        // Asigna el rol del usuario al nuevo objeto de tarjeta
        if (user.role === 'tutor') {
          card.tutorId = user.id;
        } else if (user.role === 'caregiver') {
          card.caregiverId = user.id;
        }

        // Llamada al servicio para crear la tarjeta
        const createdCard = await PaymentMethodosService.create(card);

        if (createdCard) {
          this.$emit('close', createdCard);
          this.closeDialog();
        } else {
          console.error("Error: No se devolvieron datos de la tarjeta creada.");
        }
      } catch (error) {
        console.error("Error al crear la tarjeta:", error);
      }
    },
    async onEditCard() {
      try {
        const updatedCard = await PaymentMethodosService.patch(this.data.id, this.form);

        if (updatedCard) {
          this.$emit('close', updatedCard);
          this.closeDialog();
        } else {
          console.error("Error: No se devolvieron datos de la tarjeta actualizada.");
        }
      } catch (error) {
        console.error("Error al actualizar la tarjeta:", error);
      }
    },
    onSubmit() {
      if (this.editMode) {
        this.onEditCard();
      } else {
        this.onAddCard();
      }
    },
  },
};
</script>

<style scoped>
.dialog-title {
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
  color: #333; /* Color del título */
  margin-bottom: 1em;
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

.form-field--half {
  flex: 1;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

button {
  font-size: 1em;
}

p-button {
  color: #156683;
}

p-button.p-button-text {
  color: #666; /* Color para el botón Cancel */
}

input {
  font-size: 1em;
  color: #333; /* Color del texto dentro de los campos */
  background-color: #fff; /* Fondo blanco */
}

label {
  font-size: 0.9em;
  font-weight: bold;
  color: #333; /* Color de las etiquetas */
}
</style>
