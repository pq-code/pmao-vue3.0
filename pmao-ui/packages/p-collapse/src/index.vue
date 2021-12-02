<template>
  <ul class="drawerList" v-if="data">
    <li class="drawerItem" v-for="(items, indexs) of casedata" :key="indexs">
      <div
        class="sidebarParentTitile"
        :id="indexs"
        @click="controlDisplay($event)"
      >
        <span class="SidebarHead">{{ items.label }}</span>
        <i class="iconfont icon-arrow-down"></i>
      </div>
      <div class="sidebarParentContent">
        <slot></slot>
        <div class="column" v-for="(item, index) of items.children" :id="index" :key="indexs">
          <div href="a" class="home-detail-title" :id="index" >
            <span class="span1">
              {{ item.label, index }}
            </span>
          </div>
        </div>
      </div>
    </li>
  </ul>

  <ul class="drawerList" v-if="!data">
    <li class="drawerItem">
      <div class="sidebarParentTitile" @click="controlDisplay($event)">
        <span class="SidebarHead">{{ title }}</span>
        <i class="iconfont icon-arrow-down"></i>
      </div>
      <div class="sidebarParentContent">
        <slot></slot>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { reactive, computed } from "vue";

export default {
  name: "p-collapse",
  props: {
    casedata: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
  setup(props) {
    let data = computed(() => {
      if (props.casedata) {
        return props.casedata.length > 0;
      }
      return false;
    });

    let controlDisplay = (e) => {
      let main = e.currentTarget.parentElement; // 获取当前父级DOM
      let list = main.querySelector(".sidebarParentContent"); //获取Li列DOM
      console.log('main',main,list);
      if (list.classList.contains("ifShow")) {
        //判断当前状态是否隐藏；
        list.classList.remove("ifShow");
      } else {
        list.classList.add("ifShow");
      }
    };

    return {
      data,
      controlDisplay,
    };
  },
};
</script>
<style scoped>
.contentDisplay-frame {
  display: grid;
  grid-template-columns: 0.15fr 0.85fr;
}
.contentDisplay-lfet {
  height: 92vh;
  overflow: auto;
  overflow-x: hidden;
  /*white-space: nowrap;*/
  background-color: #f0f0f3;
}
.contentDisplay-right {
  height: 92vh;
  overflow: auto;
  overflow-x: hidden;
  background-color: #e9e9ea;
}
.contentDisplay-right-grid {
  width: 88%;
  height: 20%;
  margin: 4% 6% 4% 6%;
}
.drawerList {
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 0;
}
.drawerItem {
  width: 100%;
}
.sidebarParentTitile {
  padding: 10px 10px 10px 20px;
  text-align: left;
}
.sidebarParentTitile i:last-child {
  float: right;
  font-size: 26px;
}
.ifShow {
  display: none;
}
.sidebarParentContent {
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  /*display: inline-block;*/
  /*display: none;*/
}
.SidebarHead {
  writing-mode: horizontal-tb;
  font-size: 18px;
  font-weight: 460;
  color: #363639;
}
.home-detail-title {
  writing-mode: horizontal-tb;
  font-size: 18px;
  font-weight: 460;
  color: #363639;
  text-align: left;
  text-decoration: none;
}
.home-detail-title:hover {
  color: #71a8e2;
}
.column {
  padding: 10px 10px 10px 40px;
  /*display: none;*/
  cursor: pointer; /*鼠标变成手指*/
}
.column:hover {
  background-color: rgba(203, 203, 203, 0.54);
}
.card {
  margin-top: 40px;
  height: 300px;
}
.span1 {
  text-align: right;
  font-size: 16px;
  font-weight: 600;
}
.span2 {
  text-align: right;
  padding-left: 4px;
  font-size: 14px;
  font-weight: 460;
}

.span1:hover {
  color: #71a8e2;
}
</style>
