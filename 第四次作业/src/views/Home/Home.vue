<template>
<!-- 主体组件 -->
  <div>
    <!-- <h1>1234</h1> -->
    <h1 v-for="item in jj" :key="item"></h1>
    <h1>sdfghjk</h1>
    <div class="box1"><table-1></table-1></div>
    <div class="box2"><table-3></table-3></div>
    <div class="box3"><table-2></table-2></div>
  </div>
</template>

<script>
// 引入echarts三个table
import Table1 from '../../components/表格组件/Table1.vue'
import Table2 from '../../components/表格组件/Table2.vue'
import Table3 from '../../components/表格组件/Table3.vue'
export default {
  props:{
    intmes:String,
    required:true
  },
  data() {
    return {
      jj:$store.state.kk,
    };
  },
  components:{Table1,Table2,Table3},
};
</script>

<style>
.box1{
  height: 240px;
  width:540px;
  display: flex;
  background-color: white;
    float: left;
  margin-left: 20px; 
}
.box2{
  height: 240px;
  width:540px;
  display: flex;
  background-color: white;
  float: right;
  margin-right: 20px; 
}
.box3{
  height: 340px;
  width:1100px;
  display: flex;
   background-color: white;
   margin-left: 20px;
   margin-right: 20px;
   margin-top: 120px;
}

</style>