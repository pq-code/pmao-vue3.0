import { createApp, } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PMaoUI from "./../packages/index"
import iconfont from "../packages/iconfont/iconfont.css"

createApp(App).use(store).use(router).use(PMaoUI).mount("#app");
