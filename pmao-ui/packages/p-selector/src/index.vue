<template>
  <div class="selector" v-focus>
    <SelectorInput
    :placeholder="placeholder"
    />
  </div>
</template>

<script>
import SelectorInput from "./input";
import focus from '../directives/focus'
export default {
  name: "pselector",
  components: {SelectorInput},
  props: {
    placeholder:String,
  },
  directives: {
    focus,
  }
}
</script>

<style scoped>
.selector{
  position: absolute;
  width: 300px;
}
</style>