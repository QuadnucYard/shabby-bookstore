import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/theme-chalk/src/message.scss";

import "./styles/index.scss";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

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
app.use(VMdPreview);
console.log(app);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

import axios from "@/utils/request";

router.beforeEach((to, from, next) => {
  console.log("beforeEach", to.meta.requireAuth);
  /* if (store.state.user && to.path.startsWith("/admin")) {
    initAdminMenu(router, store);
  } */
  if (to.meta.requireAuth) {
    if (store.state.user) {
      axios.get("/auth").then(resp => {
        if (resp) next();
      });
    } else {
      next({
        name: "login",
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});
