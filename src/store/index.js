import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repositories: [],
    currentRep: '',
    currentIssue: '',
    issues: [],
    comments: []
  },
  getters: {
  },
  mutations: {
    setRepositories(state, value) {
      state.repositories = value;
    },
    setCurrentRep(state, value) {
      state.currentRep = value;
    },
    setCurrentIssue(state, value) {
      state.currentIssue = value;
    },
    setIssues(state, value) {
      state.issues = value;
    },
    setComments(state, value) {
      state.comments = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
