import { ApolloClient, gql, InMemoryCache, useApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

client.query({
  query:gql`
  query characters(page:1) {
    results{
      id
      name
      status
      species
      gender
      image
    }
  }
  `
}).then((query)=>console.log({query}))
