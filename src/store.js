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
    loading: false,
    topRated: null,
    airingToday: null,
    results: null,
    tvResults: null,
    result: null,
    isMovie: true
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
    },
    searchByTerm(state, payload){
      state.results = payload.movieResults;
      state.tvResults = payload.tvResults;
      state.loading = true;
    },
    getDetail(state, payload){
      state.result = payload;
      state.isMovie = payload.isMovie
      state.loading = true;
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
    },
    async searchByTerm ({commit}, searchTerm){
      let movieResults, tvResults;
      try{
        ({
          data: {results : movieResults}
        } = await moviesApi.search(searchTerm));

        ({
          data: {results : tvResults}
        } = await tvApi.search(searchTerm));
      }catch (e) {
        console.log(e);
      }
      let results = null;
      results = {
        movieResults,
        tvResults
      }
      commit("searchByTerm", results);
    },
    async getDetail ({commit}, data){
      let result = null;
      try{
        if(data.isMovie){
          ({data: result} = await moviesApi.movieDetail(data.id));
        }else {
          ({data: result} = await  tvApi.showDetail(data.id));
        }
      }catch (e) {
        console.log(e);
      }finally {
        result = {
          ...result, isMovie : data.isMovie
        }
        console.log(result);
        commit("getDetail", result);
      }
    }
  }
})
