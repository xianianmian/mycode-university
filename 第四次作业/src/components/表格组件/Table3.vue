<template>
  <div id="myChart3" :style="{ width: '540px', height: '240px' }"></div>
</template>

<script>
export default {
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      myChart3.setOption({
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          top:'0%',
          textStyle:{
            color:'black',
            fontSize:'12'
          },
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          left: '10',
          right: '10',
          bottom: '30',
          top:'30',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [1,2,3,4,5,6,7,8,9],
            axisLabel:{
              textStyle:{
                color:'black',
                fontSize:'12',
              }
            },
            axisLine:{
              textStyle:{
                color:'black',
                fontSize:'12',
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel:{
              textStyle:{
                color:'black',
                fontSize:'12',
              }
            },
            axisLine:{
              textStyle:{
                color:'black',
                fontSize:'12',
              }
            },
            splitLine:{
              lineStyle:{
                color:'black',
              }
            }
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            // stack: 'Total',
            areaStyle: {},
            emphasis: {
              scale:true,
              focus: 'series'
            },
            data: [430, 132, 191, 134, 90, 230, 210,234,57,33,541],
            smooth:true,
            lineStyle:{
              color:'#018d45',
              width:'2'
            },
            areaStyle:{
              color:'#018d45',
            },
            //填充颜色
            areaStyle:{
              color:'#018d45'
            },
            //拐点
            symbol:'circle',
            showSymbol:false,
            //设置拐点颜色
            itemStyle:{
              color:'#018d45',
              borderWidth:12
            }
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 130, 310,333,231,111,123],
            smooth:true,
            lineStyle:{
              color:'yellow',
              width:'2'
            },

            //填充颜色
            areaStyle:{
              color:'yellow'
            },
            //拐点
            symbol:'circle',
            showSymbol:false,
            //设置拐点颜色
            itemStyle:{
              color:'yellow',
              borderWidth:12
            }
          },
      
        ]
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