<template>
  <h1>Degree Calculator</h1>
  <p>Degree Name: {{ degree.getName() }}</p>
</template>

<script>
import Degree from "../js/Degree";
export default {
  name: "Degree",
  data() {
    return {
      degree: new Degree("Computer Science"),
    };
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
