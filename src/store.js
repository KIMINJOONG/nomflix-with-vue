import Vue from 'vue'
import Vuex from 'vuex'
import {moviesApi} from "./api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  },
  mutations: {
    getMovie(state, payload){
      state.nowPlaying = payload.nowPlaying;
      state.upcoming = payload.upcoming;
      state.popular = payload.popular;
    }
  },
  actions: {
    async getMovie({commit}) {
      let movies = null;
      let nowPlaying, upcoming, popular;
      try{
        ({
          data: {results : nowPlaying}
        } = await moviesApi.nowPlaying());

        ({
          data: {results : upcoming}
        } = await moviesApi.upcoming());

        ({
          data: {results : popular}
        } = await moviesApi.popular());
      }catch(e){
        console.log(e);
      }
      movies = {
        nowPlaying,
        upcoming,
        popular
      }
      commit("getMovie", movies);
    }
  }
})
