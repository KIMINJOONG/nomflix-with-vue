<template>
  <div class="home">
      <div class="Container">
        <span class="Title"></span>
        <div class="Grid">
          <Poster
            v-for="(now, index) in nowPlaying"
            v-bind:key="index"
            :title="now.title"
            :rating="now.vote_average"
            :year="now.year"
            :isMovie="true"
            :imageUrl="now.poster_path"
          />
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Poster from "../components/Poster";
export default {
  components: {
    Poster
  },
  data: () => ({
    title : "영화 목록",
  }),
  computed:{
    ...mapState(["nowPlaying", "upcoming", "popular"])
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
