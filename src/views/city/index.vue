<template>
  <div class="cityIndex">
    <div class="navbar">
      <navBar :title="'城市列表'" />
    </div>
    <van-index-bar
      :index-list="indexList"
      highlight-color="#fff"
      :sticky="false"
    >
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="$store.state.currentCityL.label" :clickable="true" />

      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotCity"
        :key="index"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="A" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.a"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="B" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.b"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="C" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.c"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="D" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.d"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="F" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.f"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="G" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.g"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="H" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.h"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="J" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.j"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="K" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.k"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="L" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.l"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="M" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.m"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="N" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.n"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="Q" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.q"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="S" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.s"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="T" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.t"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="W" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.w"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="X" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.x"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="Y" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.y"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />

      <van-index-anchor index="Z" />
      <van-cell
        :title="item.label"
        v-for="item in cityList.z"
        :key="item.value"
        :clickable="true"
        @click="serCurrentCityL(item)"
      />
    </van-index-bar>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import { getCity, hotCity } from "@/apis/area";
export default {
  name: "City",
  data() {
    return {
      cityList: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: [],
        l: [],
        m: [],
        n: [],
        o: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        u: [],
        v: [],
        w: [],
        x: [],
        y: [],
        z: [],
      },
      hotCity: [],
      indexList: [
        "#",
        "热",
        "A",
        "B",
        "C",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "Q",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  components: {
    navBar,
  },
  async created() {
    // 获取热门城市
    try {
      // 进入开启加载提示
      this.$toast.loading({
        message: "加载中",
        duration: 0,
      });
      const res = await hotCity();
      this.hotCity = res.data.body;
    } catch (error) {}

    //获取城市列表
    try {
      //城市列表分类
      const { data } = await getCity();
      data.body.forEach((item) => {
        this.cityList[item.short.charAt(0)].push(item);
      });
      // 加载完毕 关闭加载提示
      this.$toast.loading({
        message: "加载中",
        duration: 1,
      });
    } catch (error) {}
  },
  methods:{
    //修改当前城市
    serCurrentCityL(item) {
        console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.cityIndex {
  padding-top: 45px;
}
.navbar {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 45px;
}
/deep/.van-index-bar__index--active {
  background-color: skyblue;
  border-radius: 50%;
}
/deep/.van-index-bar__index {
  font-size: 14px !important;
  padding: 6px !important;
  margin-right: 5px;
}
</style>