<template>
  <div class="slider2">
  <el-row :gutter="20">
      <el-col :span="18">
      <div class="block">
        <el-slider v-model="value2" 
        :format-tooltip="formatTooltip"
        :step="20"
        show-stops
        :marks="marks"
        @change="getdata2(value2)"> 
        </el-slider>
      </div>
      </el-col>
    </el-row>
    <div>sssssssss</div>

  </div>
</template>

<script>
export default {
  props:{
    initValue2:Number,
    require:true
  },
  data() {
    return {
      value2:this.initValue2,
      marks: {
        0: '年',
        20: '月',
        40: '日',
        60:'时',
        80:'分',
        100:'秒'
      }
    }
  },
  methods:{
    formatTooltip(val) {
      if(val==0)return '年';
      else if(val==20)return '月';
      else if(val==40) return'日';
      else if(val==60) return'时';
      else if(val==80) return'分';
      else if(val==100) return'秒';
    },
    getdata2(zi){
      this.$emit('myValue2',zi)
    }
  }
  }

</script>

<style>
.slider2{
    margin: 10px 50px 50px 100px;
}
.slider2 .el-slider__bar{
  background-color: #FF4128;

}
.slider2 .el-slider__button{
    border: 2px solid #FF4128;
}
</style>