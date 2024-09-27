import { createApp } from 'vue'
import './style.css'
import App from './app.vue'


// Import router
import router from "./router/index.js";

// PrimeVue

import PrimeVue from 'primevue/config';

// PrimeVue CSS
import 'primeflex/primeflex.css';

// PrimeVue Icons
import 'primeicons/primeicons.css';

// PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css';



// PrimeVue Services
import ToastService from 'primevue/toastservice';
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";


createApp(App)
    .use(router)
    .use(PrimeVue,{ ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .mount('#app')