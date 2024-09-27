<script>
import { reactive } from 'vue';
import {UserFatherService} from "../services/user-father.service.js";
//import { UserFather } from "../model/user-father.entity.js";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import router from "../../router/index.js";


export default {
  name: 'SignInComponent',
  components: {
    InputText,
    Password,
    Button
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleSignIn() {
      const userService = new UserFatherService();
      try {
        const user = await userService.signIn(this.email, this.password);
        console.log('User signed in:', user);
        // Redirigir al home (implementa la redirección según tu lógica)
        // Por ejemplo, podrías usar Vue Router:
        // this.$router.push('/home');
      } catch (error) {
        this.errorMessage = error.message || 'An error occurred during sign-in.';
      }
    },
  },
};
</script>

<template>
  <div class="sign-in-container">
    <h2>Sign In</h2>
    <form @submit.prevent="handleSignIn">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<style>
.sign-in-container {
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

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
