<template>
  <div><img src="@/assets/img/cat.gif" alt="" /></div>
</template>

<script>
import { getHousesAll } from "@/apis/house";
export default {
  name: "Info",
  data() {
    return {
      parameters: {
        id: "AREA|88cff55c-aaa4-e2e0", //地区id
        area: "", //地区
        subway: "", //地铁
        rentType: true, //整租
        price: null, //价格
        more: "", //复合查询,
        roomType: "", //房屋类型
        oriented: "", //朝向
        characteristic: "", //标签
        floor: "", //楼层
        start:1,//开始项目
        end:20//结束项目
      },
    };
  },
  async created() {
    const { data } = await getHousesAll(this.parameters);
    console.log(data);
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
