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
  <button @click="editModule" class="viewMore">Edit Module</button>
</template>

<script>
import Module from "../js/Module";

export default {
  name: "ModuleEdit",
  emits: ["moduleEdited"],
  props: ["moduleEdit"],
  data() {
    return {
      moduleName: this.moduleEdit.getName(),
      moduleId: this.moduleEdit.getId(),
      moduleCredits: this.moduleEdit.getCredits(),
      error: "",
    };
  },
  methods: {
    editModule() {
      let editModule = new Module(
        this.moduleName,
        this.moduleId,
        this.moduleCredits
      );

      this.moduleName = "";
      this.moduleId = "";
      this.moduleCredits = "";

      this.$emit("moduleEdited", editModule);
    },
  },
};
</script>

<style>
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
