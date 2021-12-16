<template>
  <div v-if="degree.getModules().length == 0">
    <p>No Modules Yet!</p>
  </div>
  <div v-else>
    <p>Show Modules</p>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Credits</th>
          <th>Grade</th>
          <th>View More</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(module, index) in degree.getModules()"
          :key="index"
          class="table-header"
        >
          <td>{{ module.getId() }}</td>
          <td>{{ module.getName() }}</td>
          <td>{{ module.getCredits() }}</td>
          <td>{{ module.calcScore() }}%</td>
          <td><button>View More</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="buttons">
    <button @click="addNewModule">Add New Module</button>
  </div>
  <div v-if="showModuleCreate">
    <ModuleCreate @moduleCreated="addModule" />
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
    },
  },
};
</script>

<style>
h1 {
  color: #42b983;
}

.table {
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  padding: 10px;
  margin-bottom: 30px;
  border-collapse: collapse;
}

th,
td {
  border: 2px solid rgb(54, 91, 92);
}

.buttons button {
  background-color: #4caf50; /* Green */
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
  color: #4caf50;
  border: 2px solid #4caf50;
}
</style>
