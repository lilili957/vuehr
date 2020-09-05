<template>
  <el-form :rules="rules" :model="loginForm" class="login-container" label-position="left"
           label-width="50px" v-loading="loading">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username" label="账号">
      <el-input type="text" v-model="loginForm.username" auto-complete="off"
                placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item prop="password" label="密码">
      <el-input type="password" v-model="loginForm.password" auto-complete="off"
                placeholder="密码"></el-input>
    </el-form-item>

    <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>

    <el-form-item style="width: 100%;">
      <el-button type="primary" @click.native.prevent="submitClick" style="width: 100%; ">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

  import {postRequest} from "../utils/api.js";

  export default {
    name: "Login",
    data() {
      let validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error("请输入账户"));
        } else {
          callback();
        }
      }
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      }
      return {
        loading: false,
        loginForm: {
          username: 'lilili957',
          password: '123',
        },
        checked: true,
        rules: {
          username: [{validator: validateName, trigger: "blur"}],
          password: [{validator: validatePass, trigger: "blur"}]
        }
      }
    },
    methods: {
      submitClick() {
        this.loading = true;
        postRequest("/login", {
          username: this.loginForm.username,
          password: this.loginForm.password
        }).then( resp => {
          if (resp.status == 200) {
            console.log(resp);
            this.loading = false;
            //成功状态
            let json = resp.data;
            if (json.status == 'success') {
              this.$router.replace("/home");
            } else {
              this.$message({status: "error", message: "登录失败"});
            }
          } else {
            this.$message({status: "error", message: "登录失败"});
          }
        }, err => {
          this.loading = false;
          // this.$confirm("找不到服务器...", "失败", {
          //   confirmButtonText: "确定"
          // })
          this.$alert("找不到服务器....", "失败");
        })
      }
    }
  }
</script>

<style scoped>
  .login-container  {
    width: 400px;
    border: 1px solid #eaeaea;
    border-radius: 30px;
    margin: 180px auto;
    box-shadow: 0 0 25px #cac6c6;
    background-color: #fff;
    background-clip: padding-box;
    padding: 35px 35px 15px 35px;
  }

  .login_title {
    text-align: center;
    margin: 0px auto 40px auto;
    color: #505458;
  }

  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>