<template>
  <div class="selector-option">
    <div
      class="option-item"
      v-for="(item,  index) of options"
      :key="index"
      :value="item.value"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Selectoroption",
  props: {
    options: {
      type: Array,
      default() {
        return [{
          value: '选项1',
          label: '没有内容',
        }, {
          value: '选项1',
          label: '没有内容',
        }, {
          value: '选项1',
          label: '没有内容',
        }]
      }

    }
  }
}
</script>

<style scoped>
  .selector-option {
    display: none;
    position: absolute;
    top: 34px;
    width: 100%;
    height: 224px;
    border: 1px solid #dcdfe6;
    box-shadow: 0 0 10px #dfdfe5;
    background-color: #F5F5F7;
    cursor: pointer;
  }
  .option-item {
    width: 100%;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    margin: 10px 0;
    transition: background-color .2s linear;

  }
</style>