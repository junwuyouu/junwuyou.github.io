// 路由配置文件
// 路由组件在这里引入
import Vue from '../../pages/vue/index'
import ReactD from '../../pages/react/index'
import myCss from '../../pages/css/index'
import myJs from '../../pages/js/index'
import myHtml from '../../pages/html/index'

const menuList = [
  {
    title: '框架',
    url: '/frame',

    subMenu: [
      {
        title: 'Vue',
        url: '/frame/vue',

      },
      {
        title: 'React',
        url: '/frame/react',

      }
    ]
  },
  {
    title: 'Html',
    url: '/html',

    subMenu: []
  },
  {
    title: 'CSS',
    url: '/css',
    subMenu: []
  },
  {
    title: 'JavaScript',
    url: '/js',
    subMenu: []
  }
];

const routeList = [
  {
    path: '/vue',
    component: Vue
  },
  {
    path: '/react',
    component: ReactD,
  },
  {
    path: '/css',
    component: myCss,
  },
  {
    path: '/html',
    component: myHtml,
  },
  {
    path: '/js',
    component: myJs,
  }
]

export default {menuList, routeList}