<template>
  <div class="head">
    <phead>
      <pheaditem index="1">
        <Plink href="/home" type="p-head-link-img" styple="mo"><img src="../../assets/Icon/iconfangp.png" height="36" width="36"/></Plink>
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
    <pinput
        refs="true"
        v-model="inputs"
        placeholder="搜索">
    </pinput>

  </div>
</template>

<script>
import { defineComponent, computed, ref, PropType } from 'vue'
export default {
  name: 'headlayout',
  componentName: "headlayout",
  data() {
    return{
      inputs: '1'
    }
  },
  props: {
    title: String
  },
  setup(props) {
    let input = ''
    const bigImg = computed(() => console.log('--------------', input))
    return {
      bigImg
    }
  },
}

</script>
<style>
.head {
  width: 75%;
  height: 66px;
  margin: 0 auto ;
  background-color: #F5F5F7;
}
</style>
