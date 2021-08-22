<template>
  <pheader>
    <headlayout></headlayout>
  </pheader>
  <p-main>
    <div class="fullscreen">

    </div>
  </p-main>

</template>

<script>
import Headlayout from "../../components/headlayout/headlayout";
export default {
  name: "home",
  components: { Headlayout},
}
</script>

<style>
  .fullscreen {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: calc(100vh - 65px);
    background-color: #a2bef5;
  }

</style>