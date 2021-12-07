<template>
  <div class="homepage">
    <div class="menu">
        <div class="menuContent">
          <nav class="fr-sidemenu fr-sidemenu--sticky-full-height fr-pr-0" role="navigation" aria-label="Menu latéral">
            <div class="fr-sidemenu__inner">
              <div class="fr-collapse fr-pt-0 fr-pt-md-4w fr-pb-md-11w" id="fr-sidemenu-wrapper">
                <div class="fr-sidemenu__title">Changer de période</div>
                <div class="buttonsHeader">
                  <div :class="period === 'month' ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'" @click="changePeriod('month')">Mensuel</div>
                  <div :class="period === 'week' ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'" @click="changePeriod('week')">Hebdomadaire</div>
                  <div :class="period === 'day' ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'" @click="changePeriod('day')">Quotidien</div>
                </div>
                <div class="fr-sidemenu__title">Choisissez un indicateur :</div>
                <ul class="fr-sidemenu__list">
                  <li class="fr-sidemenu__item">
                    <div class="fr-collapse fr-collapse--expanded" id="vue_d_ensemble" style="max-height: none; --collapse:-312px;">
                      <ul class="fr-sidemenu__list">
                        <li class="fr-sidemenu__item fr-sidemenu__item--active">
                          <a class="fr-sidemenu__link" href="#visites" target="_self">Visites</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#visiteurs-uniques" target="_self">Visiteurs uniques</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#telechargements" target="_self">Téléchargements</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#top10datasets" target="_self">Top 10 des jeux de données</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#top10reuses" target="_self">Top 10 des réutilisations</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#datasets" target="_self">Nombre de nouveaux jeux de données</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#reuses" target="_self">Nombre de nouvelles réutilisations</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#orgas" target="_self">Nombre de nouvelles organisations</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#discussions" target="_self">Nombre de nouvelles discussions</a>
                        </li>
                        <li class="fr-sidemenu__item">
                          <a class="fr-sidemenu__link" href="#users" target="_self">Nombre de nouveaux utilisateurs</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
        </div>
    </div>
    <div class="widgets">

      <div id="visites" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-visites-day"></line-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-visites-week"></line-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-visites-month"></line-chart>
          </div>
        </div>
      </div>

      <div id="visiteurs-uniques" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-visiteurs-uniques-day"></line-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-visiteurs-uniques-week"></line-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-visiteurs-uniques-month"></line-chart>
          </div>
        </div>
      </div>

      <div id="telechargements" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-telechargement-day"></line-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-telechargement-week"></line-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <line-chart indicateur="matomo-global-telechargement-month"></line-chart>
          </div>
        </div>
      </div>

      <div id="top10datasets" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <data-table indicateur="matomo-tops-datasets-day" color="rgba(202,202,251,0.5)"></data-table>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <data-table indicateur="matomo-tops-datasets-week" color="rgba(202,202,251,0.5)"></data-table>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <data-table indicateur="matomo-tops-datasets-month" color="rgba(202,202,251,0.5)"></data-table>
          </div>
        </div>
      </div>

      <div id="top10reuses" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <data-table indicateur="matomo-tops-reuses-day" color="rgba(31,141,73,0.3)"></data-table>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <data-table indicateur="matomo-tops-reuses-week" color="rgba(31,141,73,0.3)"></data-table>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <data-table indicateur="matomo-tops-reuses-month" color="rgba(31,141,73,0.3)"></data-table>
          </div>
        </div>
      </div>

      <div id="datasets" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-datasets-day" color="#869ECE"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-datasets-week" color="#869ECE"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-datasets-month" color="#869ECE"></bar-chart>
          </div>
        </div>
      </div>

      <div id="reuses" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-reuses-day" color="#21AB8E"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-reuses-week" color="#21AB8E"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-reuses-month" color="#21AB8E"></bar-chart>
          </div>
        </div>
      </div>

      <div id="orgas" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-orgas-day" color="#E4794A"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-orgas-week" color="#E4794A"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-orgas-month" color="#E4794A"></bar-chart>
          </div>
        </div>
      </div>

      <div id="discussions" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-discussions-day" color="#34BAB5"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-discussions-week" color="#34BAB5"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-discussions-month" color="#34BAB5"></bar-chart>
          </div>
        </div>
      </div>

      <div id="users" class="widget">
        <div>
          <div v-if="period === 'day'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-users-day" color="#A558A0"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'week'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-users-week" color="#A558A0"></bar-chart>
          </div>
          </div>
          <div>
          <div v-if="period === 'month'" class="chart_container" style="max-width: 600px; margin-left: 30px;">
              <bar-chart indicateur="stats-datagouv-users-month" color="#A558A0"></bar-chart>
          </div>
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
      periodOrgaSelected: 0,
      periodDiscussionSelected: 0,
      periodUserSelected: 0,
      periodVisitorSelected: 0,
      periodVisitSelected: 0,
      periodDownloadSelected: 0,
      periodTop10DatasetSelected: 0,
      periodTop10ReuseSelected: 0,
      period: 'month'
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    changePeriod (period) {
      this.period = period;
    },
    changePeriodDataset (item) {
      this.periodDatasetSelected = item.value
    }, 
    changePeriodReuse (item) {
      this.periodReuseSelected = item.value
    },
    changePeriodOrga (item) {
      this.periodOrgaSelected = item.value
    },
    changePeriodVisit (item) {
      this.periodVisitSelected = item.value
    }, 
    changePeriodVisitor (item) {
      this.periodVisitorSelected = item.value
    }, 
    changePeriodDownload (item) {
      this.periodDownloadSelected = item.value
    }, 
    changePeriodTop10Dataset (item) {
      this.periodTop10DatasetSelected = item.value
    }, 
    changePeriodTop10Reuse (item) {
      this.periodTop10ReuseSelected = item.value
    }
  },
  watch:{
  },
  created(){
  },


}
</script>

<style scoped lang="scss">

.homepage{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.menu{
  width: 380px;
}

.menuContent{
  width: 380px;
  position: fixed;
}

.widget{
  max-width: 900px;
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
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
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