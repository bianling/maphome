<template>
  <div>
    <div class="go-map" @click="goMap"></div>
    <!-- 导航栏 -->
    <navBar />
    <!-- 导航栏 -->
    <!-- 搜索框 -->
    <div class="home-search">
      <van-search
        placeholder="请输入小区或地址"
        class="home-search-list"
        background="#f7f8fa"
      >
        <span slot="label" class="search-text" @click="goCity"
          >{{ $store.state.currentCityL.label }}
          <i class="iconfont icon-xiangxia"></i>
        </span>
      </van-search>
      <van-icon name="location-o" class="search-icon" />
    </div>
    <!-- 搜索框 -->
    <!-- 下拉选择 -->
    <Confirm />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import Confirm from "./components/Confirm.vue";

export default {
  name: "goHome",
  data() {
    return {};
  },
  components: {
    navBar,
    Confirm,
  },
  methods: {
    //点击跳转城市列表
    goCity() {
      this.$router.push({
        path: "/city",
      });
    },
    goMap() {
      this.$router.push({
        path: "/detail",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-search {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 7px;
  left: 50px;
  width: 310px;
  height: 32px;
  z-index: 99;
  .van-search__content {
    height: 32px;
  }
  .home-search-list {
    flex: 1;
    border-radius: 5px;
    .search-text {
      margin-left: -18px;
      padding-right: 5px;
      border-right: 1px solid #e5e5e5;
      .iconfont {
        font-size: 12px;
        color: #7f7f80;
      }
    }
  }
  .search-icon {
    width: 25px;
    height: 34px;
    font-size: 25px;
    color: #fff;
    text-align: center;
    line-height: 34px;
    margin-left: 5px;
  }
}
.go-map {
  position: absolute;
  top: 10px;
  right: 13px;
  z-index: 9999999999;
  width: 25px;
  height: 25px;
}
</style>
