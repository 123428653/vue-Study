<template>
  <div class="login">
    <h2>修改密码</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class='login-form'>
      <el-form-item prop="userName">
        <el-input
          placeholder='输入邮箱'
          v-model="ruleForm.userName"
          autocomplete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type='password'
          placeholder='输入原密码'
          v-model="ruleForm.password" 
          autocomplete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="newPassword">
        <el-input
          type='password'
          placeholder='输入新密码'
          v-model="ruleForm.newPassword" 
          autocomplete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click="submitForm('ruleForm')" class='login-form-button'>
          确认修改
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import util from '@/utils'
export default {
  data() {
    
    return {
      ruleForm: {
        userName: '',
        password: '',
        newPassword: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 36, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 36, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
          util.post('/api/updatePassword',this.ruleForm)
            .then(res => {
              console.log(res)
            })
        } else {
          console.log('error submit!!')
          return false;
        }
      })
    },
  },
}
</script>
<style lang="scss">
html,body,#app{
  height: 100%;
}
.login{
  width: 440px;
  padding: 20px;
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  h2 {
    text-align: center;
  }
  .login-form-button{
    width: 100%;
  }
}
</style>