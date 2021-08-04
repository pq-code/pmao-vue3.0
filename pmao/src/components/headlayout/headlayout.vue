<template>
    <div class="head">
      <a href="/home">首页</a>
      <p-link>123</p-link>
      <p-link href="https://www.bilibili.com/video/BV1cf4y1e7TD?p=6" type="p-head-link">首页</p-link>
      <p-link href="blog" taget="-blank">博客</p-link>
      <p-link href="Components" taget="-blank">组件库</p-link>
      <p-link href="Components" taget="-blank">图库</p-link>
    </div>
</template>

<script>
import plink from "/Users/zpq/pmao-vue3.0/pmao/modules/pmao-ui/p-link/p-link.vue";
export default {
  name: 'headlayout',
}

</script>
<style>
.head {
  display: inline-block;
  width: 75%;
  height: 65px;
  margin: 0 auto;
}
.head-grid-left {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 600px;
  height: 65px;
  float: left;
}
.head-grid-right {
  float: right;
  height: 100%;
  background: transparent;
}
.head-grid-li {
  /*float: left;*/
  list-style: none;
  background-color: #ffffff;
  line-height: 31px;
  height: 65px;
}
.head-grid-a {
  display: block;
  font-size: 15px;
  color: #000000;
  text-decoration: none;
  margin: 20px auto;
  line-height: 30px;
}
.head-grid-img {
  display: block;
  font-size: 15px;
  color: #000000;
  text-decoration: none;
  margin: 15px auto;
  line-height: 30px;
  height: 40px;
}
.home-input {
  text-align: center;
  float: right;
}
.home-inputs {
  -web-kit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: #99b6ff;
  margin-top: 18px;
  padding: 0 0 0 20px;
}
/*.i-a{*/
/*  background-image: url(../../assets/icon/search.png);*/
/*  background-size: 25px 25px;*/
/*  background-repeat: no-repeat;*/
/*}*/
</style>
