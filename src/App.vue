<template>
  <div id="app">
    <navbar />
    <router-view style="min-height: 550px" />
    <info />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";
import Info from "./components/layout/Info";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    info: Info
  },
  data() {
    return {
      logged: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
