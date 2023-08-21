import graphQLClient from '@/lib/graphql-client';
import { gql } from 'graphql-request';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

async function getProjects() {
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

  const data = await graphQLClient.request(query);
  return data;
}



export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      {" "}
      <div>MagicJourney Labs</div>
      <div>{projects.heroes[0].heroText}</div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It&rsquo;s animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
