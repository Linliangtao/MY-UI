<template>
  <div class="home">
    <Header />
    <div class="content">
      <particle></particle>
      <div class="content-main">
        <h1>MY UI</h1>
      </div>
    </div>
  </div>
</template>

<script>
import particle from '@/base/particle/particle.vue'
export default {
  components: { particle },
  data() {
    return {}
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
    text-align: center;
    z-index: 10;

    .content-main {
      @include set-flex($justify: center);
      @include set-size($width: 100%);
      position: absolute;
      z-index: 10;

      h1 {
        font-size: 75px;
      }
    }
  }

  .content::after {
    @include set-size($height: 64px);
    content: '';
  }
}
</style>
