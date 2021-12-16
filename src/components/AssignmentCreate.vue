<template>
  <p>Assignment Create</p>
  <label>Assignment Name:</label>
  <input
    v-model.trim="assignmentName"
    placeholder="Input Assignment Name"
  /><br />
  <label>Assignment Grade:</label>
  <input v-model.number="assignmentGrade" placeholder="Assignment Grade" /><br />
  <label>Assignment Weight:</label>
  <input
    v-model.number="assignmentWeight"
    placeholder="Input Assignment Weight"
  /><br />
  <button @click="addAssignment">Add Assignment</button>
</template>

<script>
import Assignment from "../js/Assignment";
export default {
  name: "AssignmentCreate",
  emits: ["assignmentCreated"],
  data() {
    return {
      assignmentName: "",
      assignmentGrade: "",
      assignmentWeight: "",
    };
  },
  methods: {
    addAssignment() {
      let newAssignment = new Assignment(
        this.assignmentName,
        parseInt(this.assignmentGrade),
        parseInt(this.assignmentWeight)
      );

      this.assignmentName = "";
      this.assignmentGrade = "";
      this.assignmentWeight = "";

      this.$emit("assignmentCreated", newAssignment);
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
