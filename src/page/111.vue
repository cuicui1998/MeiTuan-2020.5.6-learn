<template>
  <div class="mt-home">
    <div class="home-main">
      <div class="bgc-fff"></div>
      <div class="left-menu">
        <div class="all-class">全部分类</div>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="center-content"></div>
      <div class="right-user"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.mt-home {
  position: relative;
  .home-main {
    height: 400px;
    padding-top: 35px;
    .bgc-fff {
      position: fixed;
      top: 162px;
      left: 0;
      right: 0;
      width: 100%;
      height: 35px;
      background-color: lightblue;
    }
    .left-menu {
      position: relative;
      .all-class {
        position: absolute;
        width: 228px;
        height: 35px;
        padding-top: 10px;
        border: 1px solid red;
        top: -45px;
        z-index: 999;
      }
    }
  }
}
</style>