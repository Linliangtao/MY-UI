<template>
  <div class="layout">
    <div class="layout-wrapper">
      <div class="layout-left">
        <div v-for="(item, index) in list" :key="`desc${index}`">
          <div class="title">
            {{ item.moduleTitle }}
            <span v-if="item.children.length > 1 && item.showNum">({{ item.children.length }})</span>
          </div>

          <div class="ul" v-for="(subItem, subIndex) in item.children" :key="`li${index}${subIndex}`" @click="handleView(subItem)">
            <router-link :to="subItem.path ? subItem.path : '#'" class="li" :class="{ active: getActiveType(subItem, `${index}${subIndex}`) }">
              {{ subItem.title }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="layout-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'BLayout'
})
class BLayout extends Vue {
  @Prop({ type: Array, default: () => [] }) list // 导航列表

  activeText = ''

  /**
   * 获取选中状态
   * @param v 当钱项
   * @param i 索引
   */
  getActiveType(v, i) {
    return this.activeText !== '' ? this.activeText === v.title : i === '00'
  }

  /**
   * 点击查看组件详情
   * @param i
   */
  handleView(i) {
    this.activeText = i.title
  }
}
export default BLayout
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.layout {
  @include set-size($height: calc(100vh - 64px));
  position: relative;
  top: 63px;

  .layout-wrapper {
    @include set-flex();
    width: 100%;
    height: 100%;

    .layout-left {
      width: 272px;
      height: 100%;
      border-right: 1px solid rgb(239, 239, 245);
      overflow: scroll;
      padding-bottom: 120px;

      .title {
        padding: 16px 0 0 32px;
        cursor: default;
        font-size: 0.93em;
        height: 36px;
        color: rgb(158, 164, 170);
      }

      .ul {
        cursor: pointer;
        .li {
          display: inline-block;
          width: 100%;
          height: 42px;
          line-height: 42px;
          margin: 6px 5px 0;
          border-radius: 5px;
          padding-left: 48px;
          color: #333639;

          .link {
            color: #333639;
          }
        }

        .li:hover {
          color: $color-theme;
        }

        .active {
          background-color: #e7f5ee;
          color: $color-theme;
        }
      }
    }

    .layout-right {
      @include set-size($width: calc(100% - 273px));
      padding: 32px 90px 56px 56px;
      overflow: auto;
    }
  }
}

.layout-left::-webkit-scrollbar {
  width: 3px;
  height: 100%;
  background-color: #fff;
}

.layout-left:hover ::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 10px;
}

.layout-left:hover::-webkit-scrollbar-thumb:hover {
  background-color: #dddee0;
}

.layout-left:hover::-webkit-scrollbar-thumb:vertical {
  background-color: #dddee0;
  border-radius: 10px;
}

.layout-right::-webkit-scrollbar {
  width: 5px;
  height: 100%;
  background-color: #fff;
}

.layout-right:hover ::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 10px;
}

.layout-right:hover::-webkit-scrollbar-thumb:hover {
  background-color: #bfbfc0;
}

.layout-right:hover::-webkit-scrollbar-thumb:vertical {
  background-color: #bfbfc0;
  border-radius: 10px;
}
</style>
