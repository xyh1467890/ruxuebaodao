<template>
  <div>
    <a href="http://www.ycu.edu.cn/" target="_blank"><img src="@/assets/img/logo2.png" class="logo2"></a>
    <!-- 走马灯 -->
    <el-carousel indicator-position="outside"  type="card" :interval="3000">
      <el-carousel-item v-for="item in imgLists" :key="item">
        <img :src="item" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>

    <!-- 卡片 -->
    <el-row :gutter="20" style="margin-top: 60px">
      <el-col :xs="24" :sm="12" :md="6" v-for="(o, index) in cardLists" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <div class="image-container">
            <img :src="o.img" class="image">
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <el-button type="primary" plain class="button" @click="navigateTo(o.route)">
                {{ cardButtonTitles[index] }}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data(){
    return {
      imgLists:[
        require("@/assets/img/banner1.png"),
        require("@/assets/img/banner2.png"),
        require("@/assets/img/banner3.png"),
      ],
      cardLists:[
        {title:'',img:require("@/assets/img/11.jpg"),route:'./wms/list'},
        {title:'',img:require("@/assets/img/12.jpg"),route:'./stats'},
        {title:'',img:require("@/assets/img/13.jpg"),route:'./money'},
        {title:'',img:require("@/assets/img/14.jpg"),route:'./hotel'}
      ],
      cardButtonTitles: ["入学报道", "信息咨询", "计划财政部", "住宿管理"]
    }
  },
  methods:{
  navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.carousel-image {
  filter: brightness(120%);
}

.el-card__body img{
  height: 200px;
  max-width: 100%;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 15px;
}
.button{
  position: relative;
  left: 70px;
  font-size: 15px;
}
.logo2{
  position: fixed;
  left: 650px;
  height: 85px;
  width: 225px;
  top: -5px;

}
</style>
