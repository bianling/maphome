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
  </div>
</template>

<script>
import {getCommunity} from '@/apis/area'
export default {
  name:'Search',
  data(){
    return{
      value:'',
      timer:null
    }
  },
  methods:{
    onSearch(){},
    onCancel(){
      this.$router.back()
    },
    //获取小区
    getCommunity(val){
      //为空不执行
      if(!val.trim()) return
      //添加防抖
      clearTimeout(this.timer)
      this.timer=setTimeout( async() => {
      const {data}= await getCommunity(val)
      console.log(data);
      }, 1000);
    }
  }
}
</script>

<style lang="less" scoped>
.search-index{
  height: 44px;
  line-height: 44px;
  text-align: center;
  .van-search__content{
    background-color: #fff;
  }
  .van-search{
    padding: 5px;
    padding-left: 10px;
    background-color: #f6f5f6;
  }
  .van-cell{
    padding: 3px;
    padding-left: 86px;
  }
  .van-search__action{
    font-size: 15px;
    color: #6b7072;
  }
}
</style>
