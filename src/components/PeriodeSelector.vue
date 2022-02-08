<template>
  <div>
    <div class="fr-sidemenu__title">Change de période</div>
    <div class="buttonsHeader">
      <div :class="selectedPeriode === 'monthly' ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'" @click="changePeriod('monthly')">Ces 12 derniers mois</div>
      <div :class="selectedPeriode === 'weekly' ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'" @click="changePeriod('weekly')">Le mois dernier</div>
      <div :class="selectedPeriode === 'daily' ? 'buttonHeader buttonHeaderSelected' : 'buttonHeader'" @click="changePeriod('daily')">La semaine dernière</div>
    </div>
</div>
</template>

<script>
import store from '@/store'
import { mixin } from '@/utils.js'
export default {
  name: 'PeriodeSelector',
  mixins: [mixin],
  data(){
    return {
      
    }
  },
  props: {
  },
  computed: {
    selectedPeriode () {
      return store.state.selectedPeriode
    }
  },
  methods: {
    changePeriod(periode){
      store.commit('setPeriode', periode)
    }
  },
  watch:{
    
  },
  created(){
  },
}
</script>

<style scoped lang="scss">
  @import "../../css/overload-fonts.css";
  @import "../../css/dsfr.min.css";

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