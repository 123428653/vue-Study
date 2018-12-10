<template>
  <div>
    <div class="debounce" ref="debounce"><h2>{{ n }}</h2></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Debounce',
    data() {
      return {
        n: 1
      }
    },
    mounted() {
      this.$refs.debounce.addEventListener('mousemove', this.debounce(this.sum, 1000))
    },
    methods: {
      debounce(fn, awit) {
        let timeout;
        return function() {
          let _this = this
          clearTimeout(timeout)
          timeout = setTimeout(function(){
            fn.apply(_this)
          }, awit)
        }
      },
      sum() {
        this.n += 1
      }
    }
  };
</script>
<style scoped>
  .debounce{
    height: 300px;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>