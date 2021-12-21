<template>
  <div class="homepage">
    <div class="menu">
        <div class="menuContent">
          <nav class="fr-sidemenu fr-sidemenu--sticky-full-height fr-pr-0" role="navigation" aria-label="Menu latéral">
            <div class="fr-sidemenu__inner">
              <div class="fr-collapse fr-pt-0 fr-pt-md-4w fr-pb-md-11w" id="fr-sidemenu-wrapper">
               <periode-selector></periode-selector>
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
          <div class="chart_container">
              <line-chart indicateur="matomo-global-visites"></line-chart>
          </div>
        </div>
      </div>

      <div id="visiteurs-uniques" class="widget">
        <div>
          <div class="chart_container">
              <line-chart indicateur="matomo-global-visiteurs-uniques"></line-chart>
          </div>
        </div>
      </div>

      <div id="telechargements" class="widget">
        <div>
          <div class="chart_container">
              <line-chart indicateur="matomo-global-telechargement"></line-chart>
          </div>
        </div>
      </div>

      <div id="top10datasets" class="widget">
        <div>
          <div class="chart_container">
              <data-table indicateur="matomo-tops-datasets" color="rgba(202,202,251,0.5)"></data-table>
          </div>
        </div>
      </div>

      <div id="top10reuses" class="widget">
        <div>
          <div class="chart_container">
              <data-table indicateur="matomo-tops-reuses" color="rgba(31,141,73,0.3)"></data-table>
          </div>
        </div>
      </div>

      <div id="datasets" class="widget">
        <div>
          <div class="chart_container">
              <bar-chart indicateur="stats-datagouv-datasets" color="#869ECE"></bar-chart>
          </div>
        </div>
      </div>

      <div id="reuses" class="widget">
        <div>
          <div class="chart_container">
              <bar-chart indicateur="stats-datagouv-reuses" color="#21AB8E"></bar-chart>
          </div>
        </div>
      </div>

      <div id="orgas" class="widget">
        <div>
          <div class="chart_container">
              <bar-chart indicateur="stats-datagouv-orgas" color="#E4794A"></bar-chart>
          </div>
        </div>
      </div>

      <div id="discussions" class="widget">
        <div>
          <div class="chart_container">
              <bar-chart indicateur="stats-datagouv-discussions" color="#34BAB5"></bar-chart>
          </div>
        </div>
      </div>

      <div id="users" class="widget">
        <div>
          <div class="chart_container">
              <bar-chart indicateur="stats-datagouv-users" color="#A558A0"></bar-chart>
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

    }
  },
  props: {
  },
  computed: {
  },
  methods: {
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
  //position: fixed;
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

.chart_container{
  max-width: 600px;
  margin-left: 30px;
}

</style>