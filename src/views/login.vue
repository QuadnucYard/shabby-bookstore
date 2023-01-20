<template>
  <div class="center-form-wrapper">
    <el-card class="center-form">
      <el-form ref="formRef" :model="loginForm" :rules="loginRules" label-width="80px">
        <h1 class="title">欢迎使用</h1>
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            auto-complete="off"
            placeholder="用户名、手机号或电子邮箱"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter="handleLogin"
          />
        </el-form-item>
        <!-- <el-form-item label="验证码" prop="code">
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
        </el-form-item> -->
        <el-form-item>
          <el-checkbox v-model="loginForm.rememberMe"> 记住我 </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="handleLogin(formRef!)">登录</el-button>
        </el-form-item>
        <el-form-item>
          <router-link :underline="false" :to="{ name: 'register' }">注册</router-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { login } from "@/api/auth";
import { encrypt } from "@/utils/rsaEncrypt";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import Cookies from "js-cookie";

const $route = useRoute();
const $router = useRouter();
const $store = useStore();

const captcha = ref("");
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

const formRef = ref<FormInstance>();

const print = console.log;

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
  const rememberMe = Cookies.get("rememberMe");
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
    if (!valid) {
      ElMessage.error("登录信息不合法");
      return;
    }
    if (user.rememberMe) {
      Cookies.set("username", user.username, { expires: 7 });
      Cookies.set("password", user.password, { expires: 7 });
      Cookies.set("rememberMe", "true", { expires: 7 });
    } else {
      Cookies.remove("username");
      Cookies.remove("password");
      Cookies.remove("rememberMe");
    }
    user.password = encrypt(user.password);
    const res = await login(user);
    console.log("reLogin", res.data);
    if (res.code != 200) {
      ElMessage.error(res.message);
      return false;
    }
    $store.commit("login", res.data);
    print($store.state);
    $router.replace({ path: $route.query.redirect as string ?? "" });
    ElMessage.success(res.message);
    return true;
  });
}

function point() {
  const point = Cookies.get("point");
  if (point) {
    ElMessage.warning("当前登录状态已过期，请重新登录！");
    Cookies.remove("point");
  }
}
</script>

<style lang="scss" scoped>
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
</style>
