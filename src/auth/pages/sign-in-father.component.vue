<script>
import router from '../../router/index.js';
import {UserFatherService} from "../services/user-father.service.js";
//import { UserFather } from "../model/user-father.entity.js";




export default {
  name: 'SignInFatherComponent',
  
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
        localStorage.setItem('isAuthenticated', 'true');
        await router.push('/home');
      } catch (error) {
        this.errorMessage = error.message || 'An error occurred during sign-in.';
      }
    },
  },
};
</script>
<template>
  <div class="sign-in-container">
    <h2>Welcome!</h2>
    <form @submit.prevent="handleSignIn">
      <div class="form-group">
        <label for="email">Email:</label>
        <pv-input-text
            id="email"
            v-model="email"
            required
            placeholder="Enter your email"
            class="p-inputtext-sm p-d-block"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <pv-password
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
            :feedback="false"
            toggleMask
            class="p-password-sm"
        />
      </div>
      <pv-button
          type="submit"
          label="Sign In"
          class="p-button-raised p-button-rounded p-button-primary"
          style="width: 100%;"
      />
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div class="sign-up-link">
      <span>Don't have an account? </span>
      <RouterLink to="/sign-up-father" class="link">Create a new one</RouterLink>
    </div>
  </div>
</template>
<style>
.sign-in-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #0f5171;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #fff;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  color: #fff;
  margin-bottom: 8px;
  font-size: 16px;
}

.p-inputtext-sm,
.p-password-sm {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
}

button.p-button {
  margin-top: 20px;
  width: 100%;
}

.error {
  color: red;
  margin-top: 10px;
}

.sign-up-link {
  margin-top: 20px;
  color: #fff;
}

.link {
  color: #4caf50;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
