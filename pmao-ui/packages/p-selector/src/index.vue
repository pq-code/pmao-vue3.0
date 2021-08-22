<template>
  <div class="selector" v-focus>
    <SelectorInput
    :placeholder="placeholder"
    />
    <Selectoroption
    :options="options"
    >
    </Selectoroption>
  </div>
</template>

<script>
import SelectorInput from "./input";
import Selectoroption from "./option";
import focus from '../directives/focus'

export default {
  name: "pselector",
  components: {Selectoroption, SelectorInput},
  props: {
    placeholder: String,
    options: Array,
  },
  directives: {
    focus,
  }
}
</script>

<style scoped>
.selector{
  position: absolute;
  width: 200px;
  height: 34px;
  margin: 0 auto;
}
</style>