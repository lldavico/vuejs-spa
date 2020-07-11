<template>
  <div>
    <h1>Articles</h1>
    <h4>{{ articleLabel }}</h4>
    <div v-bind:key="art.articleId" v-for="art in data">
      <router-link :to="{ path: `/articles/${art.articleId}` }">
        <article-obj v-bind="art" normalView="false"></article-obj>
      </router-link>
    </div>
    <div>
      <router-link to="/">Go back</router-link>
    </div>
  </div>
</template>

<script>
import Article from "./Article";

export default {
  name: "articles",
  components: {
    "article-obj": Article
  },
  props: ["articles"],
  data() {
    return {
      articleLabel: "These are my articles",
      // Hacer llamada con axios para obtener todos los articulos
      data: [
        {
          articleId: 1
        },
        {
          articleId: 2
        }
      ]
    };
  }
};
</script>

<style scoped>
h5 {
  color: brown;
}
</style>