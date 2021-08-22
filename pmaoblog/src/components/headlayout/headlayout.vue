<template>
  <div class="head">
    <phead>
      <pheaditem index="1">
        <Plink href="/home" type="p-head-link"><img src="../../assets/assets/Icon/iconfangp.png" height="35" width="35"/></Plink>
      </pheaditem>
      <pheaditem index="2">
        <Plink href="/home" type="p-head-link">首页</Plink>
      </pheaditem>
      <pheaditem index="3">
        <Plink href="/home" type="p-head-link">组件库</Plink>
      </pheaditem>
      <pheaditem index="4">
        <Plink href="/home" type="p-head-link">博客</Plink>
      </pheaditem>
      <pheaditem index="5">
        <Plink href="/home" type="p-head-link">图库</Plink>
      </pheaditem>
      <pheaditem index="6">
        <Plink href="/home" type="p-head-link">工具库</Plink>
      </pheaditem>
    </phead>
  </div>
</template>

<script>
import { defineComponent, computed, ref, PropType } from 'vue'
export default {
  name: 'headlayout',
  componentName: "headlayout",
  props: {
    title: String
  },

}

</script>
<style>
.head {
  width: 75%;
  height: 65px;
  margin: 0 auto ;
}
</style>
