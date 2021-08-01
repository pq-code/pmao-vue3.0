<template>
  <li class="heard-grid-li">
    <a :class="['heard-grid-img',type]"
       :href="href"
       :target="target">
      <slot></slot>
    </a>
  </li>
</template>

<script st>
export default {
  name: 'Pheader',
  props:{
    href:String,
    target:String,
    type:String,
  }
}
</script>

<style scoped>
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
</style>