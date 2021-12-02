<template>
  <li
    :class="['p-head-item',type]"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "p-headitem",
  props:{
    placeholder: {
      type: Number,
      default: 26,
    },
    type: {
      type: String,
      default: 'big',
    }
  }
}
</script>

<style >
.p-head-item{
  float: left;
  list-style: none;
  background-color: #F5F5F7;
  height: 100%;
  padding: 0 24px;
  display:inline-block;
}
.big {
  padding: 0 24px;
}
.middle{
  padding: 0 12px;
}
.small{
  padding: 0 6px;
}
</style>