<template>
  <div>
    <!-- 引用element导航菜单 -->
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd07b"
    >
    <h3 style="color:#fff " v-show="!isCollapse" >我的侧边栏</h3>
    <h3 style="color:#fff "  v-show="isCollapse">后台</h3>
    <el-menu-item :index="item.path" v-for="item in nochildren" 
    :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

      <el-submenu :index="item.label" v-for="item in haschildren" :key="item.path">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" 
          :key="subIndex" @click="clickMenu(item)" >
            <i :class="'el-icon-'+subItem.icon"></i>
          <span slot="title">{{subItem.label}}</span>
            </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import func from 'vue-editor-bridge';
export default {
  data() {
    return {
      menu:[
        {
          path:'/',
          name: 'home',
          label:'首页',
          icon: 's-Home',
          url:'Home/Home',
        },
        {
          path:'/mall',
          name: 'mall',
          label :'商品管理',
          icon: 'video-play',
          url:'MallMange/MallMange',
        },
        {
          path:'/user',
          name: 'user',
          label:'用户管理',
          icon: 'user',
          url:'userMange/userMange',
        },
        {
          label:'其他',
          icon:'location',
          children:[
            {
              path:'/papel',
            name: 'papel',
            icon: 'setting',
            label:'页面1',
            url:'other/other',
            },
            {
              path:'/pape2',
              name: 'pape2',
              icon: 'setting',
              label:'页面2',
              url:'other/other',
            },
          ],
        },
      ],
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    clickMenu(item){
      this.$router.push({name:item.name});
    }
  },
  computed:{
    nochildren(){
      // return this.datas.filter((item)=>!item.title.search(this.input1))
      return this.menu.filter((item)=>! item.children);
      // this.menu = this.menu.filter((item)=>! item.children);
      // return this.menu
      // return this.menu.filter(function(item){
      //   return !item.children
      // })
    },
    haschildren(){
      return this.menu.filter((item)=> item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse;
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  
}
</style>