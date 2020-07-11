<template>
  <div>
    <h1>Home</h1>
    <h2>{{ welcomeMsg }}</h2>
    <div>
      <router-link to="/articles">
        <h4>Articles</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { welcomeMsg: "Bienvenidos a tienda Leufú!" };
  }
};
</script>

<style scoped>
h4 {
  color: brown;
}
</style>



