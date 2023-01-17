import { createStore } from "vuex";

export default createStore({
  state: {
    user: window.localStorage.getItem("user")
      ? JSON.parse(window.localStorage.getItem("user")!)
      : null,
    adminMenus: [],
  },
  mutations: {
    initAdminMenu(state, menus) {
      state.adminMenus = menus;
    },
    login(state, data) {
      state.user = data;
      window.localStorage.setItem("user", JSON.stringify(data));
    },
    logout(state) {
      // 注意不能用 null 清除，否则将无法判断 user 里具体的内容
      state.user = null;
      window.localStorage.removeItem("user");
      state.adminMenus = [];
    },
  },
  actions: {},
});
