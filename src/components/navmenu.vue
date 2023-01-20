<template>
  <div>
    <el-menu
      :default-active="'/index'"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="green"
      style="min-width: 600px; display: inline-block"
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        <el-icon><component :is="item.comp" /> </el-icon>
        {{ item.navItem }}
      </el-menu-item>
      <i
        class="el-icon-menu"
        style="float: right; font-size: 45px; color: #222; padding-top: 8px"
      ></i>
    </el-menu>
    <div class="right">
      <div v-show="!username">
        <el-link type="primary" :underline="false">
          <router-link :to="{ name: 'register' }">注册</router-link>
        </el-link>
        <el-link type="primary" :underline="false">
          <router-link :to="{ name: 'login' }">登录</router-link>
        </el-link>
      </div>
      <div v-show="username">
        <el-link type="default" :underline="false" @click="toHome">
          <el-avatar :size="30" :icon="UserFilled" />
          {{ username }}
        </el-link>
        <el-link type="primary" :underline="false" @click="logoutHandler"> 注销 </el-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { logout } from "@/api/auth";
import { ElMessage } from "element-plus";
import { HomeFilled, Shop, ShoppingCart, UserFilled } from "@element-plus/icons-vue";

const $router = useRouter();
const $store = useStore();

const navList = [
  { name: "/", navItem: "首页", comp: HomeFilled },
  { name: "/book/list", navItem: "商品列表", comp: Shop },
  { name: "/cart", navItem: "购物车", comp: ShoppingCart },
];

const username = computed(() => $store.state.user?.uname);

const logoutHandler = async () => {
  await logout();
  $store.commit("logout");
  ElMessage.success("成功注销");
};

const toHome = () => {
  console.log($store.state.user);
  $router.push({
    name: "userhome",
    params: {
      uid: $store.state.user.uid,
    },
  });
};
</script>

<style lang="scss" scoped>
.right {
  float: right;
  user-select: none;
  line-height: 56px;

  a {
    width: 5em;
    text-decoration: none;
  }
}

.el-menu-item {
  width: 8em;
}
</style>
