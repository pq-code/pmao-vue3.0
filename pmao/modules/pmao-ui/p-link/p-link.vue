<!--head-->
<template>
  <a
    :href="href"
    :target="target"
    :class="['p-link',type]"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name:"plink",
  props:{
    href: String,
    type: String,
    target: String,
  }

}

</script>
<style>
  .p-link{
    color: #000000;

  }
  .p-none-link{
     text-decoration:none;
     color: #000000;
   }
  .p-head-link {
     display: block;
     color: #000000;
     font-size: 15px;
     text-decoration: none;
     margin: 20px auto;
     line-height: 30px;
   }
</style>