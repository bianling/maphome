<template>
  <div>
    <div class="search-index">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入小区或地址"
          @search="onSearch"
          @cancel="onCancel"
          @input="getCommunity"
        />
      </form>
    </div>
    <van-cell
      :value="`${item.communityName}`"
      :clickable="true"
      v-for="(item, index) in community"
      :key="index"
      @click="searchSetCommunity(item)"
    />
  </div>
</template>

<script>
import { getCommunity } from "@/apis/area";
import { mapMutations } from 'vuex';
export default {
  name: "Search",
  data() {
    return {
      value: "",
      timer: null,
      community: [],
    };
  },
  methods: {
    onSearch() {},
    onCancel() {
      this.$router.back();
    },
    //获取小区
    getCommunity(val) {
      //添加防抖
      clearTimeout(this.timer);
      //为空不执行
      if (!val.trim()) {
        this.community = [];
        return;
      }
      this.timer = setTimeout(async () => {
        const { data } = await getCommunity(val);
        this.community = data.body;
      }, 1000);
    },
    ...mapMutations(['setCommunity']),
    //修改state中community数据
    searchSetCommunity(val){
      this.setCommunity(val)
      //修改完之后进行跳转
      this.onCancel()
    }
  },
};
</script>

<style lang="less" scoped>
.search-index {
  height: 44px;
  line-height: 44px;
  text-align: center;
  .van-search__content {
    background-color: #fff;
  }
  .van-search {
    padding: 5px;
    padding-left: 10px;
    background-color: #f6f5f6;
  }
  .van-cell {
    padding: 3px;
    padding-left: 86px;
  }
  .van-search__action {
    font-size: 15px;
    color: #6b7072;
  }
}
</style>
