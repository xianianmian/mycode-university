<template>
    <div class="demo">
        <h2 class="ddd">{{msg}} {{kkk}}</h2>
        <el-row :gutter="20">
        <el-col :span="18">
            <el-input v-model="zainput"></el-input>
            <el-button @click="zafun" type="info">点一下</el-button>
            <el-button @click="unbind" type="info">解绑一个</el-button>
            <el-button @click="unbind" type="info">解绑多个</el-button>
        </el-col>
        </el-row>

        
    </div>
</template>

<script>
export default {
    name:'za',
    data(){
        return{
            msg:'天气之子',
            kkk:'',
            zainput:''
        }
    },
    methods:{
        zafun(){
            this.kkk=this.zainput;
            this.zainput='';
            this.$emit('at',this.kkk);
            this.$emit('ggg');
        },
        unbind(){//解绑一个
            // this.$off('at');
            this.$off(['at','ggg'])
        }
    }
}
</script>

<style lang="less">
    .demo{
        background: blue;
        .ddd{
            color: red;
        }
    }
</style>