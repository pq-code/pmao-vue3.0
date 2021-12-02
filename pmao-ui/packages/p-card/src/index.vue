<template>
  <div
      :class="['p-card',type]"
  >
    <div class="detail-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "p-card",
  props:{
    href: String,
    img: Object,
    title: String,
  },
}
</script>

<style scoped="scoped">
.detail-title{
  font-size: 22px;
  font-weight: 600;
  color: #403f3f;
  text-align:left;
  padding: 20px 10px 10px 30px;
}
.p-card{
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #F5F5F7;
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