import Vue from 'vue'
import Vuex from 'vuex'
import {moviesApi, tvApi} from "./api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
    topRated: null,
    airingToday: null
  },
  mutations: {
    getMovie(state, payload){
      state.nowPlaying = payload.nowPlaying;
      state.upcoming = payload.upcoming;
      state.popular = payload.popular;
    },
    getTv(state, payload){
      state.topRated = payload.topRated;
      state.popular = payload.popular;
      state.airingToday = payload.airingToday;
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
    },
    async getTv({commit}) {
      let tvs = null;
      let topRated, popular, airingToday;
      try{
        ({
          data: {results: topRated}
        } = await tvApi.topRated());
        ({
          data: {results: popular}
        } = await tvApi.popular());

        ({
          data: {results: airingToday}
        } = await tvApi.airingToday());
      }catch(e){
        console.log(e);
      }
      tvs = {
        topRated,
        popular,
        airingToday
      }
      commit("getTv", tvs);
    }
  }
})
