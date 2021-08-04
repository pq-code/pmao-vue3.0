<template>
  <div
    :class="['phead',type]"
    >
    <div :v-for="index">
      <p-head-item>
        <slot></slot>
      </p-head-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "phead",
  props:{
    index: String,
    type: String,
  }
}
</script>

<style >
.phead{
  height: 64px;
  background-color: #ffffff;
}
.phead-piece{
  font-size: 15px;
  color: #000000;
  width: 100%;
  text-decoration:none;
  line-height: 30px;
}



</style>