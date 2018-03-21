import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Dashboard from '@/components/Dashboard';
import Main from '@/components/Main';

// 个人事务
import Todo from '@/components/person/Todo';
import Timelist from '@/components/person/Timelist';

//公文管理
import SendFile from '@/components/govfile/SendFile';
import AcceptFile from '@/components/govfile/AcceptFile';
import AcceptShow from '@/components/govfile/AcceptShow';

//办公管理
import Supervise from '@/components/office/Supervise';
import SuperviseTask from '@/components/office/SuperviseTask';
import CarList from '@/components/office/CarList';
import CarAdd from '@/components/office/CarAdd';
import MeetList from '@/components/office/MeetList';
import MeetAdd from '@/components/office/MeetAdd';

import BookList from '@/components/book/list';
import BookCategoryList from '@/components/bookcategory/list';

import UserList from '@/components/user/list';
import UserChangePwd from '@/components/user/changepwd';
import UserProfile from '@/components/user/profile';

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve);

Vue.use(Router);

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: '个人事务',
      component: Home,
      redirect: '/main',
      // leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-component', // 图标样式class
      children: [
        {
          path: '/main',
          name: '首页',
          component: Main
        },
        {
          path: '/person/todo',
          component: Todo,
          name: '待办事项',
          menuShow: true
        },
        {
          path: '/person/timelist',
          component: Timelist,
          name: '日程安排',
          menuShow: true
        },
        {
          path: '/geren',
          component: Dashboard,
          name: '个人通讯',
          menuShow: true
        },
        {
          path: '/jihua',
          component: Dashboard,
          name: '工作计划',
          menuShow: true
        },
        {
          path: '/wendan',
          component: Dashboard,
          name: '个人文档',
          menuShow: true
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '公文管理',
      menuShow: true,
      iconCls: 'iconfont icon-survey1', // 图标样式class
      children: [
        {
          path: '/govfile/sendfile',
          component: SendFile,
          name: '发文管理',
          menuShow: true
        },
        {
          path: '/govfile/acceptfile',
          component: AcceptFile,
          name: '收文管理',
          menuShow: true
        },
        {
          path: '/govfile/acceptshow',
          component: AcceptShow,
          name: '收文管理',
          menuShow: false
        },
        {
          path: '/guidan',
          component: Dashboard,
          name: '归档文件',
          menuShow: true
        },
        {
          path: '/chaxun',
          component: Dashboard,
          name: '公文查询',
          menuShow: true
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '办公管理',
      menuShow: true,
      iconCls: 'iconfont icon-electronics',
      children: [
        {
          path: '/book/list',
          component: Dashboard,
          name: '部门文件',
          menuShow: true
        },
        {
          path: '/book/category',
          component: Dashboard,
          name: '领导动态',
          menuShow: true
        },
        {
          path: '/book/renshi',
          component: Dashboard,
          name: '人事管理',
          menuShow: true
        },
        {
          path: '/book/kaoqin',
          component: Dashboard,
          name: '考勤管理',
          menuShow: true
        },
        {
          path: '/office/meetlist',
          component: MeetList,
          name: '会议管理',
          menuShow: true
        },
        {
          path: '/office/meetadd',
          component: MeetAdd,
          name: '新增会议',
          menuShow: false
        },
        {
          path: '/book/wupin',
          component: Dashboard,
          name: '物品管理',
          menuShow: true
        },
        {
          path: '/office/supervise',
          component: Supervise,
          name: '督办通知',
          menuShow: true
        },
        {
          path: '/office/supervisetask',
          component: SuperviseTask,
          name: '督办通知表单',
          menuShow: false
        },
        {
          path: '/office/carlist',
          component: CarList,
          name: '车辆管理',
          menuShow: true
        },
        {
          path: '/office/caradd',
          component: CarAdd,
          name: '车辆s申请',
          menuShow: false
        },
        {
          path: '/office/ss',
          component: Dashboard,
          name: '通知公告',
          menuShow: true
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '通讯管理',
      menuShow: true,
      iconCls: 'iconfont icon-earth', // 图标样式class
      children: [
        {
          path: '/user/youjian',
          component: Dashboard,
          name: '电子邮件',
          menuShow: true
        },
        {
          path: '/dunxin',
          component: Dashboard,
          name: '手机短信',
          menuShow: true
        },
        {
          path: '/liuchengku',
          component: Dashboard,
          name: '办事流程库',
          menuShow: true
        },
        {
          path: '/minglu',
          component: Dashboard,
          name: '通讯名录',
          menuShow: true
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '系统管理',
      menuShow: true,
      iconCls: 'iconfont icon-set', // 图标样式class
      children: [
        {
          path: '/user/ry',
          component: Dashboard,
          name: '人员管理',
          menuShow: true
        },
        {
          path: '/bm',
          component: Dashboard,
          name: '部门管理',
          menuShow: true
        },
        {
          path: '/user/hj',
          component: Dashboard,
          name: '角色管理',
          menuShow: true
        },
        {
          path: '/quanxian',
          component: Dashboard,
          name: '权限管理',
          menuShow: true
        },
        {
          path: '/wh',
          component: Dashboard,
          name: '系统设置',
          menuShow: true
        },
        {
          path: 'user/profile',
          component: UserProfile,
          name: '个人信息',
          menuShow: false
        },
        {
          path: 'user/changepwd',
          component: UserChangePwd,
          name: '修改密码',
          menuShow: false
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user');
    next();
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'));
    if (!user) {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});

export default router;
