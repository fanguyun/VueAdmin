<template>
  <div id="main" ref="main"></div>
</template>
<script>
const echarts = require('echarts');
import {option} from '../drage'
export default {
  name: 'Main',
  mounted() {
    this.drage();
  },
  data() {
    return {}
  },
  methods: {
    drage () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('main'));
      myChart.setOption(option);
    }
  }
}
</script>
<style lang="scss" scoped>
#main{
  width:100%;
  height:700px;
}
</style>
