<template>
  <el-aside width="200px" class="aside">
    <el-menu :default-active="$route.path" exact class="el-menu-vertical-demo" router>
      <!-- 循环遍历 items -->
      <div v-for="item in items" :key="item.url">
        <!-- 检查是否有子级菜单 -->
        <el-submenu v-if="item.child" :index="item.url">
          <template #title>
            <i :class="item.icon"></i>
            {{ item.name }}
          </template>
          <!-- 循环遍历子项 -->
          <el-menu-item v-for="child in item.child" :index="child.url" :key="child.url">
            <i :class="child.icon"></i>
            <span slot="title">{{ child.name }}</span>
          </el-menu-item>
        </el-submenu>

        <!-- 没有子级的菜单项 -->
        <el-menu-item v-else :index="item.url" @click="handleMenuItemClick(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </el-aside>
</template>



<script>
export default {
  data() {
    return {
      items: [
        { name: '首页', url: '/index', icon: 'el-icon-house' },
        { name: '信息咨询', url: '/stats', icon: 'el-icon-message' },
        { name: '入学报道', url: '/wms', icon: 'el-icon-school',
        child: [
            { name: '学生信息登记', url: '/wms/list',icon:'el-icon-sort' },
            { name: '材料提交与审核', url: '/wms/list2' ,icon:'el-icon-reading'},
          ]
        },
        { name: '缴费系统', url: '/money', icon: 'el-icon-money' },
        { name: '宿舍管理', url: '/hotel', icon: 'el-icon-house' },
        { name: '关于我们',
          link: 'http://www.ycu.edu.cn/',
          icon: 'el-icon-s-promotion',
          isExternalLink: true} // 添加一个标志以指示这是外部链接
      ]
    }
  },
  methods:{
    handleMenuItemClick(item){
      if (item.isExternalLink){
        window.open(item.link,'_blank');
        //检查菜单项是否是外部链接（通过 isExternalLink 属性）。如果是外部链接，它将使用 window.open() 函数在新标签页中打开该链接
      }
    }
  }
}
</script>
