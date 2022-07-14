<template>
  <div class="addIndex">
    <navBar :title="'发布房源'" />
    <van-form @submit="addRent" class="form">
      <div class="information informationtop">房源信息</div>
      <van-cell-group>
        <!-- 小区名称 -->
        <van-cell
          title="小区名称"
          is-link
          value="请输入小区名称"
          to="/rent/search"
        />
        <!-- 小区名称 -->
        <!-- 租金 -->
        <van-field v-model="data.price" placeholder="请输入租金/月">
          <span slot="label">租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金</span>
          <span slot="extra">￥/月</span>
        </van-field>
        <!-- 租金 -->
        <!-- 建筑面积 -->
        <van-field
          v-model="data.size"
          label="建筑面积"
          placeholder="请输入建筑面积"
        >
          <span slot="extra">㎡</span>
        </van-field>
        <!-- 建筑面积 -->
        <!-- 户型 -->
        <van-cell
          is-link
          :value="data.roomType || '请选择'"
          @click="show = true"
        >
          <span slot="title">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</span>
        </van-cell>
        <!-- 弹出层 -->
        <van-action-sheet
          v-model="show"
          :actions="actions"
          @select="onSelect"
          cancel-text="取消"
        />
        <!-- 户型 -->
        <!-- 所在楼层 -->
        <van-cell
          title="所在楼层"
          is-link
          :value="data.floor || '请选择'"
          @click="showFloor = true"
        />
        <!-- 楼层弹出层 -->
        <van-action-sheet
          v-model="showFloor"
          :actions="actionsFloor"
          @select="onSelectFloor"
          cancel-text="取消"
        />
      </van-cell-group>
      <!-- 所在楼层 -->
      <!-- 朝向 -->
      <van-cell
        is-link
        :value="data.oriented || '请选择'"
        :border="false"
        @click="showOriented = true"
      >
        <span slot="title">朝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;向</span>
      </van-cell>
      <!-- 朝向弹出层 -->
      <van-action-sheet
        v-model="showOriented"
        :actions="actionsOriented"
        @select="onSelectOriented"
        cancel-text="取消"
      />
      <!-- 朝向 -->
      <div class="information">房屋标题</div>
      <!-- 用户名 -->
      <van-field
        v-model="data.title"
        placeholder="请输入标题(例如:整租小区名2室5000元)"
        :border="false"
      />
      <!-- 用户名 -->
      <div class="information">房屋图像</div>
      <!-- fileList用于绑定图片个数,固定写法 -->
      <!-- 图片上传 -->
      <van-uploader v-model="data.houseImg" multiple />
      <!-- 图片上传 -->
      <div class="information">房屋配置</div>
      <!-- 房屋配置列表 -->
      <van-grid :column-num="5" :border="false">
        <van-grid-item
          v-for="item in furniture"
          :key="item.id"
          :class="{ active: item.isActive }"
          @click="item.isActive = !item.isActive"
        >
          <span slot="text" class="text">{{ item.furnitureList }}</span>

          <i slot="icon" class="iconfont" :class="item.iconList"></i>
        </van-grid-item>
      </van-grid>
      <!-- 房屋配置列表 -->
      <!-- 房屋描述 -->
      <div class="bgmask">
        <div class="information">房屋描述</div>
        <van-field
          rows="4"
          autosize
          type="textarea"
          placeholder="请输入房屋描述信息"
          show-word-limit
          v-model="data.description"
        />
      </div>
      <!-- 房屋描述 -->
      <div class="gobtn">
        <van-button plain type="primary" class="gobtn-btn" @click="noAdd"
          >取消</van-button
        >
        <van-button type="primary" class="gobtn-btn">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  name: 'Add',
  data() {
    return {
      // 发布房源的内容
      data: {
        title: '',    //房屋标题
        description: '',  //房屋描述
        houseImg: [],   //图片
        oriented: '',   //朝向
        supporting: [], //配置
        price: '',    //租金
        roomType: '',  //户型
        size: '', //面积
        floor: '',  //楼层
        community: ''  // 小区名称
      },
      // 房屋配置数据列表
      furniture: [
        {
          iconList: 'icon-shimuyigui',
          furnitureList: '衣柜',
          id: 1,
          isActive: false
        },
        {
          iconList: 'icon-xiyiji',
          furnitureList: '洗衣机',
          id: 2,
          isActive: false
        },
        {
          iconList: 'icon-kongtiao',
          furnitureList: '空调',
          id: 3,
          isActive: false
        },
        {
          iconList: 'icon-meiqitianranqi',
          furnitureList: '天然气',
          id: 4,
          isActive: false
        },
        {
          iconList: 'icon-bingxiang',
          furnitureList: '冰箱',
          id: 5,
          isActive: false
        },
        {
          iconList: 'icon-nuanqi',
          furnitureList: '暖气',
          id: 6,
          isActive: false
        },
        {
          iconList: 'icon-dianshiji',
          furnitureList: '电视',
          id: 7,
          isActive: false
        },
        {
          iconList: 'icon-linyu',
          furnitureList: '热水器',
          id: 8,
          isActive: false
        },
        {
          iconList: 'icon-wifi',
          furnitureList: '宽带',
          id: 9,
          isActive: false
        },
        {
          iconList: 'icon-shafa',
          furnitureList: '沙发',
          id: 10,
          isActive: false
        }
      ],
      // 户型弹出层
      show: false,
      actions: [
        { name: '一室' },
        { name: '二室' },
        { name: '三室' },
        { name: '四室' },
        { name: '四室+' }
      ],
      // 楼层弹出层
      showFloor: false,
      actionsFloor: [
        { name: '高楼层' },
        { name: '中楼层' },
        { name: '低楼层' }
      ],
      // 朝向
      showOriented: false,
      actionsOriented: [
        { name: '东' },
        { name: '西' },
        { name: '南' },
        { name: '北' },
        { name: '东南' },
        { name: '东北' },
        { name: '西南' },
        { name: '西北' }
      ]
    }
  },
  components: {
    navBar
  },
  methods: {
    addRent(a) {
      console.log(a)
    },
    afterRead() {},
    // 退出添加
    noAdd() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '放弃发布房源？',
          confirmButtonText: '放弃',
          cancelButtonText: '继续编辑',
          cancelButtonColor: '#108ee9'
        })
        .then(() => {
          this.$router.back()
        })
    },
    // 弹出层
    onSelect(val) {
      this.data.roomType = val.name
      this.show = false
    },
    // 楼层弹出层
    onSelectFloor(val) {
      this.data.floor = val.name
      this.showFloor = false
    },
    // 朝向弹出层
    onSelectOriented(val) {
      this.data.oriented = val.name
      this.showOriented = false
    }
  },
  watch: {
    furniture: {
      deep: true,
      handler() {
        // supporting
        this.data.supporting = []
        this.furniture.forEach((item) => {
          if (item.isActive) {
            this.data.supporting.push(item.furnitureList)
          }
        })
        console.log(this.data.supporting)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.addIndex {
  padding-bottom: 40px;
}
.informationtop {
  color: #21b97a;
}
.information {
  height: 44px;
  font-size: 15px;
  line-height: 44px;
  border-bottom: 1px solid #f5f6f7;
  padding-left: 12px;
  background-color: #fff;
}
.form {
  color: #888;
  .iconfont {
    font-size: 28px;
  }
  .active {
    color: #21b97a !important;
  }
  .text {
    font-size: 14px;
  }
}
.van-uploader {
  margin: 10px;
}
.bgmask {
  padding-top: 20px;
  height: 210px;
  background-color: #f5f5f9;
}
.gobtn {
  position: fixed;
  bottom: -1px;
  width: 375px;
  height: 45px;
  .gobtn-btn {
    width: 50%;
    border: none;
  }
}
</style>
