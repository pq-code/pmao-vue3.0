<template>
  <pcontainer>
    <headlayout></headlayout>
    <pmain>

    </pmain>
  </pcontainer>


</template>

<script>
import Plink from "../../../packages/p-link/src";
import Headlayout from "../../components/headlayout/headlayout";
export default {
  name: "home",
  components: {Headlayout},
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