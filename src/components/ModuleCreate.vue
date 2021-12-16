<template>
  <p>Module Create</p>
  <label>Module Name:</label>
  <input v-model="moduleName" placeholder="Input Module Name" /><br />
  <label>Module ID:</label>
  <input v-model="moduleId" placeholder="Input Module ID" /><br />
  <label>Module Credits:</label>
  <input v-model="moduleCredits" placeholder="Input Module Credits" /><br />
  <button @click="addModule">Add Module</button>
</template>

<script>
import Module from "../js/Module";
export default {
  name: "ModuleCreate",
  data() {
    return {
      moduleName: "",
      moduleId: "",
      moduleCredits: "",
    };
  },
  methods: {
    addModule() {
      let newModule = Module(
        this.moduleName,
        this.moduleId,
        this.moduleCredits
      );
      console.log(newModule);
    },
  },
};
</script>

<style scoped>
label,
input {
  padding: 10px 20px;
  margin: 5px;
}
</style>
