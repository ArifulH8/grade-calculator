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
          <th>Edit</th>
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
          <td>
            <button class="viewMore" @click="showAssignment(index)">
              Edit
            </button>
          </td>
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
  <div v-if="showEditAssignment">
    <AssignmentEdit
      :assignmentEdit="assignmentEdit"
      @assignmentEdited="editAssignment"
    />
  </div>
</template>

<script>
import AssignmentCreate from "./AssignmentCreate.vue";
import AssignmentEdit from "./AssignmentEdit.vue";

export default {
  components: { AssignmentCreate, AssignmentEdit },
  name: "Module",
  emits: ["degreeView"],
  props: ["module"],
  data() {
    return {
      showAssignmentCreate: false,
      showEditAssignment: false,
      assignmentEdit: null,
      index: null,
    };
  },
  methods: {
    addNewAssignment() {
      this.showAssignmentCreate = true;
      this.showEditAssignment = false;
    },
    addAssignment(assignment) {
      this.module.addAssignment(assignment);
      this.showAssignmentCreate = false;
      this.module.getAssignment();
    },
    degreeView() {
      this.$emit("degreeView");
    },
    showAssignment(index) {
      this.showAssignmentCreate = false;
      this.showEditAssignment = true;
      this.index = index;
      this.assignmentEdit = this.module.getAssignment()[index];
    },
    editAssignment(assignment) {
      this.showEditAssignment = false;
      this.module.getAssignment()[this.index] = assignment;
    },
  },
};
</script>

<style></style>
