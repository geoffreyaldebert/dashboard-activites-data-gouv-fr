<template>
  <div>
    <div class="widget">
      <div class="widgetHeader">
        <div class="titleHeader">
          <h3>Nouveaux jeux de données créés</h3>
        </div>
        <div class="buttonsHeader">
          <div v-for="item in buttons" @click='changePeriodDataset(item)' v-bind:key="item.label" :class="item.value === periodDatasetSelected ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'">{{ item.label }}</div>
        </div>
      </div>
      <br /> 
      <div>
        <div v-if="periodDatasetSelected === 0" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_datasets-day"></bar-chart>
        </div>
        </div>
        <div>
        <div v-if="periodDatasetSelected === 1" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_datasets-week"></bar-chart>
        </div>
        </div>
        <div>
        <div v-if="periodDatasetSelected === 2" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_datasets-month"></bar-chart>
        </div>
      </div>
    </div>

    <div class="widget">
      <div class="widgetHeader">
        <div class="titleHeader">
          <h3>Nouvelles réutilisations créées</h3>
        </div>
        <div class="buttonsHeader">
          <div v-for="item in buttons" @click='changePeriodReuse(item)' v-bind:key="item.label" :class="item.value === periodReuseSelected ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'">{{ item.label }}</div>
        </div>
      </div>
      <br /> 
      <div>
        <div v-if="periodReuseSelected === 0" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_reuses-day"></bar-chart>
        </div>
        </div>
        <div>
        <div v-if="periodReuseSelected === 1" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_reuses-week"></bar-chart>
        </div>
        </div>
        <div>
        <div v-if="periodReuseSelected === 2" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_reuses-month"></bar-chart>
        </div>
      </div>
    </div>

    <div class="widget">
      <div class="widgetHeader">
        <div class="titleHeader">
          <h3>Nouvelles discussions créées</h3>
        </div>
      </div>
      <div>
        <div class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_discussions-day"></bar-chart>
        </div>
      </div>
    </div>

    <div class="widget">
      <div class="widgetHeader">
        <div class="titleHeader">
          <h3>Nouveaux utilisateurs créées</h3>
        </div>
      </div>
      <div>
        <div class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <bar-chart indicateur="nb_users-day"></bar-chart>
        </div>
      </div>
    </div>
    <br />


    <div class="widget">
      <div class="widgetHeader">
        <div class="titleHeader">
          <h3>Visites Datagouv</h3>
        </div>
        <div class="buttonsHeader">
          <div v-for="item in buttons" @click='changePeriodVisit(item)' v-bind:key="item.label" :class="item.value === periodVisitSelected ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'">{{ item.label }}</div>
        </div>
      </div>
      <br /> 
      <div>
        <div v-if="periodVisitSelected === 0" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visites-day-matomo-global"></line-chart>
        </div>
        </div>
        <div>
        <div v-if="periodVisitSelected === 1" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visites-week-matomo-global"></line-chart>
        </div>
        </div>
        <div>
        <div v-if="periodVisitSelected === 2" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visites-month-matomo-global"></line-chart>
        </div>
      </div>
    </div>
    <br />

    <div class="widget">
      <div class="widgetHeader">
        <div class="titleHeader">
          <h3>Visiteurs uniques Datagouv</h3>
        </div>
        <div class="buttonsHeader">
          <div v-for="item in buttons" @click='changePeriodVisitor(item)' v-bind:key="item.label" :class="item.value === periodVisitorSelected ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'">{{ item.label }}</div>
        </div>
      </div>
      <br /> 
      <div>
        <div v-if="periodVisitorSelected === 0" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visiteurs-uniques-day-matomo-global"></line-chart>
        </div>
        </div>
        <div>
        <div v-if="periodVisitorSelected === 1" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visiteurs-uniques-week-matomo-global"></line-chart>
        </div>
        </div>
        <div>
        <div v-if="periodVisitorSelected === 2" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visiteurs-uniques-month-matomo-global"></line-chart>
        </div>
      </div>
    </div>
    <br />

    <div class="widget">
      <div class="widgetHeader">
        <div class="titleHeader">
          <h3>Téléchargements Datagouv</h3>
        </div>
        <div class="buttonsHeader">
          <div v-for="item in buttons" @click='changePeriodDownload(item)' v-bind:key="item.label" :class="item.value === periodDownloadSelected ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'">{{ item.label }}</div>
        </div>
      </div>
      <br /> 
      <div>
        <div v-if="periodDownloadSelected === 0" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visites-day-matomo-global"></line-chart>
        </div>
        </div>
        <div>
        <div v-if="periodDownloadSelected === 1" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visites-week-matomo-global"></line-chart>
        </div>
        </div>
        <div>
        <div v-if="periodDownloadSelected === 2" class="chart_container" style="max-width: 600px; margin-left: 30px;">
            <line-chart indicateur="visites-month-matomo-global"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'

export default {
  name: 'HomepageWidget',
  mixins: [],
  components:{
    BarChart,
    LineChart
  },
  data(){
    return {
      buttons: [
        {
          label: 'Quotidien',
          value: 0,
        },
        {
          label: 'Hebdomadaire',
          value: 1,
        },
        {
          label: 'Mensuel',
          value: 2,
        }
      ],
      periodDatasetSelected: 0,
      periodReuseSelected: 0,
      periodVisitorSelected: 0,
      periodVisitSelected: 0,
      periodDownloadSelected: 0
    }
  },
  props: {
  },
  computed: {
  },
  methods: {    
    changePeriodDataset (item) {
      this.periodDatasetSelected = item.value
    }, 
    changePeriodReuse (item) {
      this.periodReuseSelected = item.value
    }, 
    changePeriodVisit (item) {
      this.periodVisitSelected = item.value
    }, 
    changePeriodVisitor (item) {
      this.periodVisitorSelected = item.value
    }, 
    changePeriodDownload (item) {
      this.periodDownloadSelected = item.value
    }
  },
  watch:{
  },
  created(){
  },


}
</script>

<style scoped lang="scss">
.widget{
  max-width: 800px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ebebeb;
}
.widgetHeader{
  width: 100%;
  min-height: 100px;
}
.titleHeader{
  width: 100%;
  color: #000091;
}
.buttonsHeader{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.buttonHeader{
  padding: 10px;
  border: 1px solid #ebebeb;
  margin-right: 10px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
}
.buttonHeader:hover{
  background-color: #000091;
  color: white;
}
.buttonHeaderSelected{
  background-color: #000091;
  color: white;
}

</style>