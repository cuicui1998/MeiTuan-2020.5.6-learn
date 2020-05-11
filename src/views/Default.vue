<template>
  <div class="default">
    <el-container class="el-container">
      <el-header class="el-header" height="">
        <header-nav />
      </el-header>
      <el-main class="el-main">
        <router-view></router-view>

      </el-main>
      <el-footer class="el-footer"><footer-bar></footer-bar></el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from "components/header/index.vue";
import FooterBar from 'components/footer/FooterBar'
export default {
  components: {
    HeaderNav,
    FooterBar
  }
};
</script>

<style lang="less">
.el-container {
  .el-main,
  .el-footer {
    width: 1190px;
    margin: 0 auto;
    padding: 0;
  }
  .el-header {
    padding: 0;
  }
}
</style>