<script>
import { reactive } from 'vue';
import AuthService from "../services/auth.Service.js";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";


export default {
  components: {
    'InputText': InputText,
    'Password': Password,
    'Button': Button
  },
  setup() {

    const user = reactive({
      name: '',
      surname: '',
      email: '',
      document: '',
      phoneNumber: '',
      password: '',
      retypePassword: '',
    });

    const handleSignUp = async () => {
      if (user.password !== user.retypePassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const response = await AuthService.signUp(user);
        console.log('User signed up:', response.data);
        // Redirigir o realizar otras acciones tras el registro
      } catch (error) {
        console.error('Sign Up failed:', error);
      }
    };

    return {
      user,
      handleSignUp,
    };
  },
};
</script>
<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <InputText v-model="user.name" placeholder="Name" />
      <InputText v-model="user.surname" placeholder="Surname" />
      <InputText v-model="user.email" placeholder="Email" />
      <InputText v-model="user.document" placeholder="Document (DNI)" />
      <InputText v-model="user.phoneNumber" placeholder="Phone Number" />
      <Password v-model="user.password" placeholder="Password" />
      <Password v-model="user.retypePassword" placeholder="Retype Password" />
      <Button label="Sign Up" type="submit" />
    </form>
  </div>
</template>
<style>

</style>

