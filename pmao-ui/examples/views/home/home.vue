<template>
<!--  <div class="home-title">-->
<!--    <phead type="p-head" >-->
<!--      <pheaditem index="1">-->
<!--        <Plink href="/home" type="p-head-link"><img src="../../assets/Icon/iconfangp.png" height="35" width="35"/></Plink>-->
<!--      </pheaditem>-->
<!--      <pheaditem index="2">-->
<!--        <Plink href="/home" type="p-head-link">首页</Plink>-->
<!--      </pheaditem>-->
<!--      <pheaditem index="2">-->
<!--        <Plink href="/home" type="p-head-link">组件库</Plink>-->
<!--      </pheaditem>-->
<!--      <pheaditem index="2">-->
<!--        <Plink href="/home" type="p-head-link">博客</Plink>-->
<!--      </pheaditem>-->
<!--    </phead>-->
<!--  </div>-->
  <pcontainer>
    <pmain>
      <div class="home-title"></div>
    </pmain>
  </pcontainer>


</template>

<script>
import Plink from "../../../packages/p-link/src";
export default {
  name: "home",
  // components: {
  //   Plink,
  // },
}
</script>

<style>
.home-title{
  padding:0px;
  margin:0 0 0 0;
  position:fixed;
  height: 65px;
  width: 100%;
  background-color: #5a5a5a;
}
</style>