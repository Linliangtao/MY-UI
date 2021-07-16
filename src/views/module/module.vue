<template>
  <div class="module">
    <Header activeType="module" />
    <B-Layout :list="menuList" />
  </div>
</template>

<script>
import menuList from '@/config/component'
export default {
  data() {
    return {
      menuList: menuList
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
</style>
