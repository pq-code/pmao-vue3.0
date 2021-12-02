<template>
  <button
      :class="[type]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "p-button",
  props: {
    type: {
      type: String,
      default: 'p-button',
    },
  },
}
</script>

<style scoped>
.p-button {
  width: 80px;
  height: 30px;
}
.mini {
  width: 40px;
  height: 30px;
}
</style>