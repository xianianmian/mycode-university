<template>
  <header>
    <div class="l-content">
      <!-- <button plain icon="el-icon-menu"></button> -->
      <el-button class="el-icon-s-fold" @click="handMenu"></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="min">
        <span class="el-drodpdwon-link"
          ><img :src="userImg" class="user"/></span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item> <router-link to="/denglu">个人中心</router-link> </el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../assets/logo.png"),
    };
  },
  methods:{
    handMenu(){
      this.$store.commit('collapseMenu');
    }
  },
};
</script>

<style >
header{

    height: 100%;
    align-items: center;
    justify-content: space-between;
}
.l-content{float: left;}
.el-button{
    margin-right: 20px;
}
.r-content{
  float: right;background-color: cornsilk;
}
.r-content .user{
    width:40px;
    height: 40px;
    border-radius: 50%;
    float: right;
    
}

</style>