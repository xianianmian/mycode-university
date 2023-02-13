<template>
  <div class="slider1">
    <el-row :gutter="20"  >
      <div class="text"><el-col :span="2">{{titile}}</el-col></div>
      <el-col :span="16">
        <div class="block" >
          <el-slider v-model="value1" 
          show-input input-size="small"
          @change="getdata1(value1,titile)">
          </el-slider>
        </div>
      </el-col>
    </el-row>
    
    <el-row>
      <el-button @click="one">子组件中控制count</el-button>
    </el-row>
  </div>
</template>

<script>
import App from '../App.vue'
export default {
  components:{App},
  props:{
    initValue:Number,
    titile:String,
    require:true
  },
  data() {
      return {
        value1:this.initValue
      }
    },
    methods:{ 
      getdata1(num,biaoti){
        this.$emit('myValue1',num,biaoti)
      },
      one(){
        this.$parent.fun1();
        //$parent调用父组件的方法 可套娃（孙子调爷爷$parent.$parent  
        //适当时候直接$root）
        console.log('我是子组件的控制按钮'+this.$parent.count);
      }
      
    }
}
</script>

<style>
.slider1{
  margin: 100px 50px 50px 100px;
}

.slider1 .text .el-col{
  padding-top: 7px;
  padding-left: 13px;
  font-size: 16px;
}

.slider1 .el-slider__bar{
  background-color: #FF4128;

}
.slider1 .el-slider__button{
    border: 2px solid #FF4128;
}
.slider1 .el-input-number__decrease{
  z-index: 0;
}
.slider1 .el-input-number__increase{
  z-index: 0;
}

</style>