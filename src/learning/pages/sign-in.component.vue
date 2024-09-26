<script>
import { reactive } from 'vue';
import AuthService from "../services/auth.Service.js";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

export default {
  components: {
    'InputText': InputText,
    'Password': Password,
    'Button': Button
  },
  setup() {
    const user = reactive({
      email: '',
      password: '',
    });

    const handleSignIn = async () => {
      try {
        const response = await AuthService.signIn(user);
        console.log('User signed in:', response.data);
        // Redirigir a otra página o hacer algo tras el login
      } catch (error) {
        console.error('Sign In failed:', error);
      }
    };

    return {
      user,
      handleSignIn,
    };
  }
};
</script>
<template>
  <div class="signin-container">
    <h2>Sign In</h2>
    <form @submit.prevent="handleSignIn">
      <InputText v-model="user.email" placeholder="Email" />
      <Password v-model="user.password" placeholder="Password" />
      <Button label="Sign In" type="submit" />
    </form>
  </div>
</template>


<style>

</style>