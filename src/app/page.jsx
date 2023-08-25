import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FeaturedPosts from "@/components/ui/FeaturedPosts";
import { fetchGraphQL } from "@/lib/graphql-utils";
import Link from "next/link";

// export const dynamic = "force-dynamic";

async function getProjects() {
  const query = `
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

  const data = await fetchGraphQL(query);
  return data;
}

async function getPosts() {
  const query = `
  query Posts {
    posts {
      createdAt
      content {
        text
      }
      title
      publishedAt
      updatedAt
      createdBy {
        name
      }
      id
    }
  }
`;

  const data = await fetchGraphQL(query, { next: { tags: ["posts"] } });
  return data;
}

export default async function Home() {
  const { heroes } = await getProjects();
  const { posts } = await getPosts();

  return (
    <div>
      <Link href="/about">About</Link>
      <div>MagicJourney Labs</div>
      <FeaturedPosts data={posts} />
      <div>{heroes[0].heroText}</div>
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
