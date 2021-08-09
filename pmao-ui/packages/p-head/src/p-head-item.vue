<template>
  <li
      :class="['p-head-item',type]"
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

<style >
.p-head-item{
  /*float: left;*/
  list-style: none;
  background-color: #ffffff;
  line-height:31px;
  height: 65px;
}
</style>