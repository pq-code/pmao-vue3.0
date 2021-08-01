<!--head-->
<template>
  <a
  :href="href"
  :target="target"
  :class="['head-grid-a',type]"
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
.head-grid-a{
  display:block;
  font-size: 15px;
  color: #000000;
  text-decoration:none;
  margin: 20px auto ;
  line-height: 30px;
}
</style>