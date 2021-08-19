<template>
  <div class="selector-option">
    <div
      class="option-item"
      v-for="item of options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "Selectoroption",
  props: {
    options:[{
      value: '没有内容',
      label: '没有内容',
    }]
  }
}
</script>

<style scoped>
  .selector-option {
    width: 100%;
    height: 38px;
  }
  .option-item {

  }
</style>