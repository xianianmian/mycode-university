<template>
  <div id="myChart1" :style="{width: '540px', height: '240px'}"></div>
</template>

<script>
export default {
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart1.setOption({
            drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('box1'))
        // 绘制图表
        myChart1.setOption({
            title: {
            text: '波形图'
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        legend: {},
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1', '2', '3', '4', '5', '6', '6', '7', '8', '9', '10'],
            axisLine: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}ms'
            },
            axisLine: {
                show: true
            },
            max: 20,
            min: -20
        },
        series: [
            {
                name: 'uiCycle',
                type: 'line',
                data: [1, -2, 2, -4, 3, 2, 0, -3, 5, 6, -3,],
            },
            {
                type: 'line',
                name: 'uiJitter',
                data: [5, 0, 3, -4, 7, 2, 0, -4, -3, 2, 4,],
            }
        ]
        });
    }
        });
    }
  },
  mounted(){
    this.drawLine();
  }
}
</script>

<style>

</style>