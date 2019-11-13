<template>
  <div>
    <el-button type="primary">新增</el-button>
    <el-table :data="roleList" style="width: 100%">
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getRoleList } from '@/api/Role'
export default {
  data () {
    return {
      roleList: [],
    }
  },
  created () {
    this.loadPage()
  },
  methods: {
    async loadPage () {
      const data = await getRoleList()
      console.log(data)
      this.roleList = data.data
    },
  },
}
</script>