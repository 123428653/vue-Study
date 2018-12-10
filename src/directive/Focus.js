export default {
  install(Vue){
    // 自定义指令
    Vue.directive('focus',{
      //当被绑定的元素插入到 DOM 中时（初始化时即可生效）
      inserted(el){
        el.focus()
      }
    })

    // 自定义组件
    Vue.component('focus',{
      data(){
        return {
          val:'自动获取焦点'
        }
      },
      template:`
      <div class="v-focus">
        <label>UserName：<input v-focus v-model="val" type="text"></label>
        <span>{{ val }}</span>
      </div>
      `
    })
  }
}