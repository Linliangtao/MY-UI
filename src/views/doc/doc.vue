<template>
  <div class="home">
    <Header activeType="doc" />
    <B-Layout :list="menuList" />
  </div>
</template>

<script>
import menuList from '@/config/doc'
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

.home {
  .content {
    @include set-flex($direction: column, $justify: center);
    @include set-size($height: calc(100vh - 64px));
    position: relative;
    text-align: center;

    h1 {
      font-size: 54px;
    }
  }

  .content::after {
    @include set-size($height: 64px);
    content: '';
  }
}
</style>
