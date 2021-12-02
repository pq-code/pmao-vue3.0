<template>
  <div class="head" :class="{wide}">
    <p-head type="left">
      <p-headitem index="1">
        <p-link href="/home" type="p-head-link-img"
          ><img src="../../assets/Icon/iconfangp.png" height="36" width="36"/>
        </p-link>
      </p-headitem>
      <p-headitem index="2">
        <p-link href="/home" type="p-head-link">首页</p-link>
      </p-headitem>
      <p-headitem index="3">
        <p-link href="/comonentsViews/home" type="p-head-link">组件库</p-link>
      </p-headitem>
      <p-headitem index="4">
        <p-link href="/case" type="p-head-link">案例</p-link>
      </p-headitem>
      <p-headitem index="5">
        <p-link href="/blog" type="p-head-link">博客</p-link>
      </p-headitem>
      <p-headitem index="6">
        <p-link href="/home" type="p-head-link">工具库</p-link>
      </p-headitem>
    </p-head>
    <p-head type="right">
      <p-headitem>
        <div class="head-input">
          <p-input v-model="input" placeholder="搜索"></p-input>
        </div>
      </p-headitem>
      <p-headitem type="small">
        <div class="head-input">
          <a href="https://github.com/pq-code/pmaoblog" >
            <img src="../../assets/Icon/github.png" height="26" width="26" style="margin-top: 8%"/>
          </a>
        </div>
      </p-headitem>
      <p-headitem type="small">
          <p-link href="/user" type="p-head-link">
            <img src="../../assets/Icon/user.png" height="34" width="34" style="margin-top: 0%"/>
          </p-link>
      </p-headitem>
    </p-head>
  </div>
</template>

<script>
import {defineComponent, reactive, ref, watch} from 'vue'

export default {
  name: "headlayout",
  componentName: "headlayout",
  // props: {
  //   wide: Boolean,
  // },
  setup() {
    const Url = {
      github:"https://github.com/pq-code/pmaoblog"
    }
    let pdata = reactive({

    })
    const wide = false;
    return {
      Url,
      wide,
      pdata
    }
  },
};
</script>
<style>
.wide{
  width: 100%;
}
.head {
  display: inline-block;
  width: 76%;
  height: 66px;
  margin: 0 auto;
  background-color: #f5f5f7;
  white-space: nowrap;
}
.head-input{
  margin: 18px auto;
  color: #a7abb3;
}
</style>
