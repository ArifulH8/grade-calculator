<template>
  <p>Assignment Create</p>
  <label>Assignment Name:</label>
  <input
    v-model.trim="assignmentName"
    placeholder="Input Assignment Name"
  /><br />
  <label>Assignment Grade:</label>
  <input
    v-model.number="assignmentGrade"
    placeholder="Input Assignment Grade"
  /><br />
  <label>Assignment Weight:</label>
  <input
    v-model.number="assignmentWeight"
    placeholder="Input Assignment Weight"
  /><br />
  <button @click="addAssignment" class="viewMore">Add Assignment</button>
  <p>{{ error }}</p>
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
      error: "",
    };
  },
  methods: {
    addAssignment() {
      try {
        if (
          this.assignmentName == "" ||
          this.assignmentGrade == "" ||
          this.assignmentWeight == ""
        ) {
          throw "Assignment Name and Assignment Grade and Assignment Weight cannot be empty";
        } else if (
          typeof this.assignmentGrade === "string" ||
          typeof this.assignmentWeight === "string"
        ) {
          throw "Assignment Grade and Assignment Weight has to be a number!";
        } else if (this.assignmentGrade < 0 || this.assignmentGrade > 100) {
          throw "Assignment Grade has to be between 0 and 100";
        } else if (this.assignmentWeight < 0 || this.assignmentWeight >= 100) {
          throw "Assignment Weight has to be between 0 and 100";
        } else {
          let newAssignment = new Assignment(
            this.assignmentName,
            this.assignmentGrade,
            this.assignmentWeight
          );
          this.assignmentName = "";
          this.assignmentGrade = "";
          this.assignmentWeight = "";

          this.$emit("assignmentCreated", newAssignment);
        }
      } catch (err) {
        this.error = err;
      }
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
