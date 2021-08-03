<template>
  <div class="logo-Pmao">
    <!--头-->
    <div class="logo-head">
      <!--      <div class="logo-lear"></div>-->
      <div class="logo-head-leye"></div>
      <div class="logo-head-rieye"></div>
    </div>
    <!--尾巴-->
    <div class="logo-tail"></div>
    <div class="logo-tail-long"></div>
    <div class="logo-tail-Small"></div>
    <div class="logo-back-green"></div>
  </div>
</template>

<script>
export default {
  name: "logo"
}
</script>

<style>
.logo-Pmao{
  top: 10px;
  width: 220px;
  height: 220px;
  border-radius: 60px;
  /*background-color:#2FE9FF;*/
  background-image: linear-gradient(to bottom right, #54ecfb, #2375c1);
}
.logo-back-green{
  width: 300px;
  height: 300px;
  left: 26%;
  top: -76%;
  border-radius: 200px;
  position: relative;
  background-color: #12F195;
  z-index: 1;
  clip:rect(100px,60px,200px,0px);
}
/*.logo-lear{*/
/*  position: relative;*/
/*  border-style: solid;*/
/*  border-width: 10px 10px 10px 10px;*/
/*  border-color: transparent transparent blue transparent;*/
/*  width: 0px;*/
/*  height: 0px;*/
/*  top: -40px;*/
/*  border-radius: 100px;*/
/*}*/
.logo-head{
  width: 80px;
  height: 80px;
  margin: 0 auto;
  top: 15%;
  position: relative;
  border-style: solid;
  border-width: 25px;
  border-radius: 100px;
  border-color: #ffffff;
  z-index: 2;
}
.logo-head-leye{
  width: 14px;
  height: 14px;
  margin: 0 auto;
  top: 30%;
  left: 15%;
  position: relative;
  border-radius: 100px;
  background-color: #43FFCC;
}
.logo-head-rieye{
  width: 14px;
  height: 14px;
  top: 12%;
  left: 26%;
  position: relative;
  border-radius: 100px;
  background-color: #43FFCC;
}
.logo-tail{
  width: 24px;
  height: 100px;
  left: 21%;
  top: -22%;
  margin: 0 0 0 0 ;
  position: relative;
  border-radius: 100px;
  background-color: #ffffff;
  z-index: 2;
}
.logo-tail-long{
  width: 24px;
  height: 40px;
  top: -38%;
  left: 15%;
  position: relative;
  transform: rotate(-45deg);
  transform-origin: 50% 30%;
  border-radius: 100px;
  background-color: #E1E1E1;
  z-index: 1;
}
.logo-tail-Small{
  width: 18px;
  height: 18px;
  top: -52%;
  left: 10%;
  position: relative;
  border-radius: 100px;
  background-color: #ffffff;
  z-index: 2;
}



</style>