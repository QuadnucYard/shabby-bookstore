<template>
  <div class="login">
    <el-form
      ref="formRef"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      label-width="0px"
      class="login-form"
    >
      <h3 class="title">欢迎使用</h3>
      <el-form-item prop="username">
        <label>用户名</label>
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="用户名、手机号或电子邮箱"
        />
      </el-form-item>
      <el-form-item prop="password">
        <label>密码</label>
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter="handleLogin"
        />
      </el-form-item>
      <el-form-item prop="code">
        <label>验证码</label>
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 55%"
          @keyup.enter="handleLogin"
        />
        <div class="login-code">
          <img :src="captcha" title="看不清？点击刷新" @click="getCode" alt="" />
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe"> 记住我 </el-checkbox>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="default"
          type="primary"
          style="width: 100%"
          @click.prevent="handleLogin(formRef)"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
      <el-form-item style="width: 100%">
        <router-link :to="{ name: 'register' }">注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElNotification } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import Cookies from "js-cookie";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "@/utils/request";

const route = useRoute();
const router = useRouter();
const store = useStore();

const captcha = ref("");
const cookiePass = ref("");
const loginForm = reactive({
  username: "",
  password: "",
  rememberMe: false,
  code: "",
});
const loginRules = reactive({
  username: [{ required: true, trigger: "blur", message: "用户名不能为空" }],
  password: [{ required: true, trigger: "blur", message: "密码不能为空" }],
  code: [{ required: true, trigger: "change", message: "验证码不能为空" }],
});
const loading = ref(false);
const redirect = ref<string | null>(null);

const formRef = ref<FormInstance>();

watch(
  route,
  route => {
    redirect.value = route.query.redirect;
  },
  { immediate: true }
);

onMounted(() => {
  // 获取验证码
  getCode();
  // 获取用户名密码等Cookie
  getCookie();
  // token 过期提示
  point();
});

function getCode() {
  // captcha = $http.defaults.baseURL + "/kaptcha?d=" + new Date().getTime();
}
function getCookie() {
  const username = Cookies.get("username");
  const password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe"); // BUG 这个读不到
  // 保存cookie里面的加密后的密码
  cookiePass.value = password ?? "";
  Object.assign(loginForm, {
    username: username ?? loginForm.username,
    password: password ?? loginForm.password,
    rememberMe: rememberMe !== undefined,
    code: "",
  });
}
async function handleLogin(formEl: FormInstance) {
  await formEl.validate(async valid => {
    console.log("handleLogin valid ?", valid);
    const user = {
      username: loginForm.username,
      password: loginForm.password,
      rememberMe: loginForm.rememberMe,
      code: loginForm.code,
    };
    // 加密不是一一映射的……前端搞一下后端就出事了
    /* if (user.password !== this.cookiePass) {
      user.password = encrypt(user.password);
    } */
    if (!valid) {
      ElMessage.error("登录信息不合法");
      return;
    }
    //this.loading = true;
    if (user.rememberMe) {
      Cookies.set("username", user.username, { expires: 7 });
      Cookies.set("password", user.password, { expires: 7 });
      Cookies.set("rememberMe", user.rememberMe, { expires: 7 });
    } else {
      Cookies.remove("username");
      Cookies.remove("password");
      Cookies.remove("rememberMe");
    }
    console.log("store", store.state);
    const res = await axios.post("/auth/login", user);
    console.log("reLogin", res.data);
    if (res.data.code == 200) {
      store.commit("login", res.data.result);
      router.replace({ path: redirect.value ?? "/" });
      ElMessage({
        message: res.data.message,
        type: "success",
      });
      return true;
    } else {
      ElMessage({
        message: res.data.message,
        type: "error",
      });
    }

    return false;
  });
}
function point() {
  const point = Cookies.get("point");
  if (point) {
    ElNotification({
      title: "提示",
      message: "当前登录状态已过期，请重新登录！",
      type: "warning",
      duration: 5000,
    });
    Cookies.remove("point");
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
}
.title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  margin: 2em;
  border-radius: 6px;
  background: #ffffff;
  width: 385px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  display: inline-block;
  height: 38px;
  //float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.register {
  float: right;
  color: rgb(24, 144, 255);
}
a {
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
