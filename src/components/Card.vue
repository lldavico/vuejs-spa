<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <h3>{{ category }}</h3>
    <h3>{{ price }}</h3>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["name", "category", "price"]
};
</script>

<style scoped>
.card {
  position: relative;
  float: left;
  border: 2px solid black;
  margin: 15px;
  width: 20%;
  height: 300px;
}
</style>