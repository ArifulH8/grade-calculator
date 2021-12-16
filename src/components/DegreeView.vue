<template>
  <div v-if="degree.getModules().length == 0">
    <p>No Modules Yet!</p>
  </div>
  <div v-else>
    <p>Show Modules</p>
  </div>
  <div class="buttons">
    <button @click="addNewModule">Add New Module</button>
  </div>
  <div v-if="showModuleCreate">
    <ModuleCreate @moduleCreated="addModule(module)" />
  </div>
</template>

<script>
import ModuleCreate from "./ModuleCreate.vue";

export default {
  components: { ModuleCreate },
  name: "Degree",
  props: ["degree"],
  data() {
    return {
      showModuleCreate: false,
    };
  },
  methods: {
    addNewModule() {
      this.showModuleCreate = true;
    },
    addModule(module) {
      this.degree.addModule(module);
      this.showModuleCreate = false;
      console.log("Got a new module");
    },
  },
};
</script>

<style>
h1 {
  color: #42b983;
}

.buttons button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
}
.buttons button:hover {
  background-color: white; /* Green */
  color: #4CAF50;
  border: 2px solid #4CAF50;
}
</style>
