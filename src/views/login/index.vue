<template>
  <div class="login-wrapper">
  <div class="logo3"><img src="@/assets/img/logo3.png">
  <sqan class="xtmc">入学报到系统</sqan>
  </div>
    <el-card class="outer-card">
      <div class="image-frame"><img src="@/assets/img/tu1.jpg"class="tu1" ></div>
      <a href="http://www.ycu.edu.cn/" target="_blank">
        <img src="@/assets/img/logo2.png" class="tu2" ></a>>

      <div class="login">
        <el-card class="login-card">
          <p class="login-title">用户登录</p>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>

            <div class="options">
              <el-checkbox v-model="ruleForm.rememberMe">记住密码</el-checkbox>
              <el-button class="reg" type="text" @click="gotoRegister">注册</el-button>
            </div>

            <el-form-item class="form-actions">
              <el-button type="primary" class="btn1" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </el-card>
    <div id="footerID" class="footer" >
	<p>版权所有© Copyright 2002-2102 运城学院　　中国山西·运城盐湖区复旦大街1155号 数学与信息技术学院2003班&nbsp;&nbsp;&nbsp;版本V-4.0.0</p>
</div>
  </div>
</template>

<script>
import axios from '@/api'

export default {
  name: 'LoginForm',
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
        rememberMe: false
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '用户名长度在 3 到 18 个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度在 6 到 18 个字符之间', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const response = await axios.post('get_login', {
              user: this.ruleForm.name,
              password: this.ruleForm.password,
              rememberMe: this.ruleForm.rememberMe
            });
            // ... 登录逻辑处理
          } catch (error) {
            // ... 错误处理
          }
        }
      });
    },
    gotoRegister() {
      this.$router.push('/register'); // 导航到注册页面
    }
  }
}
</script>

<style scoped>
.tu2{
  position: absolute;
  top: 25px;
  left: 10px;
  height: 120px;
}
.footer{
  position: relative;
  left: 180px;
  top: 20px;
  color: #8099AF;
  font-size: 12px;
  font-family: "microsoft YaHei";
}
.xtmc{
  position: relative;
  left: 15px;
  top: -13px;
  font-size: 24px;
  color: #1069A4;
  font-family: "microsoft YaHei";
}
.logo3{
  position: absolute;
  top: -70px;
}
.image-frame {
  position: absolute;
  left: 18px;
  top: 130px;
  width: 600px;
  height: 370px;
  border: 3px solid rgb(203, 228, 246); /* 添加一个10px宽的边框，并使用您选择的颜色 */
  //box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); /* 添加一个轻微的阴影效果 */
  overflow: hidden; /* 隐藏超出边框的图像部分 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.tu1 {
  max-width: 100%;
  max-height: 100%;
}

.login-wrapper {
  position: absolute;
  left: 150px;
  width: 1100px;
  top: 100px;
  height: 50vh;
  background-color: #f5f5f5; /* 背景颜色设置为浅灰色，可以根据需要调整 */
}

.outer-card {

  background-color: #FFFFFF; /* 外框的底色设置为白色 */
  padding: 20px; /* 外框内边距 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 给外框添加阴影 */
}

.login {
  position: relative;
  left: 600px;
  width: 100%;
  max-width: 400px; /* 登录框的最大宽度 */
}

.login-card {
  width: 100%;
  padding: 15px; /* 减少内边距让内容更紧凑 */
}

.login-title {
  margin-bottom: 10px; /* 减少标题与表单项之间的间距 */
}


.options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px; /* 减少选项与动作按钮之间的间距 */
}

.form-actions {
  text-align: right;
  margin-top: 10px; /* 调整按钮组与其他表单元素之间的间距 */
}
.btn1{
  width: 100%; /* 拉长按钮 */
  max-width: 400px; /* 限制按钮的最大宽度，可根据需要调整 */
}
.reg{
  position: relative;
  top: -10px;
}
</style>
