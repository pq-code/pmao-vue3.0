<template>
    <ul  :class="['phead',type]">
      <slot></slot>
    </ul>
</template>

<script>
export default {
  name: "p-head",
  props:{
    index: String,
    type: String,
  }
}
</script>

<style >
/*.phead{*/
/*  margin: 0 auto ; !*设置外边距*!*/
/*  display: grid; !*display: grid指定一个容器采用网格布局。*!*/
/*  grid-template-columns: repeat(auto-fill, 100px);!*示每列宽度100px，然后自动填充，直到容器不能放置更多的列。*!*/
/*  grid-auto-flow: column;!*自动布局*!*/
/*  justify-items: center;!*盒子宽度和内容相等*!*/
/*  align-items: center;!*居中对齐弹性盒的各项 <div> 元素：*!*/
/*  width: 600px;*/
/*  height: 66px;*/
/*  background-color: #F5F5F7;*/
/*}*/
.phead{
  margin: 0 auto ; /*设置外边距*/
  padding: 0;
  height: 100%;
  background: transparent;
  white-space: nowrap;
  display: inline-block;
}
.right {
  float: right;
}

.left {
  float: left;
}

</style>