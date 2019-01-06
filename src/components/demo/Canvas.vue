<template>
  <canvas class="cv" ref="cv" width="300" height="150" style="border:1px solid #d3d3d3;"></canvas>
</template>
<script type="text/javascript">
  import utils from '@/utils'
  export default {
    name: 'Canvas',
    created() {
      utils.get('/postsAPI/showPostsByCategory4Operate?categoryID=2&return_format=json&lang=zh_CN&directPage=2')
      .then(res => {
        console.log(res);
      })
    },
    mounted() {
      let ctx = this.$refs.cv.getContext('2d');
      let pi = Math.PI
      // ctx.translate(10, 7);
      ctx.beginPath();
      ctx.arc(150, 75, 50, 0, 2*pi)
      ctx.stroke();
      ctx.closePath();
      /* for (let i = 0; i < 60; i++){//绘制刻度。
        ctx.save();
        ctx.rotate(-pi / 2 + i * pi / 30);  //旋转坐标轴。坐标轴x的正方形从 向上开始算起
        ctx.beginPath();
        ctx.moveTo(160,26);
        ctx.lineTo(159,33);
        ctx.lineWidth = i % 5 ? 2 : 4;
        ctx.strokeStyle = i % 5 ? "blue" : "red";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
      ctx.restore(); */

      ctx.beginPath();
      ctx.moveTo(160,26);
      ctx.lineTo(159,33);
      ctx.stroke();
      
    },
    methods: {
    }
  };
</script>
<style scoped>
  .customInput{
    text-align: center
  }
</style>