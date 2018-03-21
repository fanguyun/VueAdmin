<template>
  <div class="oa_main">
    <!--面包屑-->
    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!--卡片-->
    <el-row class="oa_main_card">
      <el-col :span="6">
        <el-card style="background:#67C23A;">
          <div class="todo_l">
            <el-row>
              <el-col :span="12" class="tl"><span>待办事项</span></el-col>
              <el-col :span="12" class="tr"><el-button type="text" @click="handleGoUrl('/person/todo')"><i>25</i></el-button></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="background:#E6A23C;">
          <div class="todo_l">
            <el-row>
              <el-col :span="12" class="tl"><span>日程安排</span></el-col>
              <el-col :span="12" class="tr"><el-button type="text" @click="handleGoUrl('/person/timelist')"><i>30</i></el-button></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="background:#F56C6C;">
          <div class="todo_l">
            <el-row>
              <el-col :span="12" class="tl"><span>我的督办</span></el-col>
              <el-col :span="12" class="tr"><el-button type="text" @click="handleGoUrl('/office/supervisetask')"><i>18</i></el-button></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="background:#409EFF;">
          <div class="date_l">
            <el-row>
              <el-col :span="12" class="tl">
                <p>{{dateList.date}}</p>
                <p>{{dateList.weekday}}</p>
              </el-col>
              <el-col :span="12" class="tr">
                {{dateList.time}}
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--公文-->
    <el-row class="oa_doc">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title"><i class="iconfont icon-inquirytemplate"></i> 公开公文</span>
            <el-tooltip class="item" effect="dark" content="查看更多" placement="top-start">
              <i class="el-icon-more-outline" style="float: right; padding: 3px 0"></i>
            </el-tooltip>
          </div>
          <div>
            <!--table-->
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                fixed
                prop="id"
                label="编号"
                show-overflow-tooltip
                width="90">
              </el-table-column>
              <el-table-column
                prop="type"
                label="公文类型"
                align="center"
                show-overflow-tooltip
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                align="center"
                min-width="150"
                show-overflow-tooltip
                label="标题">
              </el-table-column>
              <el-table-column
                prop="date"
                align="center"
                label="发文日期"
                show-overflow-tooltip
                width="100">
              </el-table-column>
              <el-table-column
                fixed="right"
                align="center"
                label="操作"
                width="60">
                <template slot-scope="scope">
                  <el-button type="text" size="small"><i class="iconfont icon-search"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title"> <i class="iconfont icon-inquirytemplate"></i> 部门公文</span>
            <el-tooltip class="item" effect="dark" content="查看更多" placement="top-start">
              <i class="el-icon-more-outline" style="float: right; padding: 3px 0"></i>
            </el-tooltip>
          </div>
          <div>
            <!--table-->
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                fixed
                prop="id"
                label="编号"
                show-overflow-tooltip
                width="90">
              </el-table-column>
              <el-table-column
                prop="type"
                label="公文类型"
                show-overflow-tooltip
                align="center"
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                align="center"
                min-width="150"
                show-overflow-tooltip
                label="标题">
              </el-table-column>
              <el-table-column
                prop="date"
                align="center"
                label="发文日期"
                show-overflow-tooltip
                width="100">
              </el-table-column>
              <el-table-column
                fixed="right"
                align="center"
                label="操作"
                width="60">
                <template slot-scope="scope">
                  <el-button type="text" size="small"><i class="iconfont icon-search"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--公告&文档-->
    <el-row class="oa_doc">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title"><i class="iconfont icon-remind1"></i> 通知公告</span>
            <el-tooltip class="item" effect="dark" content="查看更多" placement="top-start">
              <i class="el-icon-more-outline" style="float: right; padding: 3px 0"></i>
            </el-tooltip>
          </div>
          <div>
            <!--table-->
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="name"
                min-width="250"
                show-overflow-tooltip
                label="标题">
              </el-table-column>
              <el-table-column
                prop="date"
                align="center"
                label="日期"
                show-overflow-tooltip
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                align="center"
                label="操作"
                width="90">
                <template slot-scope="scope">
                  <el-button type="text" size="small"><i class="iconfont icon-search"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title"> <i class="iconfont icon-attachment"></i> 部门文档</span>
            <el-tooltip class="item" effect="dark" content="查看更多" placement="top-start">
              <i class="el-icon-more-outline" style="float: right; padding: 3px 0"></i>
            </el-tooltip>
          </div>
          <div>
            <!--table-->
            <el-table
              :data="tableData2"
              stripe
              style="width: 100%">
              <el-table-column
                prop="name"
                min-width="250"
                show-overflow-tooltip
                label="名称">
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                align="center"
                show-overflow-tooltip
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                align="center"
                label="操作"
                width="90">
                <template slot-scope="scope">
                  <el-button type="text" size="small"><i class="iconfont icon-icondownload"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Main',
  mounted() {
    this.showTime();
  },
  data() {
    return {
      dateList: {
        date: '',
        weekday: '',
        time: ''
      },
      tableData: new Array(5).fill({
        id: 10000,
        type: '决议',
        name: '关于教学改进决议爱上看见哈萨克就暗杀看',
        date: '2017-10-20'
      }),
      tableData2: new Array(5).fill({
        type: 'ZIP',
        name: '全区先进教案模板'
      })
    };
  },
  methods: {
    showTime() {
      var show_day = new Array(
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      );
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var day = time.getDay();
      var hour = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      month < 10 ? (month = '0' + month) : month;
      month = month;
      hour < 10 ? (hour = '0' + hour) : hour;
      minutes < 10 ? (minutes = '0' + minutes) : minutes;
      this.dateList.date = year + '年' + month + '月' + date + '日';
      this.dateList.weekday = show_day[day];
      this.dateList.time = hour + ':' + minutes;
      setTimeout(this.showTime, 3000);
    },
    handleGoUrl(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>
<style lang="scss" scoped>
.oa_main_card {
  .el-card {
    margin: 6px;
  }
  .todo_l {
    line-height: 75px;
    color: #fff;
    .tl {
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }
    .tr {
      .el-button--text {
        font-size: 60px;
        font-weight: 500;
        color: #fff;
        padding: 0;
        line-height: 75px;
      }
      .el-button--text:hover {
        font-size: 62px;
        transition: 0.5;
        text-shadow: 2px 2px 1px #666;
      }
    }
  }
  .date_l {
    color: #fff;
    .tl {
      font-size: 14px;
      font-weight: bold;
    }
    .tr {
      line-height: 75px;
      font-size: 42px;
      text-align: center;
    }
  }
}
.oa_doc {
  margin: 25px 0px;
  .el-card {
    margin: 0 6px;
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #409eff;
    }
    .el-icon-more-outline:hover {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-search {
      font-weight: bold;
    }
  }
}
</style>
<style lang="scss">
.oa_main_card {
  .el-card__body {
    height: 75px;
  }
}
.el-card__body:hover {
  box-shadow: 3px 3px 3px #ccc;
}
</style>
