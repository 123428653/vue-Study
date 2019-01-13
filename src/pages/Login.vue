<template>
  <div class="login">
    <h2>登录</h2>
    <a-form :form="form" id='components-form-demo-normal-login' @submit="handleSubmit" class='login-form'>
      <a-form-item>
        <a-input
          placeholder='userName'
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: 'Please input your username!' }] }
          ]"
        >
          <a-icon slot="prefix" type='user' style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] }
          ]"
          type='password'
          placeholder='Password'
        >
          <a-icon slot="prefix" type='lock' style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
        >
          Remember me
        </a-checkbox>
        <a class='login-form-forgot' href=''>Forgot password</a>
        <a-button type='primary' htmlType='submit' class='login-form-button'>
          Log in
        </a-button>
        Or <router-link to="/register">register now!</router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import util from '@/utils'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          util.post('/api/login',values)
            .then(res => {
              console.log(res)
            })
          // console.log('Received values of form: ', values)
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