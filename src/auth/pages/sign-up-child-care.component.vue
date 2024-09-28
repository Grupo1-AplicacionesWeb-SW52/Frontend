<script>
import router from '../../router/index.js';
import {UserChildCareService} from "../services/user-child-care.service.js";

export default {
  name: 'SignUpChildCareComponent',
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
      const userService = new UserChildCareService();
      try {
        await userService.signUp(this.name, this.surname, this.email, this.document, this.phoneNumber, this.password);
        this.successMessage = 'User registered successfully!';
        this.errorMessage = '';
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
        <pv-input-text id="name" v-model="name" required placeholder="Enter your name" />
      </div>
      <div class="form-group">
        <label for="surname">Surname:</label>
        <pv-input-text id="surname" v-model="surname" required placeholder="Enter your surname" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <pv-input-text type="email" id="email" v-model="email" required placeholder="Enter your email" />
      </div>
      <div class="form-group">
        <label for="document">Document:</label>
        <pv-input-textt id="document" v-model="document" required placeholder="Enter your document number" />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <pv-input-text id="phoneNumber" v-model="phoneNumber" required placeholder="Enter your phone number" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <pv-password id="password" v-model="password" required placeholder="Enter your password" toggleMask />
      </div>
      <pv-button type="submit" label="Sign Up" class="p-button-raised p-button-rounded" />
    </form>
    <p-message v-if="errorMessage" severity="error" :content="errorMessage"></p-message>
    <p-message v-if="successMessage" severity="success" :content="successMessage"></p-message>
  </div>
</template>

<style scoped>
.sign-up-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to bottom, #396583, #013b58);
}

h2 {
  color: white;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
}

label {
  font-size: 14px;
  color: white;
  margin-bottom: 8px;
  display: block;
}
</style>
