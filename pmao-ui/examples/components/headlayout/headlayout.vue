<template>
  <div class="home-title">
    <phead type="p-head" >
      <pheaditem index="1">
        <Plink href="/home" type="p-head-link"><img src="../../assets/Icon/iconfangp.png" height="35" width="35"/></Plink>
      </pheaditem>
      <pheaditem index="2">
        <Plink href="/home" type="p-head-link">首页</Plink>
      </pheaditem>
      <pheaditem index="3">
        <Plink href="/home" type="p-head-link">组件库</Plink>
      </pheaditem>
      <pheaditem index="4">
        <Plink href="/home" type="p-head-link">博客</Plink>
      </pheaditem>
    </phead>
  </div>
</template>

<script>

export default {
  name: 'headlayout',
  componentName: "headlayout",
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
