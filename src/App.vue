<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Grade Calculator</h1>
  <p>Degree Name: {{ degree.getName() }}</p>
  <p>Degree Classification: {{ classification }}</p>
  <p>Degree Percentage: {{ score }}%</p>
  <div v-if="showDegree">
    <DegreeView :degree="degree" @moduleView="moduleView" />
  </div>
  <div v-if="showModule">
    <ModuleView :module="currentModule" @degreeView="degreeView" />
  </div>
</template>

<script>
import DegreeView from "./components/DegreeView.vue";
import ModuleView from "./components/ModuleView.vue";
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
    moduleView(index) {
      this.currentModule = this.degree.getModules()[index];
      this.showDegree = false;
      this.showModule = true;
    },
    degreeView() {
      this.showModule = false;
      this.showDegree = true;
    },
  },
  computed: {
    score() {
      return this.degree.calcScore();
    },
    classification() {
      return this.degree.getStatus();
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
