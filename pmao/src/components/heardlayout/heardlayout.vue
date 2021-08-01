<template>
  <div class="heard-universal">
    <div class="heard">
      <div class="heard-grid-left">
        <P-header
            href="/home"
            type="type"
            target="target"
        >首页
        </P-header>
      </div>
    </div>
  </div>
</template>

<script lang="setup">

export default {
    name: 'heardlayout',
    }
</script>



<style>
.heard{
  display:inline-block;
  width: 75%;
  height: 65px;
  margin: 0 auto ;
}
.heard-grid-left{
  margin: 0 auto ;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 600px;
  height: 65px;
  float: left;
}
.heard-grid-right{
  float: right;
  height: 100%;
  background: transparent;

}
.heard-grid-li{
  /*float: left;*/
  list-style: none;
  background-color: #ffffff;
  line-height:31px;
  height: 65px;
}
.heard-grid-a{
  display:block;
  font-size: 15px;
  color: #000000;
  text-decoration:none;
  margin: 20px auto ;
  line-height: 30px;
}
.heard-grid-img{
  display:block;
  font-size: 15px;
  color: #000000;
  text-decoration:none;
  margin: 15px auto ;
  line-height: 30px;
  height: 40px;
}
.home-input{
  text-align:center;
 float: right;
}
.home-inputs{
  -web-kit-appearance:none;
  -moz-appearance: none;
  display: inline-block;
  line-height: 30PX;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: #99b6ff;
  margin-top: 18px;
  padding:0 0 0 20px;
}
/*.i-a{*/
/*  background-image: url(../../assets/icon/search.png);*/
/*  background-size: 25px 25px;*/
/*  background-repeat: no-repeat;*/
/*}*/
</style>
