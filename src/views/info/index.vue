<template>
  <div><img src="@/assets/img/cat.gif" alt="" /></div>
</template>

<script>
import { getHousesAll } from "@/apis/house";
export default {
  name: "Info",
  data(){
    return{

    }
  },
  async created() {
    const { data } = await getHousesAll();
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
