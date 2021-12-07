<template>
  <div class="chart" v-if="dataset">
    <h3>{{dataset["nom"]}}</h3>
    <div class="table">
      <div class="row" :key="r['name']" v-for="r,i in dataset['values']" @click="goToLink(r['url'])">
        <div class="inner_row" :style="{width:getBg(r['value']), backgroundColor: color}"></div>
        <div class="content">
          <div class="rank">
            {{i+1}}
          </div>
          <div v-if="r['name'].length <= 65" class="name">
            {{r['name']}}
          </div>
          <div v-if="r['name'].length > 65" class="name">
            {{r['name'].substring(0,60)}}...
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
    indicateur: String,
    color: String,
  },
  computed: {
    rowStyle() {
      return {
        "background-color": this.color
      };
    }
    
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
    },
    goToLink(url) {
      console.log(url)
      window.open(url, '_blank');
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
    height:700px;
    .table{
      width: 100%;
      .row{
        cursor: pointer;
        height: 50px;
        margin-bottom: 10px;
        font-size: 14px;
        position: relative;
        .name{
            max-width: 80%;
        }
        .inner_row{
          height: 50px;
          width: 50%;
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