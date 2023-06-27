import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import { config } from '../config';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);
app.config.globalProperties.api_url = config.api_url;
app.use(router)
app.use(Notifications)
app.mount('#app');
