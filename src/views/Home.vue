<template>
  <div class="home" v-if="loading === true">
      <div class="Container" >
        <span class="Title">nowplaying</span>
        <div class="Grid">
            <Poster
                v-for="(movie, index) in nowPlaying"
                v-bind:key="index"
                :title="movie.title"
                :rating="movie.vote_average"
                :year="movie.release_date && movie.release_date.substring(0,4)"
                :isMovie="true"
                :imageUrl="movie.poster_path"
                :id="movie.id"
            />
        </div>
          <span class="Title">upcoming</span>
          <div class="Grid">
              <Poster
                  v-for="(movie, index) in upcoming"
                  v-bind:key="index"
                  :title="movie.title"
                  :rating="movie.vote_average"
                  :year="movie.release_date && movie.release_date.substring(0,4)"
                  :isMovie="true"
                  :imageUrl="movie.poster_path"
                  :id="movie.id"
              />
          </div>
          <span class="Title">popular</span>
          <div class="Grid">
              <Poster
                  v-for="(movie, index) in popular"
                  v-bind:key="index"
                  :title="movie.title"
                  :rating="movie.vote_average"
                  :year="movie.release_date && movie.release_date.substring(0,4)"
                  :isMovie="true"
                  :imageUrl="movie.poster_path"
                  :id="movie.id"
              />
          </div>

      </div>

  </div>
    <Loader v-else />
</template>

<script>
import {mapState} from "vuex";
import Poster from "../components/Poster";
import Loader from "../components/Loader";
export default {
  components: {
    Poster,
      Loader
  },
  data: () => ({
    title : "영화 목록",
  }),
  computed:{
    ...mapState(["nowPlaying", "upcoming", "popular", "loading"])
  },
  mounted() {
    this.$store.dispatch("getMovie")
  }
}
</script>
<style scoped>
  .Container{
    margin-bottom: 50px;
  }
  .Title{
    font-size: 14px;
    font-weight: 600;
  }
  .Grid{
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
  }
</style>
