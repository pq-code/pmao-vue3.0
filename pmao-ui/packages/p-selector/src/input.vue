<template>
  <div class="slectorInput">
    <label class="placeholder">{{placeholder}}</label>
    <input
        type="text"
        class="input"
    />
    <span class="iconfont icon-search"></span>
  </div>
</template>

<script>
export default {
  name: "selectorInput",
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    }
  }
}
</script>

<style lang="scss"  scoped>
  .slectorInput{
    position: relative;
    width: 100%;
    height: 38px;

    .input {
      box-sizing: border-box;
      background-color: #F5F5F7;
      border: 2px solid #dcdfe6;
      border-radius: 6px;
      transition: all .2s linear;
      line-height: 30px;
      color: #4c4c4c;
      padding: 0 15px;
      display: inline-block;

      &:focus {
        border-color: #dcdfe6;
        box-shadow: 0 0 3px #dcdfe6;
       }
    }
    .placeholder {
      position: absolute;
      left: 76px;
      top: 8px;
      font-size: 12px;
      float: none;
      color: #87898d;

    }

    .iconfont {
      position: absolute;
      left: 210px;
      top: 6px;
      font-size: 22px;
      color: #707276;
      &.icon-search {
        font-size: 22px;
        left: 210px;
        top: 6px;
        color: #707276;
       }
    }
  }


</style>