<template>
  <div class="marked">
    <div v-html="markedToHtml"></div>
  </div>
</template>
<script type="text/javascript">
  import marked from "marked"
  import  'highlight.js/styles/atom-one-dark.css'
  // import  'highlight.js/styles/monokai-sublime.css'
  import hlj from "highlight.js"
  export default {
    data() {
      return {
        markDown: '```js\n console.log("hello"); \n function todoList(a, b){\n    return a + b \n } \n```'
      }
    },
    computed:{
      markedToHtml(){
        var rendererMD = new marked.Renderer();
        marked.setOptions({
          renderer: rendererMD,
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          highlight: function (code) {
          return hlj.highlightAuto(code).value;
          }
        });
        // console.log(this.article.content);
        return marked(this.markDown);
      }
    },
  };
</script>
<style scoped>
  .marked{
    color: #fff;
    background-color: #000;
  }
</style>