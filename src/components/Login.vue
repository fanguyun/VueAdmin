<template>
  <div class="body_main">
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="main_body"
      >
      </vue-particles>
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      account: {
        username: 'admin',
        pwd: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          //{ validator: validaePass }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  methods: {
    handleLogin() {
      let that = this;
      this.$refs.AccountFrom.validate(valid => {
        if (valid) {
          this.loading = true;
          let loginParams = {
            username: this.account.username,
            pwd: this.account.pwd
          };
          localStorage.setItem('access-user', JSON.stringify('ok'));
          that.$router.push({ path: '/' });
        }
      });
    }
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
<style lang="scss" scoped>
.body_main {
  height: 100%;
  width: 100%;
  position: relative;
  .main_body {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #98c3ef;
    background-size: cover;
  }
}
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -210px;
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;

  background: -ms-linear-gradient(top, #ace, #00c1de); /* IE 10 */
  background: -moz-linear-gradient(top, #ace, #00c1de); /*火狐*/
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#ace),
    to(#00c1de)
  ); /*谷歌*/
  background: -webkit-linear-gradient(
    top,
    #ace,
    #00c1de
  ); /*Safari5.1 Chrome 10+*/
  background: -o-linear-gradient(top, #ace, #00c1de); /*Opera 11.10+*/

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
