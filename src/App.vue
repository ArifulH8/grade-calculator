<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Grade Calculator</h1>
  <p>Degree Name: {{ degree.getName() }}</p>
  <p>Degree Classification: {{ degree.getStatus() }}</p>
  <p>Degree Percentage: {{ degree.calcScore() }}%</p>
  <div v-if="showDegree">
    <DegreeView :degree="degree" @moduleView="moduleView"/>
  </div>
  <div v-if="showModule">
    <ModuleView :module="currentModule" />
  </div>
</template>

<script>
import DegreeView from "./components/DegreeView.vue";
import ModuleView from './components/ModuleView.vue';
import Degree from "./js/Degree";

export default {
  name: "App",
  components: {
    DegreeView,
    ModuleView,
  },
  data() {
    return {
      degree: new Degree("Computer Science"),
      showDegree: true,
      showModule: false,
      currentModule: null,
    };
  },
  methods: {
    moduleView(index){
      this.currentModule = this.degree.getModules()[index];
      this.showDegree = false;
      this.showModule = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  max-width: 100px;
  max-height: 100px;
}
</style>
