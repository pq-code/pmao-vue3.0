<template>
  <pheader>
    <headlayout></headlayout>
  </pheader>
  <pmain>
    <pselector
        placeholder="下拉选择"
        options="options"
    >
    </pselector>
  </pmain>
</template>

<script>
import Headlayout from "../../components/headlayout/headlayout";
export default {
  name: "home",
  components: { Headlayout},
  data() {
    return {
      options: [{
        value: '选项1',
        label: '第一个选项',
      }, {
        value: '选项2',
        label: '第二个选项',
      }, {
        value: '选项3',
        label: '第三个选项',
      }, {
        value: '选项4',
        label: '第四个选项',
      }, {
        value: '选项5',
        label: '第五个选项',
      },],
      value: ''
    }
  }
}
</script>

<style>
</style>