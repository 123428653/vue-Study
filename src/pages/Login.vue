<template>
  <div class="login">
    <h2>登录</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class='login-form'>
      <el-form-item prop="userName">
        <el-input
          placeholder='userName'
          v-model="ruleForm.userName"
          autocomplete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type='password'
          placeholder='Password'
          v-model="ruleForm.password" 
          autocomplete="off"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click="submitForm('ruleForm')" class='login-form-button'>
          Log in
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
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
        ],
        password: [
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
          util.post('/api/login',this.ruleForm)
            .then(res => {
              console.log(res)
              if(res.msg !== 'success'){
                this.$message.error(res.msg);
              }else{
                this.$message.success('登录成功！');
                this.$router.push('/')
              }
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