<template>
  <div
    :class="['phead',type]"
    >
        <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Phead",
  componentName: "Phead",
  props:{
    index: String,
    type: String,
  }
}
</script>

<style >
.phead{
  margin: 0 auto ;
  display:inline-grid;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 600px;
  height: 65px;
  float: left;
}

</style>