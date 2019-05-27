<template>
  <div class="home">

    <h1>{{home}}</h1>
    <p>{{nowPlaying}}</p>
    <p>{{upcoming}}</p>
    <p>{{popular}}</p>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'home',
  data: () => ({
    home : "Hello home"
  }),
  computed:{
    ...mapState(["nowPlaying", "upcoming", "popular"])
  },
  mounted() {
    this.$store.dispatch("getMovie")
  }
}
</script>
