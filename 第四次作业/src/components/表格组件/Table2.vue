<template>
  <div id="myChart2" :style="{ width: '740px', height: '340px' }"></div>
</template>

<script>
export default {
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart2.setOption({
        color: ["red", "green", "yellow", "blue", "pink"],
        legend: {
          top: "bottom",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#ffff",
            fontSize: 14,
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: ["30%", "60%"],
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              fontSize: 16,
            },
            labelLine: {
              length: 10, //第一条
              length2: 40,
            },
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
            ],
          },
        ],
      });
    },
  },

  mounted() {
    this.drawLine();
  },
};
</script>

<style>
</style>