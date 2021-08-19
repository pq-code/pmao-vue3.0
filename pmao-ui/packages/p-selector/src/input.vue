<template>
  <div class="slectorInput">
    <label class="placeholder">{{placeholder}}</label>
    <input
        type="text"
        class="input"
    />
  </div>
</template>

<script>
export default {
  name: "selectorInput",
  props: {
    placeholder: {
      type: String,
      default: '请选择1',
    }
  }
}
</script>

<style  scoped>
.slectorInput{
  position: relative;
  width: 100%;
  height: 38px;
}
.placeholder {
  left: 15px;
  top: 8px;
  color: #1D1D1F;
}
.input {
  box-sizing: border-box;
  background-color: #F5F5F7;
  border: 2px solid #e9e9ea;
  border-radius: 6px;
  transition: all .2s linear;
  line-height: 30px;
  color: #4c4c4c;
  padding: 0 15px;
  display: inline-block;

}
</style>