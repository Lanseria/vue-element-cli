<template>
  <header class="layout-header">
    <div class="global-header-trigger" @click="handleToggle">
      <i :class="siderbar_collapsed?'el-icon-s-unfold':'el-icon-s-fold'"></i>
    </div>
    <div>

    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['siderbar_collapsed']),
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
  background-color: #fff;
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
    color: $--color-primary;
  }
}
</style>
