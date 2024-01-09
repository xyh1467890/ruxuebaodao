<template>
  <div class="login-wrapper">
    <div class="logo3">
      <img src="@/assets/img/logo3.png">
      <span class="xtmc">入学报到系统</span>
    </div>
    <el-card class="outer-card">
      <img src="@/assets/img/tu1.jpg" class="tu1">
      <a href="http://www.ycu.edu.cn/" target="_blank">
        <img src="@/assets/img/logo2.png" class="tu2"></a>
      <img src="@/assets/img/tu2.jpg" class="tu2-2">
      <div class="login">
        <el-card class="login-card">
          <p class="login-title">用户注册</p>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item label="学号/教职工号" prop="idNumber">
              <el-input v-model="ruleForm.idNumber" placeholder="请输入学号或教职工号"></el-input>
            </el-form-item>

            <el-form-item class="form-actions">
              <el-button type="primary" class="btn1" @click="register">注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </el-card>
    <div id="footerID" class="footer">
      <p>版权所有© 运城学院　数学与信息技术学院2003班 版本V-4.0.0</p>
    </div>
  </div>
</template>

<script>
import axios from '@/api'

export default {
  name: 'RegisterForm',
  data() {
    return {
      ruleForm: {
        name: '',
        email: '',
        password: '',
        idNumber: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '用户名长度在 3 到 18 个字符之间', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度在 6 到 18 个字符之间', trigger: 'blur' }
        ],
        idNumber: [
          { required: true, message: '请输入学号或教职工号', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    register() {
      this.$refs['ruleForm'].validate(async (valid) => {
        if (valid) {
          // 注册逻辑处理
          try {
            const response = await axios.post('register', this.ruleForm);
            // 处理响应
          } catch (error) {
            // 错误处理
          }
        }
      });
    }
  }
}
</script>


<style scoped>
.tu2-2{
  position: absolute;
  top: 500px;
  left: 20px;
  height: 150px;
  width: 600px;
}
.tu2{
  position: absolute;
  top: 25px;
  left: 10px;
  height: 120px;
}
.footer{
  position: relative;
  left: 370px;
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
.tu1{
  position: absolute;
  left: 20px;
  top: 147px;
  width: 600px;
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
