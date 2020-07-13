<template>
  <div>
    <div id="article-title">
      <h2>Articles</h2>
    </div>
    <div id="article-description">
      <h3>{{ articleLabel }}</h3>
    </div>
    <div class="container">
      <div v-bind:key="art.id" v-for="art in data">
        <router-link :to="{ path: `/articles/${art.id}` }" style="text-decoration: none">
          <card v-bind:name="art.name" v-bind:category="art.category" v-bind:price="art.price"></card>
        </router-link>
      </div>
    </div>
    <div>
      <router-link to="/">Go back</router-link>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import axios from "axios";

export default {
  name: "articles",
  components: {
    card: Card
  },
  props: ["articles"],
  mounted() {
    const path = "articles";
    axios
      .get(`http://localhost:8000/${path}`)
      .then(response => {
        console.log(response.data);
        this.data = response.data;
      })
      .catch(
        err =>
          // Redirigir a pagina con http request error
          (window.location.href = "/")
      );
  },
  data() {
    return {
      articleLabel: "These are my articles",
      status: "loading",
      // Hacer llamada con axios para obtener todos los articulos
      data: []
    };
  }
};
</script>

<style scoped>
.container {
  position: relative;
  display: inline-block;
  width: 88%;
  left: 10%;
  margin: 2px auto;
}

#article-title {
  position: relative;
  text-align: center;
  margin: 0 auto;
}

#article-description {
  position: relative;
  text-align: center;
  margin: 0 auto;
}
</style>