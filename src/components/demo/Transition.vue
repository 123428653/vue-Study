<template>
  <div class="transition">
    <a-input placeholder="aa" /> 
    <a-button @click="shuffle">Shuffle</a-button>
    <a-button @click="add">Add</a-button>
    <a-button @click="remove">Remove</a-button>
    <transition-group name="list-complete" tag="p">
      <span
        v-for="item in items"
        :key="item"
        class="list-complete-item">{{ item }}</span>
    </transition-group>
  </div>
</template>
<script type="text/javascript">
import {message} from 'ant-design-vue'
import _ from "lodash"
export default {
  name: 'Transition',
  data () {
    return {
      show: true,
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      msg: 'Qin'
    }
  },
  components: {
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
      message.info('This is a normal message');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.transition{
  text-align: center;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>