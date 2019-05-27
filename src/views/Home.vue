<template>
  <div class="home">

    <h1 @click="getMovie">{{home}}</h1>
    <p>{{nowPlaying}}</p>
    <p>{{upcoming}}</p>
    <p>{{popular}}</p>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
  name: 'home',
  data: () => ({
    home : "Hello home"
  }),
  computed:{
    ...mapState(["nowPlaying", "upcoming", "popular"])
  },
  methods:{
    ...mapActions(["getMovie"])
  },
  created() {

  }
}
</script>
