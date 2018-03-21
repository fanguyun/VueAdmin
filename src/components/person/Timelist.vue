<template>
  <div class="oa_main">
    <!--面包屑-->
    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>个人事务</el-breadcrumb-item>
          <el-breadcrumb-item>日程安排</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="form.name" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="日程类型">
          <el-select v-model="form.timeType" placeholder="请选择日程类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="form.time"
            type="month"
            placeholder="请选择时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline">新增日程</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--list-->
    <div class="oa_timelist">
      <full-calendar class="test-fc" :events="fcEvents"
        first-day='1' locale="zh"
        ref="timeMain"
        :current-month="currentMonth"
        @changeMonth="changeMonth"
        @eventClick="eventClick"
        @dayClick="dayClick"
        @moreClick="moreClick">
          <template slot="fc-event-card" slot-scope="scope">
              <p><i class="fa">sadfsd</i> {{ scope.event.title }} test</p>
          </template>
      </full-calendar>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  data() {
    let demoEvents = [
      {
        title: 'Sunny 725-727',
        start: '2017-02-25',
        end: '2017-02-27',
        cssClass: 'family'
      },
      {
        title: 'Lunfel 726-727',
        start: '2017-02-26',
        end: '2017-02-27',
        cssClass: ['home', 'work']
      },
      {
        title: 'Lunfel 2/27-2/28',
        start: '2017-02-27',
        end: '2017-02-28'
      },
      {
        title: 'Lunfel 2/27-2/28',
        start: '2017-02-27',
        end: '2017-02-28'
      },
      {
        title: 'Lunfel 2/27-2/28',
        start: '2017-02-27',
        end: '2017-02-28'
      },
      {
        title: 'Lunfel 2/26-3/05',
        start: '2017-02-26',
        end: '2017-03-05'
      },
      {
        title: 'Lunfel 1/27-1/28',
        start: '2017-01-27',
        end: '2017-01-28'
      },
      {
        title: 'Lunfel 1/27-2/2',
        start: '2017-01-27',
        end: '2017-02-02'
      },
      {
        title: 'Lunfel 3/27-3/28',
        start: '2017-03-27',
        end: '2017-03-28'
      }
    ];
    return {
      name: 'Sunny!',
      fcEvents: demoEvents,
      currentMonth: '',
      options: [
        {
          value: '1',
          label: '会议'
        },
        {
          value: '2',
          label: '活动'
        },
        {
          value: '3',
          label: '其它'
        }
      ],
      form: {
        name: '',
        timeType: '',
        time: []
      }
    };
  },
  methods: {
    changeMonth(start, end, current) {
      console.log('changeMonth', start, end, current);
    },
    eventClick(event, jsEvent, pos) {
      console.log('eventClick', event, jsEvent, pos);
    },
    dayClick(day, jsEvent) {
      console.log('dayClick', day, jsEvent);
    },
    moreClick(day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent);
    },
    onSubmit() {
      console.log(new Date(this.form.time).getMonth() + 1);
      console.log(this.form);
      this.$refs.timeMain.emitChangeMonth(
        new Date(this.form.time).getMonth() + 1 + ' ' + this.form.time
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.comp-full-calendar {
  width: 100%;
  max-width: inherit;
  padding: 0;
}
</style>
<style lang="scss">
.comp-full-calendar {
  .header-center {
    font-size: 16px;
    line-height: 30px;
  }
  .full-calendar-body .weeks {
    height: 30px;
    line-height: 30px;
    border-color: #eee;
  }
}
</style>
