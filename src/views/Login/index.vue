<template>
  <div>
    <!-- 导航头部 -->
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
      class="navbar"
    />
    <!-- 导航头部 -->
    <!-- from表单区域 -->
    <van-form @submit="login" class="fromVant">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        size
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="loginbtn"
          >登 录
        </van-button>
      </div>
    </van-form>
    <!-- from表单区域 -->
    <div class="register">
      <span @click="registerFn">还没有账号, 去注册~</span>
    </div>
  </div>
</template>

<script>
// 账号:hzhmqd密码:123456
import { login } from '@/apis/user'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      usernameReg: /^[a-zA-Z\d]{4,15}$/, // 匹配用户名正则
      passwordReg: /^[a-zA-Z\d]{4,15}$/ // 匹配用户密码正则
    }
  },
  methods: {
    // 退出
    onClickLeft() {
      this.$router.back()
      this.$toast('返回')
    },
    // 登录Submit事件
    async login() {
      // 判断格式有没有问题
      if (
        !this.usernameReg.test(this.username) ||
        !this.passwordReg.test(this.password)
      ) {
        return this.$toast.fail('账号或密码格式不正确')
      }

      try {
        // 登陆成功
        const { data } = await login(this.username, this.password)
        this.$store.commit('addToken', data.body.token)
        this.$toast.success(data.description)
        // 登陆成功 跳转首页
        this.$router.push({
          path: '/'
        })
      } catch (e) {
        // 登陆失败
        this.$toast.fail('账号或密码错误')
      }
    },
    // 注册跳转
    registerFn() {}
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #21b97a;
  /deep/.van-icon {
    color: #fff;
    font-size: 30px;
  }
  /deep/.van-nav-bar__title {
    color: #fff;
    font-size: 35px;
  }
  /deep/.van-cell__value {
    font-size: 35px;
  }
}
.fromVant {
  margin-top: 40px;
  .loginbtn {
    background-color: #21b97a;
    border: none;
    height: 100px;
    margin-top: 60px;
    .van-button__text {
      font-size: 36px;
    }
  }
  /deep/.van-field__control {
    margin-top: 40px;
    font-size: 34px;
    background-color: #fff;
  }
}
.register {
  font-size: 27px;
  text-align: center;
  color: #666666;
  margin-top: 60px;
}
</style>
