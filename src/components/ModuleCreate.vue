<template>
  <p>Module Create</p>
  <label>Module Name:</label>
  <input v-model.trim="moduleName" placeholder="Input Module Name" /><br />
  <label>Module ID:</label>
  <input v-model.trim="moduleId" placeholder="Input Module ID" /><br />
  <label>Module Credits:</label>
  <input
    v-model.trim="moduleCredits"
    placeholder="Input Module Credits"
  /><br />
  <button @click="addModule" class="viewMore">Add Module</button>
</template>

<script>
import Module from "../js/Module";
export default {
  name: "ModuleCreate",
  emits: ["moduleCreated"],
  data() {
    return {
      moduleName: "",
      moduleId: "",
      moduleCredits: "",
    };
  },
  methods: {
    addModule() {
      let newModule = new Module(
        this.moduleName,
        this.moduleId,
        this.moduleCredits
      );

      this.moduleName = "";
      this.moduleId = "";
      this.moduleCredits = "";

      this.$emit("moduleCreated", newModule);
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

.viewMore {
  border: none;
  color: #4caf50;
  padding: 5px 10px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  border: 1px solid white;
}

.viewMore:hover {
  background-color: white; /* Green */
  color: #4caf50;
  border: 1px solid #4caf50;
}
</style>
