import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/theme-chalk/src/message.scss";

import "./styles/index.scss";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const app = createApp(App);
app.use(router).use(ElementPlus).use(store);
app.use(VueAxios, axios);
console.log(app);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
