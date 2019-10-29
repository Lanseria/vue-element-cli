<template>
  <el-aside class="menu-sider" width="auto">
    <!-- <div class="menu-logo">
      <el-link href="https://element.eleme.io" target="_blank">Vec Pro 中台系统</el-link>
    </div> -->
    <el-menu default-active="1-4-1" :collapse="siderbar_collapsed">
      <!-- <el-submenu index="1">
        <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">菜单管理</el-menu-item>
      </el-submenu> -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group>
          <span slot="title">默认设置</span>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['siderbar_collapsed']),
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
  width: auto;
  z-index: 10;
  box-shadow: 2px 0 6px rgba(102, 102, 102, 0.35);
  min-height: 100vh;
  // border-right: solid 1px #001529;
}
.menu-sider ::v-deep .el-menu {
  border-right: none;
}
</style>
