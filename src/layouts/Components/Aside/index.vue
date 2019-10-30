<template>
  <el-aside class="menu-sider" :width="asiderWidth">
    <div class="menu-logo">
      <el-link v-if="siderbar_collapsed" href="https://element.eleme.io" target="_blank">V</el-link>
      <el-link v-else href="https://element.eleme.io" target="_blank">Vec Pro 中台系统</el-link>
    </div>
    <el-menu default-active="1-1" :collapse="siderbar_collapsed">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group>
          <span slot="title">系统设置</span>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['siderbar_collapsed']),
    asiderWidth() {
      return this.siderbar_collapsed ? '64px' : '200px'
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-logo {
  height: 56px;
  line-height: 56px;
  text-align: center;
}
.menu-sider {
  // width: auto;
  z-index: 10;
  box-shadow: 2px 0 6px rgba(102, 102, 102, 0.35);
  min-height: 100vh;
  // border-right: solid 1px #001529;
}
.menu-sider ::v-deep .el-menu {
  border-right: none;
}
</style>
