<template>
  <div class="selector" v-focus>
    <SelectorInput
    :placeholder="placeholder"
    :value="inputValue"
    />
    <Selectoroption
    :options="options"
    @setItemValue="setItemValue"
    >
    </Selectoroption>
  </div>
</template>

<script>
import SelectorInput from "./input";
import Selectoroption from "./option";
import focus from '../directives/focus';

import { reactive, toRefs} from "vue";
export default {
  name: "pselector",
  components: {Selectoroption, SelectorInput},
  props: {
    placeholder: String,
    options: Array,
  },
  directives: {
    focus,
  },
  setup(props, ctx) {
    const state = reactive({
      inputValue: '',
    })

    const setItemValue = (item) => {
      state.inputValue = item.label
      ctx.emit('setItemValue',item.value)
    }

    return {
      setItemValue,
      ...toRefs(state)
    }
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