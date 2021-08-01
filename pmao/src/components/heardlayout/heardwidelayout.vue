<template>
  <div class="heard-universal">
    <div class="heard-wide">
      <div class="heard-wide-grid-left">
        <li class="heard-wide-grid-li">
          <a class="heard-wide-grid-img" href="/home"><img src="../../assets/PMao.png" height="35" width="35"/></a>
        </li>
        <li class="heard-wide-grid-li">
          <a class="heard-wide-grid-a" href="/home">首页</a>
        </li>
        <li class="heard-wide-grid-li">
          <a class="heard-wide-grid-a" href="/blogHome">博客</a>
        </li>
        <li class="heard-wide-grid-li">
          <a class="heard-wide-grid-a" href="/frame">内容展示</a>
        </li>
        <li class="heard-wide-grid-li">
          <a class="heard-wide-grid-a" href="/gallery">图库</a>
        </li>
        <li class="heard-wide-grid-li">
          <a class="heard-wide-grid-a" href="/home">工具库</a>
        </li>
        <li class="heard-wide-grid-li">
          <a class="heard-wide-grid-a" href="/login">后台管理</a>
        </li>
      </div>
      <div class="heard-wide-grid-right">
        <el-input placeholder="搜索" v-model="input" class="input-with-select" style="  margin-top: 15px;" >
          <el-button slot="append" icon="el-icon-search" @click="homesearch"></el-button>
        </el-input>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'pmao-heard-wide-layout',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:'',
        isCollapse: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      homesearch(){
        console.log(this.input);
      }
    },

    }
</script>
<style>
.heard-wide{
  height: 65px;
  margin: 0 auto ;
}
.heard-wide-grid-left{
  margin: 0 auto ;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 600px;
  height: 65px;
  float: left;
}
.heard-wide-grid-right{
  float: right;
  height: 100%;
  background: transparent;

}
.heard-wide-grid-li{
  /*float: left;*/
  list-style: none;
  background-color: #ffffff;
  line-height:31px;
  height: 65px;
}
.heard-wide-grid-a{
  display:block;
  font-size: 15px;
  color: #000000;
  text-decoration:none;
  margin: 20px auto ;
  line-height: 30px;
}
.heard-wide-grid-img{
  display:block;
  font-size: 15px;
  color: #000000;
  text-decoration:none;
  margin: 15px auto ;
  line-height: 30px;
  height: 40px;
}

</style>
