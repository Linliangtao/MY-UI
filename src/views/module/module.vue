<template>
  <div class="home">
    <Header activeType="module" />
    <div class="content">
      <h1>组 件</h1>
    </div>
  </div>
</template>

<script>
export default {
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
