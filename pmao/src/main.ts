import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PMaoUI from "../modules/pmao-ui";


createApp(App).use(store).use(router).use(PMaoUI).mount("#app");
