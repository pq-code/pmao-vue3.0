<template>
  <pheader>
    <headlayout></headlayout>
  </pheader>
  <pmain>
    <pselector
        placeholder="下拉选择"
    >

    </pselector>
  </pmain>

</template>

<script>
import Headlayout from "../../components/headlayout/headlayout";
export default {
  name: "home",
  components: {Headlayout},
}
</script>

<style>
</style>