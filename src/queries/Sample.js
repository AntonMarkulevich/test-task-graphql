import gql from 'graphql-tag'

export const Sample = gql`query {
    user(login: "octocat") {
      id,
      repositories(first: 100) {
        edges {
          node {
            name,
            id
        }
      }
    }
  }
}`

export const getIssues = gql`query ($name: String!) { 
  repository(owner: "Octocat", name: $name) {
    issues(first:100) {
      nodes {
        number,
        title,
        body,
        state
      }
    }
  }
}`

export const getComments = gql`query ($name: String!, $id: Int!) { 
  repository(owner: "octocat", name: $name) {
    issue(number: $id) {
   comments(first:100) {
     edges {
       node {
         bodyText,
            createdAt
       }
     }
   }
    }
  }
}`