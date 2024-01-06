<template>
   <div id="module">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu />
      <el-container>
        <!-- 右侧主体 -->
        <!-- 头部 -->
        <el-header height="60px">

          <Breadcrumb />
          <el-button class="exit" type="primary" @click="goBack()">退出</el-button>
        </el-header>
<!--        <img src="@/assets/img/logo2.png" class="logo2">-->
        <!-- 主体 -->
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './navMenu.vue'
import Breadcrumb from './breadcrumb'
export default {
  data(){
    return {
      
    }
  },
  methods:{
      goBack(){
        this.$router.push("/login");
      }
  },
  components:{
    NavMenu,
    Breadcrumb
  }
}
</script>

<style>
  .logo2{
    position: relative;
    left: 400px;
    height: 78px;
  }
</style>