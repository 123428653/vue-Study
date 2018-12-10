<template>
  <div class="itemWrap">
    <p> Flexbox布局</p>
    <!-- <whoolala-select /> -->
    <div class="wrap">
      <div class="box box1">
        <div class="item"></div>
      </div>
      <div class="box box2">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="box box3">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="box box4">
        <div class="column">
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="column">
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="box box5">
        <div class="column">
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="column">
          <div class="item"></div>
        </div>
        <div class="column">
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="box box6">
        <div class="column">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="column">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Flex',
    mounted() {
      var sum = +this.multiply(1)(2)(6)
      var sum2 = +this.multiply(1)(2)(3)(6)(10)
      console.log(sum2)
    },
    methods: {
      multiply(x) {
        let sum = x;
        let tmp = function (y) {
          sum = sum * y;
          return tmp;
        };
        tmp.toString = function () {
            return sum;
        };
        return tmp;
      }
    }
  }
</script>
<style scoped>
  .itemWrap p{
    text-align: center;
  }
  .wrap{
    display: flex;
    width: 180px;
    margin: 0 auto;
    flex-wrap:  wrap; 
    justify-content: space-between
  }
  .box{
    margin: 0 auto;
    width: 50px;
    height: 50px;
    padding: 6px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border:1px solid #ddd;
    border-radius: 5px;
    display:flex;
    display: -webkit-flex;
  }
  .item{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(0, 0, 0);
  }
  .box1{
    justify-content: center;
    align-items: center;
  }
  .box2{
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .box3{
    justify-content:space-between;
  }
  .box3 .item:nth-child(2){
    align-self: center;
  }
  .box3 .item:nth-child(3){
    align-self: flex-end;
  }
  .box4, .box5{
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .box4 .column, .box5 .column{
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
  }
  .box5 .column:nth-child(2){
    justify-content: center;
  }
  .box6 {
    display: flex;
    justify-content: space-around;
  }
  .box6 .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>