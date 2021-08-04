<template>
  <li
      :v-for="index"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "p-head-item"
}
</script>

<style scoped>

</style>