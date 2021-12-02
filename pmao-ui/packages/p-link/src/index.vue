<!--head-->
<template>
  <router-link
      :to="href"
      :target="target"
      :class="['p-link',type]"
      :external="external"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name:"p-link",
  props:{
    href: {
      type: String,
      default: '/home',
    },
    type: String,
    target: String,
    external: Boolean,
  },
  setup(){

    return{

    }
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