<template>
  <div class="homepage">
    <header-datagouv></header-datagouv>
    <div class="page">
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
                          <li :class="selectChart == '#visites' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#visites')" class="fr-sidemenu__link" href="#visites" target="_self">Visites</a>
                          </li>
                          <li :class="selectChart == '#visiteurs-uniques' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#visiteurs-uniques')" class="fr-sidemenu__link" href="#visiteurs-uniques" target="_self">Visiteurs uniques</a>
                          </li>
                          <li :class="selectChart == '#telechargements' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#telechargements')" class="fr-sidemenu__link" href="#telechargements" target="_self">Téléchargements</a>
                          </li>
                          <li :class="selectChart == '#top10datasets' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#top10datasets')" class="fr-sidemenu__link" href="#top10datasets" target="_self">Top 10 des jeux de données</a>
                          </li>
                          <li :class="selectChart == '#top10reuses' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#top10reuses')" class="fr-sidemenu__link" href="#top10reuses" target="_self">Top 10 des réutilisations</a>
                          </li>
                          <li :class="selectChart == '#datasets' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#datasets')" class="fr-sidemenu__link" href="#datasets" target="_self">Nombre de nouveaux jeux de données</a>
                          </li>
                          <li :class="selectChart == '#reuses' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#reuses')" class="fr-sidemenu__link" href="#reuses" target="_self">Nombre de nouvelles réutilisations</a>
                          </li>
                          <li :class="selectChart == '#orgas' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#orgas')" class="fr-sidemenu__link" href="#orgas" target="_self">Nombre de nouvelles organisations</a>
                          </li>
                          <li :class="selectChart == '#discussions' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#discussions')" class="fr-sidemenu__link" href="#discussions" target="_self">Nombre de nouvelles discussions</a>
                          </li>
                          <li :class="selectChart == '#users' ? 'fr-sidemenu__item fr-sidemenu__item--active' : 'fr-sidemenu__item'">
                            <a @click="changeMenuSelection('#users')" class="fr-sidemenu__link" href="#users" target="_self">Nombre de nouveaux utilisateurs</a>
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
                <line-chart indicateur="matomo-stats-visits"></line-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('visites')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'visites'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="visiteurs-uniques" class="widget">
          <div>
            <div class="chart_container">
                <line-chart indicateur="matomo-stats-uniq_visits"></line-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('visiteurs-uniques')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'visiteurs-uniques'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="telechargements" class="widget">
          <div>
            <div class="chart_container">
                <line-chart indicateur="matomo-stats-downloads"></line-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('telechargements')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'telechargements'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="top10datasets" class="widget">
          <div>
            <div class="chart_container">
                <data-table indicateur="matomo-tops-datasets" color="rgba(202,202,251,0.5)"></data-table>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('top10datasets')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'top10datasets'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="top10reuses" class="widget">
          <div>
            <div class="chart_container">
                <data-table indicateur="matomo-tops-reuses" color="rgba(31,141,73,0.3)"></data-table>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('top10reuses')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'top10reuses'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="datasets" class="widget">
          <div>
            <div class="chart_container">
                <bar-chart indicateur="stats-datagouv-datasets" color="#869ECE"></bar-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('datasets')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'datasets'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="reuses" class="widget">
          <div>
            <div class="chart_container">
                <bar-chart indicateur="stats-datagouv-reuses" color="#21AB8E"></bar-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('reuses')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'reuses'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="orgas" class="widget">
          <div>
            <div class="chart_container">
                <bar-chart indicateur="stats-datagouv-orgas" color="#E4794A"></bar-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('orgas')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'orgas'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="discussions" class="widget">
          <div>
            <div class="chart_container">
                <bar-chart indicateur="stats-datagouv-discussions" color="#34BAB5"></bar-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('discussions')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'discussions'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
          </div>
        </div>

        <div id="users" class="widget">
          <div>
            <div class="chart_container">
                <bar-chart indicateur="stats-datagouv-users" color="#A558A0"></bar-chart>
            </div>
            <div class="chart_info">
                <span @click="clickSelectInfo('users')">Que mesure cette indicateur ?</span>
                <span v-if="this.selectInfo && this.selectInfoChart == 'users'">
                  <br /><br />
                  Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla Lorem ipsum blabla
                </span>
            </div>
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
      selectChart: '#visites',
      selectInfo: false,
      selectInfoChart: 'visites',
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    changeMenuSelection(menu){
      this.selectChart = menu
    },
    clickSelectInfo(chart){
      if(this.selectInfo == false || this.selectInfoChart == chart){
        this.selectInfo = !this.selectInfo;
      }
      this.selectInfoChart = chart;
    }
  },
  watch:{
  },
  created(){
  },


}
</script>

<style scoped lang="scss">

.fr-sidemenu__inner{
  padding: 0 0 0 0;
}

.page {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
    height: 100%;
}

.homepageold{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.menu{
  min-width: 300px;
  margin-left: auto;
}

.menuContent{
  width: 300px;
  //position: fixed;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}

.widgets{
  margin-left: 80px;
  margin-right: auto;
}

.widget{
  max-width: 600px;
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

.chart_info{
  max-width: 500px;
  margin-top: 15px;
  padding: 15px;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
}

</style>