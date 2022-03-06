<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Grade Calculator</h1>
  <p>Degree Name: {{ degree.getName() }}</p>
  <p>Degree Classification: {{ classification }}</p>
  <p>Degree Percentage: {{ score }}%</p>

  <button class="viewMore" @click="jsonDegreeD">Download</button>

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
    jsonDegreeD() {
      let json = JSON.stringify(this.degree);
      let formattedDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      let filename = `degree ${formattedDate}.json`;

      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:application/json;charset=utf-8," + encodeURIComponent(json)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
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
