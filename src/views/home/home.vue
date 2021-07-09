<template>
  <div class="home">
    <Header />
    <div class="content">
      <h1>MY UI</h1>
      <!-- <p style="font-size: 16px; margin-top: 10px; margin-bottom: 0">一个 Vue 3 组件库</p> -->
      <!-- <p>比较完整，使用 TypeScript，造轮子系列</p> -->
      <!-- <p style="font-size: 16px; margin-top: 0">犀利有才，有点意思</p> -->
      <!-- <div>
                <button type="default" size="large" style="margin-right: 12px">换个主题</button>
                <button type="primary" size="large">开始使用</button>
            </div> -->
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
