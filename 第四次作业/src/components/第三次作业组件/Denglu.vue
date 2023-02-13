<template>
<div class="third">
  <div class="head">
    <el-image style="width: 1000px; height: 80px" :src="imgs[0]" ></el-image>
  </div>

  <div class="main">
    <br><br>
    <div class="form">
        <el-row>
          <el-col :span="10" :offset="14">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm zd">
                <el-form-item label="登录用户" prop="pass">
                  <el-input  v-model="ruleForm.name" autocomplete="off" style="width:350px"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="width:350px"></el-input>
                </el-form-item >

                <el-form-item  prop="input3">
                  <div id="yzm" v-bind="yzm"></div>
                    <el-input placeholder="验证码" v-model="ruleForm.input3" autocomplete="off" style="width:250px"></el-input>
                </el-form-item >

                <el-form-item >
                  <el-button  @click="subform">
                    <el-image :src="imgs[4]" style="width: 100px; height: 30px"></el-image>
                  </el-button>
                  <el-button  ><el-image :src="imgs[1]" style="width: 100px; height: 30px"></el-image></el-button>
                </el-form-item>
              </el-form>
          </el-col>
        </el-row>
    </div>
  </div>
</div>
</template>

<script>
import img1 from '../../assets/lcsj.jpg'
import img2 from '../../assets/cz.jpg'
import img3 from '../../assets/dlkk.jpg'
import img4 from '../../assets/dt.jpg'
import img5 from '../../assets/login.jpg'
import img6 from '../../assets/xx.jpg'
export default {
  data(){
      var validatePass = (rule, value, callback) => {
        if(this.ruleForm.name!='')
        {
          callback(new Error('请输入账号'));
        }
        if(this.ruleForm.name!=$store.state.zh)
        {
          callback(new Error('请重新输入账号'));
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if(this.ruleForm.checkPass!=$store.state.mm)
        {
          callback(new Error('请重新输入密码'));
        }
      };
    return{
      imgs:[img1,img2,img3,img4,img5,img6],
      yzm: '',
       ruleForm: {
          name: '',
          checkPass: '',
          
          input3:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods:{
      subform(){
        if(this.ruleForm.name!='xianianmian'&&this.ruleForm.checkPass!='123456')
        {
          alert("有问题，看提示");
        }
        else{
          alert("成功 ");
          this.$router.push('/main');
        }

      }
    }
  };
  window.onload = function () {
  var Y = document.getElementById("yzm");
  Y.innerHTML = Math.random().toString(36).substr(2).slice(0, 4);
  Y.onclick = function () {
    Y.innerHTML = Math.random().toString(36).substr(2).slice(0, 4);
  };
  function xianshi() {
    var img = document.querySelector(".img1");
    img.style.display = img.style.display == "none" ? "" : "none";
    setTimeout("xainshi()", 100);
  }
  
};

</script>

<style>
.main{
  width: 100%;
  height: 500px;
  background-image: url('../../assets/dt.jpg') ;
  background-size:100% 500px;
}
.main .form .el-col{
  height: 450px;
  background-image: url('../../assets/dlkk.jpg');
  background-size: 80% 90%;
  background-repeat: no-repeat;
  padding: 100px 10px 20px 0px;
}
.main .form .el-col .el-button{
  padding: 0 5px 0 5px;border:0px;
}
#yzm {
  background-color: rgb(216, 214, 112);
  padding: 5px;
  width: 50px;
  border: black 1px solid;
  border-radius: 5px;
  color: rgb(250, 9, 9);
  font-size: 1.2rem;
  float: left;
  margin-left: -10px;
}
</style>