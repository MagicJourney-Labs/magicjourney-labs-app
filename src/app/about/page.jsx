import Link from "next/link";
import React from "react";
import { fetchGraphQL } from '@/lib/graphql-utils';

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
        <div>{about.title}</div>
        <p>{about.content.text}</p>
      </div>
    </>
  );
};

export default About;
