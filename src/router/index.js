import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/login',  //登录页
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',  //布局页
    name: 'home',
    meta:{title:'首页'},
    redirect:'/index',
    component: () => import('../views/home/index.vue'),
    children:[
      {
        path: '/index',  //首页
        name: 'index',
        meta:{title:'首页'},
        component: () => import('../views/home/index/index.vue')
      },
      {
        path: '/stats',  //信息咨询
        name: 'stats',
        meta:{title:'信息咨询'},
        component: () => import('../views/home/stats/index.vue')
      },
      {
        path: '/money',  //缴费系统
        name: 'money',
        meta:{title:'缴费系统'},
        component: () => import('../views/home/money/index.vue')
      },
      {
        path: '/wms',  //学生信息管理
        name: 'wms',
        meta:{title:'入学报到'},
        component: () => import('../views/home/wms/index.vue'),
        children:[
          {
            path: '/wms/list',  //学生信息
            name: 'wmsList',
            meta:{title:'学生信息登记'},
            component: () => import('../views/home/wms/list.vue')
          },
          {
            path: '/wms/list2',  //入学材料提交与审核
            name: 'wmsList2',
            meta:{title:'入学材料提交与审核'},
            component: () => import('../views/home/wms/list2.vue')
          },
        ]
      },
      {
        path: '/hotel',  //宿舍管理
        name: 'hotel',
        meta:{title:'宿舍管理'},
        component: () => import('../views/home/hotel/index.vue'),

      }
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
