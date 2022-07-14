<template>
  <div>
    <div class="list-item" v-for="item in List" :key="item.houseCode">
      <div class="left">
        <img :src="item.houseImg" />
      </div>
      <div class="right">
        <h2 class="title">{{ item.title }}</h2>
        <div class="desc">{{ item.desc }}</div>
        <div class="tags">
          <span v-for="(obj, index) in item.tags" :key="index">
            {{ obj }}
          </span>
        </div>
        <div class="price">
          <span>{{ item.price }}</span
          >元/月
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCell',
  props: {
    List: Array,
    required: true
  }
}
</script>

<style lang="less" scoped>
.favorate-list {
  .goods-card {
    border-bottom: 1px solid #e5e5e5;
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 120px;
    padding-top: 18px;
    border-bottom: 1px solid #e5e5e5;
    .left {
      width: 106px;
      height: 80px;
      margin-right: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      .title {
        height: 22px;
        font-size: 15px;
      }
      .desc {
        height: 22px;
        font-size: 12px;
        color: #afb2b3;
      }
      .tags {
        position: relative;
        height: 22px;
        line-height: 22px;
        span {
          position: absolute;
          top: 1px;
          display: inline-block;
          width: 46px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background-color: #e1f5f8;
          color: #39becd;
          font-size: 12px;
          border-radius: 4px;
          margin-right: 3px;
        }
      }
      .price {
        height: 23px;
        color: #fa5741;
        font-size: 12px;
        margin-top: 2px;
        span {
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
