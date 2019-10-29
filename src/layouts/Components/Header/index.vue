<template>
  <header class="layout-header">
    <div class="global-header-trigger" @click="handleToggle">
      <i class="el-icon-s-fold"></i>
    </div>
    <div></div>
    <!-- <i class="el-icon-s-unfold"></i> -->
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      handleToggle: 'SET_SIDERBAR_COLLAPSED',
    }),
  },
}
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  box-shadow: 0 1px 4px rgba(87, 87, 87, 0.08);
}
.global-header-trigger {
  padding: 19px 24px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
}
</style>
