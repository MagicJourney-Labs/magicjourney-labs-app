import FeaturedPosts from "@/components/ui/FeaturedPosts";
import { fetchGraphQL } from "@/lib/graphql-utils";
import Link from "next/link";

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
    </div>
  );
}
