<template>
  <div class="center-form-wrapper">
    <el-card class="center-form">
      <el-form
        ref="formRef"
        :model="registerForm"
        :rules="rules"
        label-width="80px"
        autocomplete="off"
      >
        <h1 class="title">注册</h1>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="registerForm.pwd" type="password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="registerForm.cpwd" type="password" />
        </el-form-item>
        <!-- <el-form-item label="验证码" prop="code">
            <el-input v-model="registerForm.code" maxlength="4" />
          </el-form-item> -->
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email" />
          <!-- <el-button size="small" round @click="sendMsg">发送验证码</el-button>
            <span class="status">{{ statusMsg }}</span> -->
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input v-model="registerForm.phone" />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="registerForm.name" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="registerForm.address" />
        </el-form-item>
        <el-form-item prop="agreed">
          <el-checkbox v-model="registerForm.agreed">同意注册协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="submitForm(formRef!)">注册</el-button>
        </el-form-item>
        <el-form-item>
          已有账号？
          <router-link :underline="false" :to="{ name: 'login' }">登录</router-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { register } from "@/api/auth";
import { encrypt } from "@/utils/rsaEncrypt";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";

const $route = useRoute();
const $router = useRouter();
const $store = useStore();

const registerForm = reactive({
  username: "",
  name: "",
  code: "",
  pwd: "",
  cpwd: "",
  email: "",
  phone: "",
  address: "",
  agreed: false,
});
const rules = {
  username: [
    { required: true, type: "string", message: "请输入用户名", trigger: "blur" },
    { min: 3, message: "用户名不能太短！", trigger: "blur" },
    { max: 16, message: "用户名不能太长！", trigger: "blur" },
  ],
  email: [{ required: true, type: "email", message: "请输入邮箱", trigger: "blur" }],
  pwd: [{ required: true, message: "创建密码", trigger: "blur" }],
  cpwd: [
    { required: true, message: "确认密码", trigger: "blur" },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== registerForm.pwd) {
          callback(new Error("两次输入密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  phone: [{ required: true, message: "请输入联系方式", trigger: "blur" }],
  name: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 2, max: 10, message: "您确定姓名没有填错？", trigger: "blur" },
  ],
  address: [
    { required: true, message: "请输入地址", trigger: "blur" },
    { min: 8, message: "不填详细点真的说得过去吗？", trigger: "blur" },
  ],
  agreed: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value !== true) {
          callback(new Error("请确认同意注册协议"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
};
const formRef = ref<FormInstance>();

async function submitForm(formEl: FormInstance) {
  console.log("submit register111");
  await formEl.validate(async (valid, fields) => {
    if (!valid) {
      return;
    }
    const res = await register({
      username: registerForm.username,
      password: encrypt(registerForm.pwd),
      name: registerForm.name,
      phone: registerForm.phone,
      email: registerForm.email,
      address: registerForm.address,
    });
    console.log("reRegister", res);
    if (res.code == 200) {
      $store.commit("login", res.data);
      $router.replace({ path: ($route.query.redirect as string) ?? "/auth/login" });
      ElMessage.success(res.message);
    } else {
      ElMessage.error(res.message);
    }
  });
}
</script>

<style lang="scss" scoped>
.page-register {
  .register {
    color: #1890ff;
  }

  a {
    color: #1890ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }

  > section {
    margin: 0em auto 0em;
    padding-top: 30px;
    width: 400px;
    box-sizing: border-box;

    > div {
      background-color: white;
      padding: 1em 1em;
    }

    .status {
      font-size: 12px;
      margin-left: 20px;
      color: #e6a23c;
    }

    .error {
      color: red;
    }
  }
}

// .register-form {
//   margin: 2em;
//   border-radius: 6px;
//   background: #ffffff;
//   width: 385px;
//   padding: 25px 25px 5px 25px;
// }
</style>
