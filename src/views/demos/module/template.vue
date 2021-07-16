<template>
  <div class="message">
    <div class="message-title">当前模块正在努力开发中 (正经脸)</div>
    <div class="message-desc">又是新de一天 光明正大懒被窝</div>
    <div class="message-demo">演示</div>
    <div class="message-content">
      <CodePer />
      <CodePer />
      <CodePer />
      <CodePer />
    </div>

    <Attr />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.message {
  .message-title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .message-desc {
    font-size: 14px;
    line-height: 1.6;
    margin: 16px 0 16px 0;
  }

  .message-demo {
    font-size: 22px;
    font-weight: 500;
    margin: 35px 0 20px 0;
  }

  .message-content {
    display: grid;
    gap: 16px;
    grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);
    align-items: flex-start;
  }
}
</style>
