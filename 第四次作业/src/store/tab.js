export default{
    // 侧边栏收缩按钮js
    state:{
        isCollapse:false
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse= !state.isCollapse;
        }
    }
}