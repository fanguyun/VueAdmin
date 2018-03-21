<template>
  <div class="oa_main">
    <!--面包屑-->
    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>办公管理</el-breadcrumb-item>
          <el-breadcrumb-item>督办通知</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!--list-->
    <el-row class="send_file">
      <el-col :span="23">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="交办事项">
            <el-input v-model="form.name" placeholder="请输入交办事项"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="督办类型">
                <el-select v-model="form.type" placeholder="请选择督办类型" style="width:100%;">
                  <el-option label="决议" value="1"></el-option>
                  <el-option label="命令" value="2"></el-option>
                  <el-option label="议案" value="3"></el-option>
                  <el-option label="指示" value="4"></el-option>
                  <el-option label="通告" value="5"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="主办部门">
                <el-input v-model="form.bumen" placeholder="请输入主办部门"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="任务及负责人">
            <el-table
              :data="form.tasks"
              border
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                align="center"
                label="任务描述">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.title" placeholder="请输入任务描述"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="责任人"
                align="center"
                width="300">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.puser" placeholder="请输入责任人"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                align="center"
                width="60">
                <template slot-scope="scope">
                  <el-button size="small" icon="el-icon-plus" @click="handleAddTask" v-if="scope.$index == form.tasks.length - 1" :disabled="form.tasks.length == 10 || !(scope.row.title && scope.row.puser)"></el-button>
                  <el-button size="small" icon="el-icon-minus" @click="handleRemoveTask(scope.$index)" v-else></el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
          <el-form-item label="备注" class="editer">
            <el-input type="textarea" v-model="form.mark" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="办结期限">
            <el-date-picker
              v-model="form.time"
              type="date"
              style="width:45%"
              placeholder="请选择办结期限">
            </el-date-picker>
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
        type: '',
        bumen: '',
        tasks: [
          {
            title: '',
            puser: ''
          }
        ],
        mark: '',
        time: ''
      }
    };
  },
  methods: {
    handleAddTask() {
      this.form.tasks.push({
        title: '',
        puser: ''
      });
    },
    handleRemoveTask(index) {
      this.form.tasks.splice(index, 1);
    },
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>
<style lang="scss" scoped>
.send_file {
  margin: 25px 0;
  .set_tp {
    margin-left: 80px;
    height: 400px;
  }
}
</style>
<style lang="scss">
.send_file {
  margin: 25px 0;
}
</style>
