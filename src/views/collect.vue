<template>
  <div class="collect-page">
    <van-nav-bar fixed title="我的收藏" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <articleItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
      ></articleItem>
    </van-list>
  </div>
</template>

<script>
import articleItem from '@/components/article-item.vue'
import { getArticlesCollect } from '@/api/article'
export default {
  name: 'collect-page',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      obj: {
        optType: 2,
        page: 1
      }
    }
  },
  methods: {
    async onLoad () {
      const res = await getArticlesCollect(this.obj)
      this.list.push(...res.data.data.rows)
      this.loading = false
      this.obj.page++
      if (this.obj.page > res.data.data.pageTotal) {
        this.finished = true
      }
    }
  },
  components: {
    articleItem
  }
}
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
