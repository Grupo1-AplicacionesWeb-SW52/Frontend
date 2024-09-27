<script>
import { UserFatherService } from '../services/user-father.service.js';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import router from '../../router/index.js';

export default {
  name: 'SignUpComponent',
  components: {
    InputText,
    Password,
    Button,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      document: '',
      phoneNumber: '',
      password: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async handleSignUp() {
      const userService = new UserFatherService();
      try {
        await userService.signUp(this.name, this.surname, this.email, this.document, this.phoneNumber, this.password);
        this.successMessage = 'User registered successfully!';
        this.errorMessage = '';
        // Redirigir al SignIn después de un registro exitoso
        setTimeout(() => {
          router.push('/sign-in');
        }, 1500);
      } catch (error) {
        this.errorMessage = error.message || 'An error occurred during sign-up.';
        this.successMessage = '';
      }
    },
  },
};
</script>

<template>
  <div class="sign-up-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <div class="form-group">
        <label for="name">Name:</label>
        <InputText id="name" v-model="name" required placeholder="Enter your name" />
      </div>
      <div class="form-group">
        <label for="surname">Surname:</label>
        <InputText id="surname" v-model="surname" required placeholder="Enter your surname" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <InputText type="email" id="email" v-model="email" required placeholder="Enter your email" />
      </div>
      <div class="form-group">
        <label for="document">Document:</label>
        <InputText id="document" v-model="document" required placeholder="Enter your document number" />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <InputText id="phoneNumber" v-model="phoneNumber" required placeholder="Enter your phone number" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <Password id="password" v-model="password" required placeholder="Enter your password" />
      </div>
      <Button type="submit" label="Sign Up" />
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success">{{ successMessage }}</div>
  </div>
</template>


<style>
.sign-up-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>
