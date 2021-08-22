import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pmaoui from 'pmao-ui'

createApp(App).use(store).use(router).use(pmaoui).mount('#app')
