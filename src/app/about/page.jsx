import React from "react";
import { fetchGraphQL } from '@/lib/graphql-utils';
import { mainAbout } from "@/queries/about";

const About = async () => {
  const { about } = await fetchGraphQL(mainAbout);
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
