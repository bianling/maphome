<template>
  <div class="my-map">
    <navBar title="地图找房" />
    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
      <!-- 比例尺控件 -->
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
      <!-- 比例尺控件 -->
      <!-- 缩放控件 -->
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
      <!-- 缩放控件 -->
    </baidu-map>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import { getMap } from "@/apis/area";
import { mapState } from "vuex";
export default {
  name: "Map",
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },
  created() {
    //获取城市地图坐标
    this.getMap();
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    //获取城市地图坐标
    async getMap() {
      try {
        const { data } = await getMap(this.currentCityL.value);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    navBar,
  },
  computed: {
    //当前城市
    ...mapState(["currentCityL"]),
  },
};
</script>

<style lang="less" scoped>
.my-map {
  height: 621px;
}
.map {
  width: 100%;
  height: 100%;
}
</style>