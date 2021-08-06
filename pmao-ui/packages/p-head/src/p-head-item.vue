<template>
  <li
      :v-for="index"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "Pheaditem",
  componentName: "Pheaditem",
}
</script>

<style scoped>

</style>