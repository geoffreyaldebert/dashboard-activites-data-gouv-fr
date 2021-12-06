<template>
  <div class="chart" v-if="dataset">
    <h3>{{dataset["nom"]}}</h3>
    <div class="table">
      <div class="row" :key="r['name']" v-for="r,i in dataset['values']">
        <div class="inner_row" :style="{width:getBg(r['value'])}"></div>
        <div class="content">
          <div class="rank">
            {{i+1}}
          </div>
          <div class="name">
            {{r['name']}}
          </div>
          <div class="value">
            {{r['value']}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mixin } from '@/utils.js'
export default {
  name: 'DataTable',
  mixins: [mixin],
  data(){
    return {
      dataset:undefined
    }
  },
  props: {
    indicateur: String
  },
  computed: {
    
  },
  methods: {

    async getData () {
      store.dispatch('getData', this.indicateur).then(data => {
        this.dataset = data
      })
    },

    getBg (value) {
      var p = value/this.dataset["values"][0]["value"]*100
      return p+"%"
    }
  },

  watch:{
    
  },

  created(){

    this.getData()
    
  },


}
</script>

<style scoped lang="scss">

  @import "../../css/overload-fonts.css";
  @import "../../css/dsfr.min.css";

  @keyframes progress-bar {
    0% { width: 0; }
  }

  .chart{
    width: 100%;
    height:500px;
    .table{
      width: 100%;
      .row{
        height: 50px;
        border:1px solid black;
        position: relative;
        .inner_row{
          height: 50px;
          width: 50%;
          background-color: rgba(0, 0, 145,0.5);
          position: absolute;
          animation: progress-bar 0.8s;
        }
        .content{
          display: block;
          height: auto;
          position: relative;
          top:50%;
          transform:translate(0,-50%);
          div{
            position: relative;
            display: inline-block;
            &.rank{
              margin-left: 10px;
              margin-right: 10px;
            }
            &.value{
              position: absolute;
              right:10px;
            }
          }
        }
      }
    }
  }

</style>