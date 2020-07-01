<template>
    <el-menu :default-active="activeIndex" 
              class="el-menu-demo" 
              mode="horizontal" 
              router
              background-color="#303133"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect">
        <div class="logo"><img src="../assets/logo.png"></div>
        <el-menu-item index="/index">首页</el-menu-item>
        <el-submenu index="/about">
            <template slot="title">关于我们</template>
            <el-menu-item index="/company">公司介绍</el-menu-item>
            <el-menu-item index="/brand">品牌文化</el-menu-item>
        </el-submenu>
        <el-menu-item index="/product">BAOS产品</el-menu-item>
        <el-menu-item index="/Technique">核心技术</el-menu-item>
        <el-submenu index="/news">
            <template slot="title">新闻公告</template>
            <el-menu-item index="/affair">行业新闻</el-menu-item>
            <el-menu-item index="/media">媒体报道</el-menu-item>
        </el-submenu>
        <el-submenu index="/contact">
            <template slot="title">联系我们</template>
            <el-menu-item index="/union">加盟我们</el-menu-item>
            <el-menu-item index="/address">地址/电话</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: '/index',
    };
  },
  created () {
    this.onRouteChanged()
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'onRouteChanged'
  },
  methods: {
    onRouteChanged () {
      let that = this
      that.path  = that.$route.path
      // 高亮当前菜单
      that.checkRouterLocal(that.path);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    checkRouterLocal(path) {
      // 查找当前路由下标高亮
      this.activeIndex = path;
    }
}
}
</script>

<style lang="less">
.el-menu--horizontal .el-menu .el-menu-item {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Microsoft YaHei","黑体","宋体" ;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 1px #303133 !important;
}
.el-menu-demo {
  display: flex;
  justify-content: flex-end;
}
.logo{
  height: 60px;
  line-height: 60px;
  padding-top: 5px;
  padding-left: 120px;
  position: absolute;
  left: 0;
  &:focus {
    outline: 0;
  }
  img {
    height: 100%;
  }
}
</style>