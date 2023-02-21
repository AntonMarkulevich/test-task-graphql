import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false
Vue.use(VueApollo)
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'Bearer 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',
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

console.log(apolloProvider);
new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
