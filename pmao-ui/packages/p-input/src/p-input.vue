<template>
  {{input}}
    <input
        :refs="inp"
        ref="inputs"
        v-model.lazy="input"
        :class="['p-input',type]"
        :placeholder ='placeholder'
    />
    <slot></slot>
</template>

<script>
import {onMounted, refs} from "vue";

export default {
  name: "pinput",
  data() {
    return {
      input: ''
    }
  },
  props:{
    inp: String,
    placeholder: String,
    type: String,
  },
  setup(props) {
    onMounted(() => {
      if(props.inp){
        this.$refs.inputs.focus()
      }
    })
  }
}
</script>




<style scoped>
.p-input{
  line-height: 30px;
  color: #4c4c4c;
  border-radius: 6px;
  padding: 0 15px;
  display: inline-block;
  border: 2px solid #dcdfe6;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);

}
</style>