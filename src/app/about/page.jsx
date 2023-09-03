import React from 'react';
import { fetchGraphQL } from '@/lib/graphqlUtils';

async function getAbout() {
  const query = `
  query About {
    about(where: {id: "cllvcbw9i1xj30bmlgvgcn5tg"}) {
      content {
        text
      }
      title
    }
  }
  `;

  const data = await fetchGraphQL(query);
  return data;
}

const About = async () => {
  const { about } = await getAbout();
  return (
    <>
      <div>
        <h2>{about.title}</h2>
        <p>{about.content.text}</p>
      </div>
    </>
  );
};

export default About;
