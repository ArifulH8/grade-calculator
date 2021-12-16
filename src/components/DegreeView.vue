<template>
  <div v-if="degree.getModules.length == 0">
    <p>No Modules Yet!</p>
  </div>
  <div v-else >
    <p>Show Modules</p>
  </div>
</template>

<script>
export default {
  name: "Degree",
  props: ["degree"],
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
