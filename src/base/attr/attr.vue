<template>
  <div class="attr">
    <h2>Attributes</h2>
    <table class="attr-table">
      <thead>
        <tr>
          <th class="attr-title" v-for="(item, index) in headerColumn" :key="index">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in defaultData" :key="`tbody_tr_${index}`">
          <td class="attr-title td" v-for="(value, key) in item" :key="`tbody_td_${index}${key}`">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'Attr'
})
class Attr extends Vue {
  @Prop({ type: Array, default: () => [] }) columns
  @Prop({ type: Array, default: () => [] }) data

  headerColumn = [
    {
      title: '参数',
      dataIndex: 'params',
      key: 'age'
    },
    {
      title: '说明',
      dataIndex: 'desc',
      key: 'age'
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'age'
    },
    {
      title: '可选值',
      dataIndex: 'select',
      key: 'age'
    },
    {
      title: '默认值',
      dataIndex: 'default',
      key: 'age'
    }
  ]

  defaultData = [
    {
      params: 'value',
      desc: '是否选中',
      type: 'boolean',
      select: 'false / true',
      default: 'false'
    }
  ]
}
export default Attr
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.attr {
  width: 40%;
  overflow-x: auto;
  margin: 0 auto;

  h2 {
    font-weight: 400;
    color: $color-theme;
    font-size: 22px;
    margin: 55px 0 15px;
    text-align: left;
  }

  .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: $color-white;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  .attr-title {
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }

  .td {
    color: #606266;
  }
}
</style>
