<template>
  <div v-if="module.getAssignment().length == 0">
    <p>No Assignments Yet!</p>
  </div>
  <div v-else>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Weight</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(assignment, index) in module.getAssignment()"
          :key="index"
          class="table-header"
        >
          <td>{{ assignment.getName() }}</td>
          <td>{{ assignment.getGrade() }}</td>
          <td>{{ assignment.getWeight() }}</td>
          <td>{{ assignment.calcScore() }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="buttons">
    <button @click="addNewAssignment">Add New Assignment</button>
  </div>
  <div class="buttons">
    <button @click="degreeView">View Module List</button>
  </div>
  <div v-if="showAssignmentCreate">
    <AssignmentCreate @assignmentCreated="addAssignment" />
  </div>
</template>

<script>
import AssignmentCreate from "./AssignmentCreate.vue";
export default {
  components: { AssignmentCreate },
  name: "Module",
  emits: ["degreeView"],
  props: ["module"],
  data() {
    return {
      showAssignmentCreate: false,
    };
  },
  methods: {
    addNewAssignment() {
      this.showAssignmentCreate = true;
    },
    addAssignment(assignment) {
      this.module.addAssignment(assignment);
      this.showAssignmentCreate = false;
      console.log(this.module.getAssignment())
    },
    degreeView(){
      this.$emit("degreeView");
    },
  },
};
</script>

<style></style>
