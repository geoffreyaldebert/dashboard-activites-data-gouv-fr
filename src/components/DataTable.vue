<template>
  <div class="chart" v-if="dataset">
    <h3>{{dataset["nom"]}}</h3>
    <div class="table">
      <div class="row" :key="r['name']" v-for="r,i in dataset['values']" :style="{background:getBg(r['value'])}">
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
      const dataRequest = await fetch("data/table.json")
      const data = await dataRequest.json()
      this.dataset = data
    },

    getBg (value) {
      var p = value/this.dataset["values"][0]["value"]*100
      return "linear-gradient(90deg, rgba(0, 0, 145,0.5) "+p+"%, #ffffff "+p+"%)"
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

  .chart{
    width: 100%;
    height:500px;
    .table{
      width: 100%;
      .row{
        height: 50px;
        background: linear-gradient(90deg, rgba(0, 0, 145,0.5) 0%, #ffffff 0%);
        border:1px solid black;
        position: relative;
        transition: all 0.8 ease-in-out;
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