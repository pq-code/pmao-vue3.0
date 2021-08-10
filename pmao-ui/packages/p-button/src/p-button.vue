<template>
  <button
      :type="type"
      :class="['p-button',type]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "pbutton"
}
</script>

<style scoped>
.p-button{

}
</style>