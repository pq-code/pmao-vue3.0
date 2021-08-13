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
  name:"Plink",
  componentName: "Phead",
  props:{
    href: String,
    type: String,
    target: String,
  }

}

</script>
<style>
.p-link{
  color: #1D1D1F;
}
.p-none-link{
  text-decoration:none;
  color: #1D1D1F;
}
.p-head-link {
  text-decoration:none;
  display:block;
  font-size: 16px;
  color: #1D1D1F;
  margin: 18px auto ;
  line-height: 30px;
}
.p-head-link-img {
  display:block;
  color: #1D1D1F;
  text-decoration:none;
  margin: 16px auto ;
}

</style>