<template>
  <div>
    <div class="cy" ref="cy"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Cytoscape',
    mounted() {
      let cy = this.$cy({
        container: this.$refs.cy,
        boxSelectionEnabled: false,
        autounselectify: true,
        maxZoom: 2,
        minZoom: 0.5,
        elements: {
          nodes: [
            { data: { id: 'n', label: 'Tap me' } }
          ]
        },
        layout: {
          name: 'grid',
          padding: 100
        },
        ready: function(){
          window.cy = this;
        },
        style: 'node { content: data(label); }'
      })
      // qtip
      cy.$('#n').qtip({
        content: 'Hello!',
        position: {
          my: 'top center',
          at: 'bottom center'
        },
        show: {
          event: 'click'
        },
        hide: {
          event: 'mouseout'
        },
        events: {
          show(event){
            console.log(event.originalEvent,event.originalEvent.which);
          }
        },
        style: {
          classes: 'qtip-bootstrap',
          tip: {
            width: 16,
            height: 8
          }
        }
      })
    }
  }
</script>
<style scoped>
  .cy{
    height: 300px;
    background: #eee;
  }
</style>