<template>
  <div class="index">
    <div class="header">
      <img src="@/assets/logo.png">
      <div class="nav">
        <router-link v-for="(item, index) in nav" :key="index" :to="item.to">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import util from '@/utils'
export default {
  data() {
    return {
      nav: [
        {
          name: '首页',
          to: '/index'
        },
        {
          name: 'Flex布局',
          to: '/flex'
        },
        {
          name: 'Cytoscape',
          to: '/cy'
        },
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
    util.get('/postsAPI/showPostsByCategory4Operate?categoryID=2&return_format=json&lang=zh_CN&directPage=2')
      .then(res =>{
        console.log(res)
      })
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