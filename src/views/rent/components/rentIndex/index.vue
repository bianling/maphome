<template>
  <div>
    <!-- 头部 -->
    <NavBar :title="'房屋管理'"></NavBar>
    <!-- 头部 -->
    <!-- 收藏列表部分 -->
    <div class="favorate-list">
      <!-- 列表渲染 -->
      <ListCell :List="rentList" />
      <!-- 列表渲染 -->
    </div>
    <!-- 收藏列表部分 -->
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue'
import ListCell from '@/components/ListCell.vue'
import { housesList } from '@/apis/user'
export default {
  name: 'Rent',
  data() {
    return {
      rentList: []
    }
  },
  async created() {
    try {
      this.$toast.loading({
        message: '加载中',
        duration: 0
      })
      const { data } = await housesList()
      data.body.forEach((item) => {
        item.houseImg = `http://liufusong.top:8080${item.houseImg}`
      })
      this.rentList = data.body
      this.$toast.loading({
        message: '加载中',
        duration: 1
      })
    } catch (error) {
      this.$toast.fail('加载失败')
    }
  },
  components: {
    NavBar,
    ListCell
  }
}
</script>

<style lang="less" scoped></style>
