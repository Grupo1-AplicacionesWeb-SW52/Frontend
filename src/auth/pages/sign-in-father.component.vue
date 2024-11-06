<template>
  <section class="main-section">
    <div class="card">
      <h2 class="card-title">Welcome!</h2>
      <form @submit.prevent="login" class="form-container">
        <!-- Campo de Correo -->
        <div class="form-field">
          <label class="form-field__label" for="email">Email</label>
          <pv-input-text
            v-model="email"
            placeholder="Enter your email"
            required
            class="p-inputtext-sm p-d-block"
          />
        </div>

        <!-- Campo de Contraseña -->
        <div class="form-field">
          <label class="form-field__label" for="password">Password</label>
          <div class="password-wrapper">
            <pv-password
              v-model="password"
              :toggleMask="true"
              placeholder="Enter your password"
              :feedback="false"  
              class="p-password-sm"
              :type="showPassword ? 'text' : 'password'"
            />
            <button
              type="button"
              class="password-toggle"
              @click="toggleShowPassword"
            >
              <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
            </button>
          </div>
        </div>

        <!-- Enlace de Registro -->
        <span class="form-field__link">
          Don’t have an account?
          <RouterLink to="/sign-up" class="link">Create a new one</RouterLink>
        </span>

        <!-- Botón de Iniciar Sesión -->
        <pv-button
          type="submit"
          label="Enter"
          class="p-button-raised p-button-rounded p-button-primary"
          style="width: 100%;"
        />

        <!-- Botones de Inicio de Sesión Rápido -->
        <div class="form-btn-wrapper">
          <pv-button
            label="Login as Tutor"
            class="p-button-raised p-button-rounded p-button-primary"
            style="width: 100%;"
            @click="loginAsTutorDemoBtn"
          />
          <pv-button
            label="Login as Caregiver"
            class="p-button-raised p-button-rounded p-button-primary"
            style="width: 100%;"
            @click="loginAsCaregiverDemoBtn"
          />
        </div>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </section>
</template>

<script>
import router from '../../router/index.js';
import AuthService from '../services/auth.services.js';

export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      errorMessage: ''
    };
  },
  methods: {
    // Alternar visibilidad de la contraseña
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },

    // Inicio de sesión con credenciales de usuario
    async login() {
      try {
        let user = await AuthService.loginAsCaregiver(this.email, this.password);
        if (!user) {
          user = await AuthService.loginAsTutor(this.email, this.password);
          if (!user) {
            this.errorMessage = 'Invalid email or password';
            return;
          }
          user.role = 'tutor';
        } else {
          user.role = 'caregiver';
        }

        // Guardar el usuario en localStorage y redirigir
        localStorage.setItem('user', JSON.stringify(user));
        router.push(user.role === 'caregiver' ? '/your-service' : '/search-caregiver');
      } catch (error) {
        this.errorMessage = 'An error occurred during sign-in.';
      }
    },

    // Inicio de sesión rápido como Tutor (Demo)
    async loginAsTutorDemoBtn() {
      try {
        const user = await AuthService.loginAsTutor('juan.perez@example.com', 'juan123');
        localStorage.setItem('user', JSON.stringify({ ...user, role: 'tutor' }));
        router.push('/search-caregiver');
      } catch (error) {
        this.errorMessage = 'An error occurred during sign-in.';
      }
    },

    // Inicio de sesión rápido como Caregiver (Demo)
    async loginAsCaregiverDemoBtn() {
      try {
        const user = await AuthService.loginAsCaregiver('maria.lopez@example.com', 'maria123');
        localStorage.setItem('user', JSON.stringify({ ...user, role: 'caregiver' }));
        router.push('/your-service');
      } catch (error) {
        this.errorMessage = 'An error occurred during sign-in.';
      }
    }
  },
  created() {
    const data = localStorage.getItem('user');
    const user = data ? JSON.parse(data) : null;

    if (user) {
      router.push(user.role === 'caregiver' ? '/your-service' : '/search-caregiver');
    }
  }
};
</script>

<style scoped>
.main-section {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.card {
  background-color: #0f5171;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  color: #fff;
  margin-bottom: 20px;
}

.form-field {
  margin-bottom: 20px;
}

.form-field__label {
  display: block;
  color: #fff;
  margin-bottom: 8px;
}

.p-inputtext-sm,
.p-password-sm {
  width: 100%;
}

.password-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ccc;
}

.error {
  color: red;
  margin-top: 10px;
}

.form-field__link {
  color: #fff;
}

.link {
  color: #4caf50;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.form-btn-wrapper {
  margin-top: 10px;
}
</style>