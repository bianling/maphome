<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="筛选" ref="item">
        <van-picker
          ref="picker"
          show-toolbar
          title="标题"
          :columns="columns"
          @confirm="fn"
        />
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          text: "浙江",
          children: [
            {
              text: "不限",
              value: "null",
              children: [{ text: "不限", value: "null" }],
            },
            {
              children: [
                {
                  text: "西湖区",
                  value: 123,
                },
                { text: "余杭区" },
              ],
              text: "杭州",
              value: 11354,
            },
            {
              text: "温州",
              children: [{ text: "鹿城区" }, { text: "瓯海区" }],
            },
          ],
        },
        {
          text: "福建",
          children: [
            {
              text: "福州",
              children: [{ text: "鼓楼区" }, { text: "台江区" }],
            },
            {
              text: "厦门",
              children: [{ text: "思明区" }, { text: "海沧区" }],
            },
          ],
        },
      ],
    };
  },
  methods: {
    fn(val) {
      console.log(val);
      console.log(this.$refs.picker.getValues());
    },
  },
  created() {
    console.log(this.columns);
  },
};
</script>

<style>
</style>