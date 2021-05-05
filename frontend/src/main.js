import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router'
import store from './store'
createApp(App).use(Router).use(store).mount('#app')
