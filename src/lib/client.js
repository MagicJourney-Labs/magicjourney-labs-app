import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.ENDPOINT,
    cache: new InMemoryCache(),
  });

  export default client



