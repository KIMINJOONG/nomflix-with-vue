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
      state.nowPlaying = payload
    }
  },
  actions: {
    async getMovie({commit}) {
      let nowPlaying;
      try{
        ({
          data: {results : nowPlaying}
        } = await moviesApi.nowPlaying());
      }catch(e){
        console.log(e);
      }
      commit("getMovie", nowPlaying);
    }
  }
})
