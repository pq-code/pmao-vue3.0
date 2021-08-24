<template>
  <button
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