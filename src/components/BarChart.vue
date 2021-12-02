<template>
  <div>
    <div class="chart_container">
      <h1>{{dataset["nom"]}}</h1>
      <div class="barchart_tooltip" v-if="tooltip.display" :style="{top:tooltip.top,left:tooltip.left}">
        <div class="tooltip_header">{{tooltip.date}}</div>
        <div class="tooltip_body">
          <div class="tooltip_value">
            <span class="legende_dot"></span>
            {{tooltip.value}}
          </div>
        </div>
      </div>
      <canvas :id="chartId"></canvas>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mixin } from '@/utils.js'
import Chart from 'chart.js'
export default {
  name: 'BarChart',
  mixins: [mixin],
  data(){
    return {
      dataset:undefined,
      chartId: '',
      tooltip: {
        top: '0px',
        left: '0px',
        display: false,
        value: 110,
        date: ''
      }
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
        console.log(data)
        this.createChart()
      })
    },

    createChart () {
      const self = this

      const labels = []
      const datapoints = []

      this.dataset["values"].forEach(function(d){
        labels.push(d["date"])
        datapoints.push(d["value"])
      })

      let xTickLimit = 6

      setTimeout(function(){

        const ctx = document.getElementById(self.chartId).getContext('2d')
        
        this.chart = new Chart(ctx, {
          data: {
            labels: labels,
            datasets: [{
              data: datapoints,
              backgroundColor: '#000091',
              borderColor: '#000091',
              type: 'bar',
              borderWidth: 4
            }]
          },
          options: {
            animation: {
              easing: 'easeInOutBack'
            },
            onHover: (e) => {
            if (this.chart.getElementsAtEvent(e).length !== 0) {
              const index = this.chart.getElementsAtEvent(e)[0]._index
              const pxTop = this.chart.scales['y-axis-0'].getPixelForValue(datapoints[index])
              self.tooltip.top = (e.target.getBoundingClientRect().top + pxTop - 50) + 'px'
              self.tooltip.left = (e.target.getBoundingClientRect().left + this.chart.scales['x-axis-0'].getPixelForTick(index) + 25) + 'px'
              self.tooltip.display = true

              self.tooltip.value = datapoints[index]
              self.tooltip.date = labels[index]
            } else {
              self.tooltip.display = false
            }
          },
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'rgba(0, 0, 0, 0)'
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: xTickLimit,
                  maxRotation: 0,
                  minRotation: 0,
                  callback: function (value) {
                    return value
                  }
                }
              }],
              yAxes: [{
                gridLines: {
                  color: '#e5e5e5',
                  borderDash: [3]
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            }
          }
        })
      },100)
    },

  },

  watch:{
    
  },

  created(){
    this.chartId = 'myChart' + Math.floor(Math.random() * (1000))
    this.getData()
    
  }

}
</script>

<style scoped lang="scss">

  @import "../../css/overload-fonts.css";
  @import "../../css/dsfr.min.css";

  .chart_container{
    max-width: 650px;
  }

  canvas{
    width: 100%;
  }

  .barchart_tooltip{
      width: 165px;
      height: auto;
      background-color: white;
      position: fixed;
      z-index: 999;
      border-radius: 4px;
      box-shadow: 0 8px 16px 0 rgba(22, 22, 22, 0.12), 0 8px 16px -16px rgba(22, 22, 22, 0.32);
      text-align: left;
      pointer-events: none;
      font-size: 0.75rem;
      .tooltip_header{
        width: 100%;
        height: 30px;
        background-color: #f6f6f6;
        color:#6b6b6b;
        padding-left: 5px;
        padding-top: 3px;
      }
      .tooltip_body{
        padding-left: 5px;
        padding-bottom: 5px;
        line-height: 1.67;
        .legende_dot{
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background-color: #000091;
          display: inline-block;
          margin-top: 0.25rem;
        }
        .tooltip_place{
          color:#242424;
        }
        .tooltip_value{
          color:#242424;
          font-weight: bold;
        }
      }
    }

</style>