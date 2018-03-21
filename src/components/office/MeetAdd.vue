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
    <!--list-->
    <el-row class="send_file">
      <el-col :span="23">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="会议主题">
            <el-input v-model="form.name" placeholder="请输入会议主题"></el-input>
          </el-form-item>
          <el-form-item label="会议地点">
            <el-input v-model="form.address" placeholder="请输入会议地点"></el-input>
          </el-form-item>
          <el-form-item label="与会人员">
            <el-input v-model="form.user" placeholder="请输入与会人员"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="会议日期">
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  style="width:100%;"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="会议时间">
                <el-time-picker
                  is-range
                  v-model="form.time"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  style="width:100%;"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.mark" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="会议纪要" class="editer" v-if="$route.query.state=='view'">
            <vue-editor v-model="form.content"></vue-editor>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor';
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      form: {
        name: '',
        address: '',
        user: '',
        date: '',
        content: '',
        time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        content: ''
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
