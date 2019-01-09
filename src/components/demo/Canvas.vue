<template>
<div>
  <canvas class="cv" ref="cv" width="300" height="300" style="border:1px solid #d3d3d3;"></canvas>

  <!-- <div class="box">
    <span style="background:red">1</span>
    <span style="background:yellow">2</span>
    <span style="background:blue">3</span>
  </div> -->
</div>
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
      let cxt = this.$refs.cv.getContext('2d');
      let pi = Math.PI
      // cxt.translate(10, 7);
      // cxt.beginPath();
      // cxt.arc(150, 75, 50, 0, 2*pi)
      // cxt.stroke();
      // cxt.closePath();

      // cxt.beginPath();
      // cxt.moveTo(160,26);
      // cxt.lineTo(159,33);
      // cxt.stroke();
      this.star(cxt)
      
    },
    methods: {
      star(cxt) {
        cxt.lineWidth = 3;
        this.drawStar(cxt, 50, 100, 150, 150, 0)
      },
      drawStar(cxt, r, R, x, y, rot) {
        cxt.beginPath()
        for(let i = 0;  i < 5; i++){
          cxt.lineTo(Math.cos((18 + i*72 - rot)/180*Math.PI) * R + x,
                    -Math.sin((18 + i*72 - rot)/180*Math.PI) * R + y);
          cxt.lineTo(Math.cos((54 + i*72 - rot)/180*Math.PI) * r + x,
                    -Math.sin((54 + i*72 - rot)/180*Math.PI) * r + y);
        }
        cxt.closePath();
        cxt.stroke();
      }
    }
  };
</script>
<style scoped>
  .customInput{
    text-align: center
  }
  .box{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 300px;
    border:1px solid #ddd;
  }
  .box span{
    width: 100px;
  }
</style>