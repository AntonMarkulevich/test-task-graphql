<template>
  <div id="app">
    <div>
      <input class="search-input"
             type="text"
             v-model="searchTerm">
      <dropdown :options="filteredOptions"
              :selected="object" 
              @updateOption="methodToRunOnSelect" 
              :placeholder="'Select an Item'"/>
    </div>
    <div class="main-section__wrapper">
      <issues-list />
      <comments-list />
    </div>
  </div>
</template>

<script>
import Dropdown from './components/Dropdown.vue'
import IssuesList from '@/components/issues_components/IssuesList.vue'
import CommentsList from '@/components/comments_components/CommentsList.vue'
import {Sample, getIssues, getComments}  from './queries/Sample'
import { mapMutations} from 'vuex'


export default {
  name: 'App',
  components: {
    Dropdown,
    IssuesList,
    CommentsList
  },
  data() {
    return {
      object: {},
      searchTerm: ''
    }
  },
  apollo: {
    user: Sample,
    repository: {
      query: getIssues,
      variables: {
        name: this?.object.node.name
      },
      skip() {
        return !this?.object?.node?.name;
      },
      fetchPolicy: 'no-cache'
    },
    comments: {
      query: getComments,
      variables: {
        name: this?.object.node.name,
        id: this?.$store.state.currentIssue
      },
      update({repository}) {
        return repository;
      },
      skip() {
        return !this?.$store.state.currentIssue;
      },
      fetchPolicy: 'no-cache'
    }
  },
  computed: {
    filteredOptions() {
      return this.$store.state.repositories.filter(item => item.node.name.includes(this.searchTerm))
    },
    currentIssue() {
      return this.$store.state.currentIssue;
    }
  },
  methods: {
    ...mapMutations(['setCurrentRep', 'setIssues', 'setComments']),
    methodToRunOnSelect(payload) {
      this.object = payload;
      this.setCurrentRep(payload);
      this.setComments([]);
    }
  },
  watch: {
    user() {
      if (this.user?.repositories.edges.length) this.$store.commit('setRepositories', this.user.repositories.edges);
    },
    object: {
      handler() {
        this.$apollo.queries.repository.setVariables({
          name: this.object.node.name
        })
      },
      deep: true
    },
    currentIssue: {
      handler() {
        this.$apollo.queries.comments.setVariables({
          name: this.object.node.name,
          id: this.currentIssue.number
        })
      },
      deep: true
    },
    comments() {
      this.setComments(this.comments.issue.comments.edges);
    },
    repository() {
      if (this.repository?.issues.nodes.length) {
        this.setIssues(this.repository?.issues.nodes);
      };
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.search-input {
  border-radius: 10px;
  margin-right: 10px;
}
.main-section__wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
