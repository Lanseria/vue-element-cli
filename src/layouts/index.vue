<template>
  <el-container>
    <vec-aside></vec-aside>
    <section class="container">
      <vec-header></vec-header>
      <el-main>
        <router-view />
      </el-main>
      <vec-footer></vec-footer>
    </section>
  </el-container>
</template>
<script>
import VecAside from './Components/Aside/index'
import VecHeader from './Components/Header/index'
import VecFooter from './Components/Footer/index'
export default {
  components: {
    VecAside,
    VecHeader,
    VecFooter,
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>