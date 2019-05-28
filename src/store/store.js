import Vue from 'vue'
import Vuex from "vuex"
import {mutations} from "./mutations";
import {actions} from "./actions";
import {states} from "./states";

Vue.use(Vuex)

export default new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions
})
