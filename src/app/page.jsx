'use client'

import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const url = 'https://api-eu-west-2.hygraph.com/v2/clljx627l1rex01uf1rdedh2g/master';
const graphConnect = new GraphQLClient(url);

const query = gql`
  query Heroes {
    heroes {
      createdAt
      heroText
      id
      publishedAt
      updatedAt
    }
  }
`;

export default function Home() {
  const [heroes, setHeroes] = React.useState([]);

  React.useEffect(() => {
    async function fetchHeroes() {
      try {
        const data = await graphConnect.request(query);
        setHeroes(data.heroes);
      } catch (error) {
        console.error('Error fetching heroes:', error);
      }
    }

    fetchHeroes();
  }, []);

  return (
    <div>
      {heroes.length > 0 ? (
        <div>{heroes[0].heroText}</div>
      ) : (
        <div>No heroes available</div>
      )}
    </div>
  );
}
