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

import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// highlightjs
// import hljs from "highlight.js";
VMdPreview.use(githubTheme, {
  // Hljs: hljs,
});

const app = createApp(App);
app.use(router).use(ElementPlus).use(store);
app.use(VueAxios, axios);
app.use(VMdPreview);
console.log(app);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
