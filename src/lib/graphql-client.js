import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.ENDPOINT;

const graphQLClient = new GraphQLClient(API_URL);

export default graphQLClient;