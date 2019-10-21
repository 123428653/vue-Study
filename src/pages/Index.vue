<template>
  <div class="index">
    <div class="header">
      <img src="@/assets/logo.png">
      <div class="nav">
        <router-link v-for="(item, index) in nav" :key="index" :to="item.to">{{item.name}}</router-link>
        <a href="javascript:;" @click="text">普通文字提示</a>
        <a href="javascript:;" @click="loading">Loading</a>
        <a href="javascript:;" @click="openText('关闭后回调')">Toast</a>
        <a href="javascript:;" @click="close">手动隐藏Toast</a>
      </div>
    </div>
  </div>
</template>

<script>
import util from '@/utils'
export default {
  data() {
    return {
      toast: null,
      nav: [
        {
          name: '首页',
          to: '/index'
        },
        {
          name: 'Flex布局',
          to: '/flex'
        },
        /* {
          name: 'Cytoscape',
          to: '/cy'
        }, */
        {
          name: 'Debounce',
          to: '/debounce'
        },
        {
          name: '自定义指令、组件',
          to: '/custom'
        },
        {
          name: '过渡',
          to: '/transition'
        },
        {
          name: '画布',
          to: '/canvas'
        },
        {
          name: 'Marked高亮',
          to: '/markedHighlight'
        },
      ]
    }
  },
  created(){
    // this.$toast('这是默认Loading...')
    /* util.get('/postsAPI/showPostsByCategory4Operate?categoryID=2&return_format=json&lang=zh_CN&directPage=2')
      .then(res =>{
        console.log(res)
      }) */
  },
  methods: {
    text () {
      // 普通调用
      this.toast = this.$toast('普通文字提示')
    },
    loading () {
      // Loading提示，永不关闭
      this.toast = this.$toast({
        type: 'loading',
        duration: 0,
        mask: false,
        message: 'Loading...'
      })
    },
    openText (msg) {
      // 携带参数的文字提示
      this.toast = this.$toast({
        type: 'text',
        message: msg,
        closed: function(){
          // 关闭后回调
          console.log('关闭后回调')
        }
      })
    },
    close () {
      // 手动关闭提示弹窗
      this.toast && this.toast.close()
      this.toast = null
    }
  },
  components: {}
}
</script>

<style lang="scss">
.index{
   margin-top: 60px;
  .header{
    text-align: center;
  }
  .nav{
    margin-bottom: 20px;
  }
  .nav a{
    display: inline-block;
    margin: 0 10px;
  }
}
</style>