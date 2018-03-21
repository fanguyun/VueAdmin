<template>
  <div class="oa_main">
    <!--面包屑-->
    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>个人事务</el-breadcrumb-item>
          <el-breadcrumb-item>待办事项</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="form.name" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="发起人">
          <el-input v-model="form.person" placeholder="请输入发起人"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
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
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="流程名称"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="subName"
        align="center"
        min-width="220"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="person"
        align="center"
        label="发起人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="发起时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="todoName"
        align="center"
        label="任务名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="notime"
        align="center"
        label="超时时间"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="操作"
        width="160">
        <template slot-scope="scope">
          <el-button type="text" size="small">办理</el-button>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">过程</el-button>
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
        id: 10000,
        name: '请假申请单',
        subName: '请假申请单—20150810-张飒',
        person: '张飒',
        time: '2015-10-10',
        todoName: '部门审批',
        notime: '2015-12-10'
      }),
      form: {
        name: '',
        person: '',
        time: []
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
