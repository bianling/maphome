<template>
  <div>
    <van-dropdown-menu>
      <!-- 区域 -->
      <van-dropdown-item ref="item">
        <span slot="title">区域</span>
        <van-picker
          ref="picker"
          show-toolbar
          :columns="columns"
          @confirm="areaFn"
          @cancel="areaOut"
        />
      </van-dropdown-item>
      <!-- 区域 -->
      <!-- 方式和租金 -->
      <van-dropdown-item v-model="value2" :options="option2">
        <span slot="title">方式</span>
      </van-dropdown-item>
      <van-dropdown-item v-model="value3" :options="option3">
        <span slot="title">租金</span>
      </van-dropdown-item>
      <!-- 方式和租金 -->
      <!-- 筛选 -->
      <van-dropdown-item v-model="value" :options="option">
        <span slot="title" @click="show = !show">筛选</span>
      </van-dropdown-item>
      <van-popup
        v-model="show"
        position="right"
        :style="{ height: '100%', width: '80%' }"
      >
        <!-- 赛选内容区域 -->
      </van-popup>
      <!-- 筛选 -->
    </van-dropdown-menu>
  </div>
</template>

<script>
import { getCondition } from "@/apis/house";
import { mapState } from "vuex";
export default {
  name: "Confirm",
  data() {
    return {
      show: false,
      condition: {}, //请求回来的所有查询条件
      columns: [], //存放地铁和区域数据内容
      newData: {},
      value: 0,
      value2: 0,
      value3: 0,
      option2: [],
      option3: [],
      option: [],
    };
  },
  async created() {
    //根据当前地区获取查询条件
    try {
      // 开始加载
      this.$toast.loading({
        message: "加载中",
        duration: 0,
      });
      // 开始加载
      // 发起请求,获取所有查询要求条件
      const { data } = await getCondition(this.currentCityL.value);
      //   console.log(data.body);
      this.condition = data.body;
      // 方式的数据整理
      data.body.rentType.forEach((item, index) => {
        this.option2[index] = {};
        this.option2[index].text = item.label;
        this.option2[index].value = item.value;
      });
      this.value2 = this.option2[0].value;
      // 方式的数据整理
      //租金的数据整理
      data.body.price.forEach((item, index) => {
        this.option3[index] = {};
        this.option3[index].text = item.label;
        this.option3[index].value = item.value;
      });
      this.value3 = this.option3[0].value;
      //租金的数据整理
      //区域数据调整
      this.forData(data.body.area, this.newData);
      this.columns.push(this.newData);
      this.newData = {};
      this.forData(data.body.subway, this.newData);
      this.columns.push(this.newData);
      //区域数据调整
      //   加载结束
      this.$toast.loading({
        message: "加载中",
        duration: 1,
      });
      //   加载结束
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // subway  地铁
    // area 区域
    //数据修改
    forData(val, newData) {
      for (let k in val) {
        if (k == "children") {
          newData.children = [];
          this.forData(val[k], newData.children);
        } else if (k == "label") {
          newData.text = val[k];
        } else if (k == "value") {
          if (val[k] == "null") {
            newData.children = [{ text: "不限", value: "null" }];
          }
          newData.value = val[k];
        } else {
          newData[k] = {};
          this.forData(val[k], newData[k]);
        }
      }
    },

    areaFn(val) {
      console.log(this.$refs.picker.getValues());
      this.$refs.item.toggle();
    },
    areaOut() {
      this.$refs.item.toggle();
    },
  },
  computed: {
    ...mapState(["currentCityL"]), //获取当前地区
  },
};
</script>

<style>
</style>