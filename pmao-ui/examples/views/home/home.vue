<template>
  <div class="home-title">
    <phead type="p-head" index="1">
      <Plink href="/home" type="p-head-link"><img src="../../assets/Icon/iconfangp.png" height="35" width="35"/></Plink>
      <Plink href="/home" type="p-head-link">首页</Plink>
      <Plink href="/home" type="p-head-link">组件库</Plink>
      <Plink href="/home" type="p-head-link">博客</Plink>
    </phead>
  </div>
</template>

<script>
import Plink from "../../../packages/p-link/src";
export default {
  name: "home",
  components: {
    Plink,
  },
}
</script>

<style>
.home-title{
  width: 100%;
}
</style>