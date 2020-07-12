<template>
  <div>
    <div id="article-title">
      <h2>Articles</h2>
    </div>
    <div id="article-description">
      <h3>{{ articleLabel }}</h3>
    </div>
    <div class="container">
      <div v-bind:key="art.articleId" v-for="art in data">
        <router-link :to="{ path: `/articles/${art.articleId}` }" style="text-decoration: none">
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

export default {
  name: "articles",
  components: {
    card: Card
  },
  props: ["articles"],
  data() {
    return {
      articleLabel: "These are my articles",
      // Hacer llamada con axios para obtener todos los articulos
      data: [
        {
          articleId: 1,
          name: "papel",
          category: "utiles",
          price: "2000"
        },
        {
          articleId: 2,
          name: "libreta",
          category: "materiales",
          price: "4000"
        },
        {
          articleId: 3,
          name: "libreta",
          category: "materiales",
          price: "4000"
        },
        {
          articleId: 4,
          name: "libreta",
          category: "materiales",
          price: "4000"
        },
        {
          articleId: 5,
          name: "libreta",
          category: "materiales",
          price: "4000"
        }
      ]
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