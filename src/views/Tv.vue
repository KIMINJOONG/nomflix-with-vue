<template>
  <div class="home" v-if="loading === true">
    <div class="Container">
      <span class="Title">topRated</span>
      <div class="Grid">
        <Poster
          v-for="(tv, index) in topRated"
          v-bind:key="index"
          :title="tv.name"
          :rating="tv.vote_average"
          :year="tv.first_air_date && tv.first_air_date.substring(0,4)"
          :isMovie="false"
          :imageUrl="tv.poster_path"
          :id="tv.id"
        />
      </div>
      <span class="Title">popular</span>
      <div class="Grid">
        <Poster
          v-for="(tv, index) in popular"
          v-bind:key="index"
          :title="tv.title"
          :rating="tv.vote_average"
          :year="tv.first_air_date && tv.first_air_date.substring(0,4)"
          :isMovie="false"
          :imageUrl="tv.poster_path"
          :id="tv.id"
        />
      </div>
      <span class="Title">airingToday</span>
      <div class="Grid">
        <Poster
          v-for="(tv, index) in airingToday"
          v-bind:key="index"
          :title="tv.title"
          :rating="tv.vote_average"
          :year="tv.first_air_date && tv.first_air_date.substring(0,4)"
          :isMovie="false"
          :imageUrl="tv.poster_path"
          :id="tv.id"
        />
      </div>
    </div>
  </div>
    <Loader v-else/>
</template>

<script>
import { mapState } from "vuex";
import Poster from "../components/Poster";
import Loader from "../components/Loader";
export default {
  components: {
    Poster,
      Loader
  },
  data: () => ({
    tv: "Hello Tv"
  }),
  computed: {
    ...mapState(["topRated", "popular", "airingToday", "loading"])
  },
  mounted() {
    this.$store.dispatch("getTv");
  }
};
</script>
<style scoped>
.Container {
  margin-bottom: 50px;
}
.Title {
  font-size: 14px;
  font-weight: 600;
}
.Grid {
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
}
</style>

