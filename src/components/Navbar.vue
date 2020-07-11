<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/articles">Articles</router-link>
      </li>
      <li>
        <a href="/">News</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.nav {
  position: relative;
  margin: -10px;
  background: lightskyblue;
  width: 100%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 25px 30px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(167, 218, 250);
}
</style>