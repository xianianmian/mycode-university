<template>
<!-- 主页面 -->
  <div>
    <el-container>
  <el-aside width="outo" height="100%">
    <!-- 侧边栏 -->
    <common-aside></common-aside>
  </el-aside>
  <el-container style="height:100%">
    <!-- 头部 -->
    <el-header>
      <conmmon-header></conmmon-header>
    </el-header>
    <!-- 主体 -->
    <el-main ><Home :intmes="message"></Home></el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'//侧边栏组件
import ConmmonHeader from '../components/ConmmonHeader.vue'//头部组件
import Home from '../views/Home/Home.vue'//头部组件
export default {
  name:"Main",
  components:{CommonAside,ConmmonHeader,Home},

  data(){
    return{
      message:'aaaabbbbb'
    }
  }
};
</script>

<style  scoped>
  .el-header, .el-footer {
    background-color: #237cf1;
    
  }
  
  .el-aside {
    background-color:#545c64;
    height: 800px;
    
  }
  
  .el-main {
    background-color: white;
    padding-top: 0;
    height: 740px;
    
  }
  

</style>