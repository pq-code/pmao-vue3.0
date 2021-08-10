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
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  width: 600px;
  height: 65px;
  float: left;
}

</style>