<template>
  <div class="login">
    <div id="email">
      <input v-model="email" @change="updateEmail" type="email" placeholder="user@example.com" />
    </div>
    <div id="password">
      <input v-model="password" @change="updatePassword" type="password" placeholder="password" />
    </div>
    <button @click="submitCredentials">Login</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitCredentials: () => {
      axios
        .get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          window.location.href = "articles";
        })
        .catch(e => alert(`Error ${e}`));
    },
    updateEmail: event => {
      this.email = event.target.value;
    },
    updatePassword: event => {
      this.password = event.target.value;
    }
  }
};
</script>