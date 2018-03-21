<template>
  <div class="oa_main">
    <!--面包屑-->
    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>办公管理</el-breadcrumb-item>
          <el-breadcrumb-item>会议管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="会议主题">
          <el-input v-model="form.name" placeholder="请输入会议主题"></el-input>
        </el-form-item>
        <el-form-item label="会议时间">
          <el-input v-model="form.person" placeholder="请输入会议时间"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleGoUrl('/office/MeetAdd?state=add')">新增会议</el-button>
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
        label="会议主题"
        min-width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="会议地方"
        align="center"
        width="220"
        >
      </el-table-column>
      <el-table-column
        prop="subName"
        align="center"
        width="150"
        label="会议日期">
      </el-table-column>
      <el-table-column
        prop="person"
        align="center"
        label="开始时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="结束时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="loadDate"
        align="center"
        label="状态"
        width="130">
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="操作"
        width="90">
        <template slot-scope="scope">
          <el-button type="text" size="small"  @click="handleGoUrl('/office/MeetAdd?state=view')"><i class="iconfont icon-search"></i></el-button>
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
        id: '部门月度会议',
        name: '会议室203',
        subName: '2018-10-12',
        person: '9:00”',
        time: '12:00',
        qixian: '每周',
        loadDate: '未进行'
      }),
      form: {
        name: '',
        person: '',
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
