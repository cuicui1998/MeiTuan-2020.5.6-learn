<template>
  <div class="top-bar">
    <el-row class="top">
      <el-col :span="14">
        <position-bar />
      </el-col>
      <el-col :span="10">
        <nav-bar />
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import NavBar from "./NavBar";
import PositionBar from "./PositionBar";

export default {
  components: {
    NavBar,
    PositionBar,
    
  }
};
</script>

<style lang="less" scoped>
.top {
  width: 1190px;
  margin: 0 auto;
}
</style>