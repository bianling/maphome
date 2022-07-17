<template>
  <div class="detail">
    <!-- navbar区域 -->
    <navBar :title="data.community" />
    <!-- navbar区域 -->
    <!-- 轮播图区域 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :height="250"
    >
      <van-swipe-item v-for="(item, index) in data.houseImg" :key="index">
        <img :src="`http://liufusong.top:8080${item}`" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图区域 -->
    <!-- 描述部分 -->
    <div class="describe">
      <div class="item title">
        <div>{{ data.description }}</div>
        <span v-for="obj in data.tags" :key="obj">{{ obj }}</span>
      </div>
      <div class="item conter">
        <div class="HouseDetail">
          <h2>{{ data.price }} <span>/月</span></h2>
          <p>租金</p>
        </div>
        <div class="HouseDetail">
          <h2>{{ data.roomType }}</h2>
          <p>房型</p>
        </div>
        <div class="HouseDetail">
          <h2>{{ data.size }}平米</h2>
          <p>面积</p>
        </div>
      </div>
      <div class="item info">
        <div>装修:<span>精装</span></div>
        <div>
          朝向:<span v-for="obj in data.oriented" :key="obj">{{ obj }}</span>
        </div>
        <div>
          楼层:<span>{{ data.floor }}</span>
        </div>
        <div>类型:<span>普通住宅</span></div>
      </div>
    </div>
    <!-- 描述部分 -->
    <!-- 地图区域 -->
    <div class="map">这是一张大地图</div>
    <!-- 地图区域 -->
    <!-- 房屋配套 -->
    <div class="about">
      <div class="one">房屋配置</div>
      <div class="flag" v-if="!newList[0]">暂无数据~</div>
      <van-grid :column-num="5" :border="false" v-else>
        <van-grid-item
          :square="true"
          icon="photo-o"
          :text="item.furnitureList"
          v-for="item in newList"
          :key="item.id"
        >
          <i slot="icon" class="iconfont" :class="item.iconList"></i>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 房屋配套 -->
    <div class="bg"></div>
    <div class="about">
      <div class="one">房源概述</div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import { getMap } from "@/apis/house";
export default {
  data() {
    return {
      data: {},
      //房屋配置
      furniture: [
        {
          iconList: "icon-shimuyigui",
          furnitureList: "衣柜",
          id: 1,
        },
        {
          iconList: "icon-xiyiji",
          furnitureList: "洗衣机",
          id: 2,
        },
        {
          iconList: "icon-kongtiao",
          furnitureList: "空调",
          id: 3,
        },
        {
          iconList: "icon-meiqitianranqi",
          furnitureList: "天然气",
          id: 4,
        },
        {
          iconList: "icon-bingxiang",
          furnitureList: "冰箱",
          id: 5,
        },
        {
          iconList: "icon-nuanqi",
          furnitureList: "暖气",
          id: 6,
        },
        {
          iconList: "icon-dianshiji",
          furnitureList: "电视",
          id: 7,
        },
        {
          iconList: "icon-linyu",
          furnitureList: "热水器",
          id: 8,
        },
        {
          iconList: "icon-wifi",
          furnitureList: "宽带",
          id: 9,
        },
        {
          iconList: "icon-shafa",
          furnitureList: "沙发",
          id: 10,
        },
      ],
    };
  },
  created() {
    //获取数据
    this.getMap(this.$route.query.id);
  },
  methods: {
    //获取数据
    async getMap(id) {
      try {
        const data = await getMap(id);
        this.data = data.data.body; //获取返回来的数据
        console.log(this.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    navBar,
  },
  computed: {
    //判断房屋配置，并返回
    newList() {
      let a = [];
      if (this.data.supporting) {
        let data = this.data.supporting.join("");
        this.furniture.forEach((item) => {
          if (data.includes(item.furnitureList)) {
            a.push(item);
          }
        });
      }
      return a;
    },
  },
};
</script>

<style lang="less" scoped>
.flag {
  font-size: 12px;
}
.detail {
  background-color: #f6f5f6;
  min-height: 100vh;
}
// vant组件库轮播图样式
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
// 描述部分
.describe {
  height: 265px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  background-color: #fff;
  .item {
    flex: 1;
  }
  .title {
    div {
      font-weight: 400;
      font-size: 16px;
      color: #333;
      margin: 25px 0 8px;
    }
    span {
      color: #39becd;
      background: #e1f5f8;
      font-size: 12px;
      padding: 3px;
      border-radius: 3px;
      margin-right: 5px;
    }
  }
  .conter {
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    display: flex;
    text-align: center;
    line-height: 1;
    .HouseDetail {
      flex: 1;
      h2 {
        color: #fa5741;
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 10px;
        span {
          font-size: 12px;
          font-weight: 400;
        }
      }
      p {
        font-size: 14px;
        color: #999999;
      }
    }
  }
  .info {
    margin-top: 15px;
    div {
      display: inline-block;
      width: 50%;
      font-size: 14px;
      color: #999999;
      span {
        color: #333333;
        margin-left: 10px;
      }
    }
  }
}
// 地图区域
.map {
  width: 100%;
  height: 190px;
  line-height: 190px;
  text-align: center;
  background-color: #fff;
  margin-top: 10px;
}

//房屋配套
.about {
  padding: 0 10px;
  background-color: #fff;
  .one {
    font-size: 15px;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #cecece;
  }
}
.van-grid-item {
  margin-top: 20px;
  .iconfont {
    font-size: 25px;
  }
  /deep/.van-grid-item__text {
    font-size: 14px;
  }
}
//占位
.bg {
  height: 10px;
}
</style>