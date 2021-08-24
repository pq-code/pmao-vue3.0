<template>
  <div class="slectorInput">
    <label class="placeholder">{{placeholder}}</label>
    <input
        type="text"
        class="input"
        :value="value"
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
    },
    value: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss"  scoped>
  .slectorInput{
    position: relative;
    width: 100%;
    height: 32px;

    .input {
      width: 100%;
      box-sizing: border-box;
      background-color: #F5F5F7;
      border: 1px solid #dcdfe6;
      border-radius: 6px;
      transition: all .2s linear;
      line-height: 30px;
      color: #4c4c4c;
      padding: 0 15px;
      display: inline-block;

      &:focus {
        border: 1px solid #dcdfe6;
        box-shadow: 0 0 1px #dcdfe6;
       }
    }
    .placeholder {
      position: absolute;
      top: 6px;
      left: 14px;
      font-size: 14px;
      float: none;
      color: #87898d;
    }

    .iconfont {
      position: relative;
      left: 80px;
      top: -28px;
      font-size: 22px;
      color: #707276;
      &.icon-search {
        font-size: 22px;
        left: 80px;
        top: -28px;
        color: #707276;
       }
    }
  }


</style>