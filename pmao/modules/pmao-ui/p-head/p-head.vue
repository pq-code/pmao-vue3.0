<!--head-->
<template>
  <a
    :href='href'
    :target="target"
    :class="['p-head-link',type]"
  >
  <slot></slot>
  </a>
</template>

<script>
export default {
    name:"Phead",
    post:{
        href:String,
        type:String,
        target:String,
    }

}

</script>
<style>
.p-link{
  color: #000000;
  text-decoration:none;

}
.p-head-link{
  display:block;
  font-size: 15px;
  color: #000000;
  text-decoration:none;
  margin: 20px auto ;
  line-height: 30px;
}
</style>