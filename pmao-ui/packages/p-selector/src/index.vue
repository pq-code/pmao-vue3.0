<template>
  <div class="selector">
    <SelectorInput
    :placeholder="placeholder"
    />
  </div>
</template>

<script>
import SelectorInput from "./input";
export default {
  name: "pselector",
  components: {SelectorInput},
  props: {
    placeholder:String,
  }
}
</script>

<style scoped>
.selector{
  position: absolute;
  width: 300px;
}
</style>