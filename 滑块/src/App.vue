<template>
  <div id="app">
    <Home ref="aaa"
    :initValue="slider1.sliderInit"
    :titile="slider1.marginText"
    @myValue1="backValue1"
    ></Home>
    <About  
    :initValue2="slider2.sliderInit"
    @myValue2="backValue2"
    ></About>
    
    <div class="stduy">
      <p>{{count}}</p>
      <el-button @click="fun1">父组件count++</el-button>
      <el-button @click="fun2">子组件count+</el-button>
    </div>

    <!-- 修改v-show  插槽 -->
    <div class="Tree" v-show="true">
      <div class="box">
      <Tree><h1>wssb</h1></Tree>
      <!-- 去掉插槽试试 -->
      </div>
      <div class="box">
      <Tree>
        <template v-slot:2hao>
          <a href="#">去水电费水电费地方</a>
        </template>
        <template v-slot:hao3 >
          我的天空
          <a href="#">{{hao3.name.name}}</a>
        </template>
      </Tree>
      </div>
      <div class="box">
      <Tree>
        <h4 slot="2hao">sdfdsfsdfs</h4>
        <!-- 简写不方便 -->
      </Tree>
      </div>
    </div>
    <br>
      <Za ref="sunday"/> 
      <Za v-show="false" v-on:at="fun3" @ggg="fun4"/>
  </div>
</template>


<script>
import Home from '../src/views/Home.vue'
import About from '../src/views/About.vue'
import Tree from '../src/components/Tree.vue'
import Za from '../src/components/Za.vue'
export default {
  components:{Home,About,Tree,Za},
  data(){
    return{
      count:0,
      slider1:{
        sliderInit:50,
        marginText:'边距一号',
      },
      slider2:{
        sliderInit:20,
      },
    }
  },
  methods:{
    backValue1(value,biaoti){
      this.slider1.sliderInit=value;
      this.slider1.marginText=biaoti;
    },
    backValue2(zi){
      this.slider2.sliderInit=zi;
    },
    fun1(){
      this.count++;
    },
    fun2(){
      console.log('父组件通过子组件别名调用子组件方法')
      this.$refs.aaa.one();
    },
    fun3(mess){
      this.appmsg=mess
    },
    fun4(){
      this.appmsg2="@阳菜"
    }
  },
  mounted(){
    setTimeout(()=>{
      this.$refs.sunday.$on('at',this.fun3)
      // this.$refs.sunday.$once('at',this.fun3)
    },2000)
    
  }

}
</script>

<style >
.Tree{
  width: 100%;
  height: 300px;
  background-color: darkgray;
}
.Tree .box{
  float: left; 
  margin-left: 20px;
  background-color: yellow;
  width: 30%;}
</style>

