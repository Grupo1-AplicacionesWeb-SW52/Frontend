<script>

  import SignInChildCareComponent from "./sign-in-child-care.component.vue";
  import SignInFatherComponent from "./sign-in-father.component.vue";

  export default {
    name: 'SelectRoleComponent',
    data(){
      return {
        selectedRole: null,
      };
    },
    components: {
      SignInFatherComponent,
      SignInChildCareComponent,
    },
    methods: {
      selectRole(role) {
        this.selectedRole = role;
      },
    },
  };
</script>

<template>
  <div class="sign-in-selector-container">
    <h2>Select Role to Sign In</h2>
    <div class="role-buttons">
      <pv-button
        label="Sign In as Parent"
        class="p-button-raised p-button-rounded p-button-info"
        @click="selectRole('parent')"
      />
      <pv-button
        label="Sign In as Child"
        class="p-button-raised p-button-rounded p-button-success"
        @click="selectRole('child')"
      />
    </div>

    <div class="sign-in-form">
      <SignInFatherComponent v-if="selectedRole === 'parent'" />
      <SignInChildCareComponent v-if="selectedRole === 'child'" />
    </div>
  </div>
</template>

<style>
.sign-in-selector-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.role-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.sign-in-form {
  margin-top: 20px;
}
</style>

























