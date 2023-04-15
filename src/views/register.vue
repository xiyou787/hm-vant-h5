<template>
  <div class="register-page">
    <van-nav-bar title="面经注册" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[\w-]{4,16}$/, message: '请输入正确内容' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\S*(?=\S{6,})\S*$/, message: '请输入正确密码' },
        ]"
      />
      <div style="margin: 16px">
        <van-button square block type="primary" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
    <router-link class="link" to="/login">已注册,去登录</router-link>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        await register(values)
        this.$toast.success('注册成功')
        this.$router.push('/login')
      } catch (err) {
        this.$toast(err.response.data.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 16px;
  padding-right: 20px;
  float: right;
}
</style>
