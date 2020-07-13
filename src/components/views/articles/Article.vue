<template>
  <div>
    <h2>Id: {{ articleId }}</h2>
    <h2>Titulo: {{ title }}</h2>
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
    const path = `articles/${this.articleId}`;
    axios
      .get(`http://localhost:8000/${path}`)
      .then(response => {
        this.title = response.data;
      })
      .catch(
        err =>
          // Redirigir a pagina con http request error
          (window.location.href = "/")
      );
  }
};
</script>