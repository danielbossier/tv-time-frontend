<template>
  <div class="shows-show">
    <h2>{{ show.title }}</h2>
    <img v-bind:src="show.image" v-bind:alt="show.title" />
    <p>Year: {{ show.year }}</p>
    <p>Description: {{ show.description }}</p>
    <p>Creator: {{ show.creator }}</p>
    <p>Network: {{ show.network }}</p>
    <p>Seasons: {{ show.seasons }}</p>
    <p>Favorite: {{ show.favorite }}</p>
    <p>User_id: {{ show.user_id }}</p>
    <router-link v-bind:to="`/shows/${show.id}/edit`">Edit show</router-link>
    <br />
    <router-link to="/shows">Back to all shows</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      show: {},
    };
  },
  created: function () {
    axios.get("/shows/" + this.$route.params.id).then((response) => {
      console.log("shows show", response);
      this.show = response.data;
    });
  },
  methods: {},
};
</script>
