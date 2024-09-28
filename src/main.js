import './style.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import router from "./router/index.js";


import { createApp } from 'vue'
import App from './app.vue'
import './style.css'

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';


createApp(App)
    .use(router)
    .use(PrimeVue,{ripple: true})
    .component('pv-button', Button)
    .component('pv-input', InputText)
    .mount('#app')
