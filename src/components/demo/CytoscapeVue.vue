<template>
  <div class="cyVue">
    <input type="text" v-model="str" v-on:keyup.13="cySearch"><button @click="cySearch">搜索</button>
    <cytoscape :config="config" :preConfig="preConfig" :afterCreated="afterCreated" style="width: 100%; height: 400px"/>
  </div>
</template>
<script type="text/javascript">
  const config = {
    boxSelectionEnabled: false,
    autounselectify: true,
    maxZoom: 2,
    minZoom: 0.5,
    elements: {
      nodes: [
        { data: { id: 'j', name: 'Jerry' } },
        { data: { id: 'e', name: 'Elaine' } },
        { data: { id: 'k', name: 'Kramer' } },
        { data: { id: 'g', name: 'George' } }
      ],
      edges: [
        { data: { source: 'j', target: 'e' } },
        { data: { source: 'j', target: 'k' } },
        { data: { source: 'j', target: 'g' } },
        { data: { source: 'e', target: 'j' } },
        { data: { source: 'e', target: 'k' } },
        { data: { source: 'k', target: 'j' } },
        { data: { source: 'k', target: 'e' } },
        { data: { source: 'k', target: 'g' } },
        { data: { source: 'g', target: 'j' } }
      ]
    },
    style: [
      {
        selector: 'node',
        css: {
          'content': 'data(name)',
          // 'background-color': 'red'
        }
      },
      {
        selector: ':selected',
        style: {
          'background-color': 'yellow',
          'line-color': 'yellow',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black',
        }
      },
      {
        selector: 'edge',
        css: {
          'target-arrow-shape': 'triangle'
        }
      }
    ]
  }

  import qtip from 'cytoscape-qtip'
  export default {
    data(){
      return {
        config,
        str: ''
      }
    },
    mounted() {
      this.cyInit();
      // this.cyUpdate('');
    },
    methods: {
      preConfig(cytoscape) {
        qtip(cytoscape)
      },
      afterCreated(cy) {
        cy.elements().qtip({
          content: function(){ 
            return `Hello ${this.data().name} (${this.id()})`
          },
          position: {
            my: 'top center',
            at: 'bottom center'
          },
          style: {
            classes: 'qtip-bootstrap',
            tip: {
              width: 16,
              height: 8
            }
          }
        })
      },
      cySearch() {
        this.$cytoscape.instance.then(cy => {
          var nodes = cy.elements().nodes();
          nodes.forEach(node => {
            var str = node.data().name.toLowerCase(),
            id = node.data().id,
            keyWorld = this.str.toLowerCase()
            if(str.indexOf(this.str.toLowerCase()) < 0){
              cy.$('#'+id).style({
                'display': 'none'
              })
            }else{
              cy.$('#'+id).style({
                'display': ''
              })
            }
          })
        })
      },
      cyInit() {
        this.$cytoscape.instance.then(cy => {
          
          // inside the cytoscape callback we lose the component this, we can use `that` instead if needed
          const that = this
          // click and double click (simulated) over the nodes
          cy.on('tap', 'node', function (event) {
            cy.nodes().style({
              'background-color': '#999'
            })
            var node = event.target;
            cy.$('#'+node.id()).style({
              'background-color': '#116cd6'
            })
          })
        })
      }
    }
  };
</script>
<style scoped>
  
</style>