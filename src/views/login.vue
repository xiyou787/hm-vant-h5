<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />
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
        <van-button square block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link class="link" to="/register">去注册</router-link>
  </div>
</template>

<script>
import { setItem } from '@/utils/storage'
import { login } from '@/api/user'
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
        const res = await login(values)
        const token = res.data.data.token
        this.$toast('登录成功')
        setItem(token)
        this.$router.push('/')
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
