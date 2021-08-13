<template>
  <header class="p-header" >
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Pheader",
  componentName: 'Pheader',
}
</script>

<style >
.p-header{
  width: 100%;
  background-color: #ffffff;
}
</style>