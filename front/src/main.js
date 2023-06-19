import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { config } from '../config';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);
app.config.globalProperties.api_url = config.api_url;
app.use(router).mount('#app');
