
<template>
  <pheader>
    <headlayout></headlayout>
  </pheader>
</template>

<script lang="ts">
import Headlayout from "../../components/headlayout/headlayout";
export default {
  name: "bloghome",
  components:{
    Headlayout,
  }
}

</script>

<style>
.blog-detail{
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr ;
  gap:15px;
}
</style>
