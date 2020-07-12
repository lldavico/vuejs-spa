<template>
  <div id="nav">
    <ul>
      <li class="l-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="r-item">
        <a href="/">Buscar</a>
      </li>
      <li class="r-item">
        <a href="/">Carrito de compras</a>
      </li>
      <li class="r-item">
        <router-link to="/articles">Artículos</router-link>
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
#nav {
  position: sticky;
  top: 0;
  margin: 0;
  background-color: lightskyblue;
  z-index: 1;
  width: auto;
}

ul {
  list-style-type: none;
  margin: 0 10% 0 10%;
  padding: 0;
  overflow: hidden;
}

.l-item {
  float: left;
}

.r-item {
  float: right;
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