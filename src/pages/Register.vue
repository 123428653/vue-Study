<template>
  <div class="login">
    <h2>用户注册</h2>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class='login-form'>
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
      <el-form-item prop="checkPass">
        <el-input
          type='password'
          placeholder='Confrm Password'
          v-model="ruleForm.checkPass" 
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
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback()
      }
    };
    return {
      ruleForm: {
        userName: '',
        password: '',
        checkPass: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
          util.post('/api/reg',this.ruleForm)
            .then(res => {
              console.log(res,3)
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
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>