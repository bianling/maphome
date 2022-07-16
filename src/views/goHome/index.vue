<template>
  <div>
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
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 下拉选择 -->
    <van-area title="标题" :area-list="areaList" />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
  name: "goHome",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          // ....
        },
      },
    };
  },
  components: {
    navBar,
  },
  methods: {
    //点击跳转城市列表
    goCity() {
      this.$router.push({
        path: "/city",
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
</style>
