import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: "http://backend:8080/v1/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "secret",
  }
});

export default apolloClient;
