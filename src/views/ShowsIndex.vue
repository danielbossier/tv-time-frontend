<template>
  <div class="shows-index">
    <h1>All Shows</h1>
    <div v-for="show in shows" v-bind:key="show.id">
      <router-link v-bind:to="`/shows/${show.id}`">
        <h2>{{ show.title }}</h2>
        <img v-bind:src="show.image" v-bind:alt="show.title" />
        <p>Year: {{ show.year }}</p>
        <p>Description: {{ show.description }}</p>
        <p>Creator: {{ show.creator }}</p>
        <p>Seasons: {{ show.seasons }}</p>
        <p>Network: {{ show.network }}</p>
        <p>Favorite: {{ show.favorite }}</p>
        <p>User_id: {{ show.user_id }}</p>
      </router-link>
    </div>
  </div>
</template>

<style>
img {
  height: 100%;
  max-height: 400px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      shows: [],
    };
  },
  created: function () {
    this.indexShows();
  },
  methods: {
    indexShows: function () {
      axios.get("/shows").then((response) => {
        console.log("shows index", response);
        this.shows = response.data;
      });
    },
  },
};
</script>
