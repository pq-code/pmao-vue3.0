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
  color: #000000;
}
.p-none-link{
  text-decoration:none;
  color: #000000;
}
.p-head-link {
  font-size: 15px;
  color: #000000;
  text-decoration:none;
  line-height: 30px;
}

</style>