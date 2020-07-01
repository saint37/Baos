<template>
  <div id="app">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view style="animation-duration: 0.3s" />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import 'vue2-animate/dist/vue2-animate.min.css';
  export default {
    components: {
      NavBar
    },
    data() {
      return {

      };
    },
    methods: {

    }
  }
</script>

<style lang="less">
body {
  margin: 0;
  background: #303133;
  color: #fefefe;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Microsoft YaHei","黑体","宋体" ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fefefe;
  .el-header, .el-main {
    padding: 0;
  }
}
</style>
