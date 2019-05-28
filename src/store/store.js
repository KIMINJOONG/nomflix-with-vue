import Vue from 'vue'
import Vuex from "vuex"
import {mutations} from "./mutations";
import {actions} from "./actions";

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
  mutations: mutations,
  actions: actions
})
