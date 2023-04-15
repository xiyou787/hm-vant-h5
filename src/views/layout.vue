<template>
  <div class="layout-page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item to="/article" icon="fire-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page'
}
</script>

<style lang="less" scoped></style>
