<template>
  <div class="oa_main">
    <!--面包屑-->
    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>办公管理</el-breadcrumb-item>
          <el-breadcrumb-item>车辆管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="车辆类型">
          <el-input v-model="form.name" placeholder="请输入督办事项"></el-input>
        </el-form-item>
        <el-form-item label="使用时间">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleGoUrl('/office/caradd')">车辆申请</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--list-->
    <el-table
      :data="tableData4"
      stripe
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="流水号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="车辆类型"
        align="center"
        min-width="200">
      </el-table-column>
      <el-table-column
        prop="subName"
        align="center"
        width="200"
        label="车牌号">
      </el-table-column>
      <el-table-column
        prop="state"
        align="center"
        width="130"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="person"
        align="center"
        label="开始时间"
        width="160">
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="结束时间"
        width="160">
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="操作"
        width="80">
        <template slot-scope="scope">
          <el-button type="text" size="small"><i class="iconfont icon-search"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData4: new Array(15).fill({
        id: 10001,
        name: '5座小汽车（卡罗拉）',
        subName: '粤B98988',
        state: '审批中',
        person: '2019-02-10',
        time: '2019-02-15'
      }),
      form: {
        name: '',
        time: []
      }
    };
  },
  methods: {
    handleGoUrl(url) {
      this.$router.push({ path: url });
    },
    loadState(num) {
      let state = '';
      if (num <= 50) {
        state = 'exception';
      } else if (num > 50 && num < 100) {
        state = '';
      } else {
        state = 'success';
      }
      return state;
    },
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
