import Link from "next/link";
import React from "react";
import { fetchGraphQL } from '@/lib/graphql-utils';

async function getAbout() {
  const query = `
  query About {
    abouts {
      content {
        text
      }
      title
      id
    }
  }
  
  `;

  const data = await fetchGraphQL(query);
  return data;
}

const About = async () => {
  const { abouts } = await getAbout();
  return (
    <>
    <Link href="/">Home</Link>
      {abouts.map(about => (
        <div key={(about.id)}>
        <div>{about.title}</div>
        <p>{about.content.text}</p>
        </div>
      ))}
    </>
  );
};

export default About;
