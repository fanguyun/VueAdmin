<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <!--展开折叠开关-->
      <div class="menu-toggle" @click.prevent="collapse">
        <i class="iconfont icon-category" v-show="!collapsed"></i>
        <i class="iconfont icon-more" v-show="collapsed"></i>
      </div>
      <div class="topbar-title">
        <span class="top_logo">武汉教育局OA管理系统</span>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><img src="../assets/images/user.jpeg" class="user_pic"> 张飒&nbsp;&nbsp;<i
            class="iconfont icon-code"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="jumpTo('/user/profile')"><span style="color: #555;font-size: 14px;">个人信息</span></div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="jumpTo('/user/changepwd')"><span style="color: #555;font-size: 14px;">修改密码</span></div>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--导航菜单-->
        <el-menu :default-active="defaultActiveIndex" router :collapse="collapsed" @select="handleSelect">
          <template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
            <el-submenu v-if="!item.leaf" :index="index+''">
              <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
              <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow"
                            :class="$route.path==term.path?'is-active':''">
                <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"
                          :class="$route.path==item.children[0].path?'is-active':''">
              <i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </aside>

      <!--右侧内容区-->
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-row>
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </el-row>
          <el-row :span="24" style="text-align:center;line-height:35px;color:#666;">
              <el-col>copyright &copy;2018 XXX版权所有</el-col>
          </el-row>
        </div>
      </section>
    </el-col>

  </el-row>
</template>

<script>
import API from '../api/api_user';

export default {
  name: 'home',
  created() {
    this.$on('setNickName', text => {
      this.nickname = text;
    });

    this.$on('goto', url => {
      if (url === '/login') {
        localStorage.removeItem('access-user');
      }
      this.$router.push(url);
    });
  },
  data() {
    return {
      defaultActiveIndex: '0',
      nickname: '',
      collapsed: false
    };
  },
  methods: {
    handleSelect(index) {
      this.defaultActiveIndex = index;
    },
    //折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    jumpTo(url) {
      this.defaultActiveIndex = url;
      this.$router.push(url); //用go刷新
    },
    logout() {
      let that = this;
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonClass: 'el-button--warning'
      })
        .then(() => {
          //确认
          that.loading = true;
          that.$router.push('/login'); //用go刷新
        })
        .catch(() => {});
    }
  },
  mounted() {
    let user = localStorage.getItem('access-user');
    if (user) {
      user = JSON.parse(user);
      this.nickname = user.nickname || '';
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;

  .topbar-wrap {
    height: 60px;
    line-height: 60px;
    background: #1c2128;
    padding: 0px;

    .topbar-btn {
      color: #fff;
    }
    /*.topbar-btn:hover {*/
    /*background-color: #4A5064;*/
    /*}*/
    .top_logo {
      font-size: 18px;
      color: #fff;
      font-weight: 500;
      opacity: 0.8;
    }
    .topbar-title {
      float: left;
      width: 350px;
      padding-left: 0px;
    }
    .topbar-account {
      float: right;
      padding-right: 12px;
    }
    .userinfo-inner {
      cursor: pointer;
      color: #fff;
      opacity: 0.8;
      padding-left: 10px;
      position: relative;
      .user_pic {
        position: absolute;
        left: -30px;
        top: -8px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .iconfont {
        font-weight: 800;
      }
      .iconfont:hover {
        color: #409eff;
      }
    }
  }
  .main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  aside {
    min-width: 60px;
    background: #20262e;
    &::-webkit-scrollbar {
      display: none;
    }

    &.showSidebar {
      overflow-x: hidden;
      overflow-y: auto;
    }

    .el-menu {
      height: 100%; /*写给不支持calc()的浏览器*/
      height: -moz-calc(100% - 80px);
      height: -webkit-calc(100% - 80px);
      height: calc(100% - 80px);
      border-radius: 0px;
      background-color: #20262e;
      border-right: 0px;
    }

    .el-submenu .el-menu-item {
      min-width: 60px;
      background-color: #20262e;
    }
    .el-menu {
      width: 220px;
    }
    .el-menu--collapse {
      width: 60px;
    }

    .el-menu .el-menu-item,
    .el-submenu .el-submenu__title {
      height: 56px;
      line-height: 56px;
    }
    .el-submenu .el-submenu__title .el-menu-item:hover,
    .el-submenu .el-menu-item:hover,
    .el-submenu .el-submenu__title:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: #409eff;
    }
  }

  .menu-toggle {
    float: left;
    text-align: center;
    color: #fff;
    opacity: 0.8;
    font-weight: bold;
    line-height: 60px;
    width: 60px;
  }
  .menu-toggle:hover {
    color: #409eff;
  }
  .menu-toggle:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .content-container {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 1px;

    .content-wrapper {
      box-sizing: border-box;
    }
  }
}
</style>
