<template>
  <div class="goHome">
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
      <van-icon name="location-o" class="search-icon"  @click="goMap"/>
    </div>
    <!-- 搜索框 -->
    <!-- 下拉选择 -->
    <Confirm />
    <!-- 列表渲染 -->
    <div class="favorate-list" v-if="searchList[0]">
      <!-- 触底刷新 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ListCell :List="searchList"></ListCell>
      </van-list>
      <!-- 触底刷新 -->
    </div>
    <div v-else class="none">暂无数据房源数据~~~</div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import Confirm from "./components/Confirm.vue";
import ListCell from "@/components/ListCell";
import { mapState } from "vuex";

export default {
  name: "goHome",
  data() {
    return {
      loading: false,
      finished: false,
    };
  },
  components: {
    navBar,
    Confirm,
    ListCell,
  },
  methods: {
    //点击跳转城市列表
    goCity() {
      this.$router.push({
        path: "/city",
      });
    },
    goMap(e) {
      e.stopPropagation();
      this.$router.push({
        path: "/map",
      });
    },
    //下拉刷新
    onLoad() {
      if(this.searchList.length<=20){
        this.finished=true
      }
    },
  },
  computed: {
    ...mapState(["searchList"]),
  },
};
</script>

<style lang="less" scoped>
.goHome {
  padding-bottom: 45px;
}
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
.none {
  text-align: center;
  margin-top: 20px;
}
</style>
