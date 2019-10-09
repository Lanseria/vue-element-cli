<template>
  <el-aside class="menu-sider" width="256px">
    <div class="menu-logo">
      <el-link href="https://element.eleme.io" target="_blank">Vec Pro 中台系统</el-link>
    </div>
    <el-menu :default-openeds="['1']" background-color="#001529" active-text-color="#ffd04b" text-color="#fff">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">菜单管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.menu-logo {
  height: 56px;
  line-height: 56px;
  text-align: center;
}
.menu-sider {
  z-index: 10;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  min-height: 100vh;
  border-right: solid 1px #001529;
}
.menu-sider ::v-deep .el-menu {
  border-right: none;
}
</style>