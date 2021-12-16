<template>
  <div v-if="module.getAssignment().length == 0">
    <p>No Assignments Yet!</p>
  </div>
</template>

<script>
export default {
  name: "Module",
  props: ["module"],
};
</script>

<style></style>
