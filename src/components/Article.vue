<template>
  <div>
    <div v-if="normalView">
      <h2>Id: {{ articleId }}</h2>
      <h2>Titulo: {{ title }}</h2>
    </div>

    <div v-else>
      <h2>Id: {{ articleId }}</h2>
      <h2>Titulo: {{ title }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "article",
  props: ["articleId", "normalView"],
  data() {
    return {
      title: "",
      error: ""
    };
  },
  // usar axios para obtener el articulo de id articleId
  mounted() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`).then(response => {
      this.title = response.data[this.articleId];
    });
  }
};
</script>