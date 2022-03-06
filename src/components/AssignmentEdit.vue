<template>
  <p>{{ assignmentEdit }}</p>

  <p>Assignment Edit</p>
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
  <button @click="editAssignment" class="viewMore">Edit Assignment</button>
  <p>{{ error }}</p>
</template>

<script>
import Assignment from "../js/Assignment";

export default {
  name: "AssignmentEdit",
  emits: ["assignmentEdited"],
  props: ["assignmentEdit"],
  data() {
    return {
      assignmentName: this.assignmentEdit.getName(),
      assignmentGrade: this.assignmentEdit.getGrade(),
      assignmentWeight: this.assignmentEdit.calcScore(),
      error: "",
    };
  },
  methods: {
    editAssignment() {
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
          let editAssignment = new Assignment(
            this.assignmentName,
            this.assignmentGrade,
            this.assignmentWeight
          );
          this.assignmentName = "";
          this.assignmentGrade = "";
          this.assignmentWeight = "";

          this.$emit("assignmentEdited", editAssignment);
        }
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>

<style></style>
