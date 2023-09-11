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
    <div className="flex  lg:w-full xl:flex  flex-col self-stretch">
      <main className=" sm:px-8 md:px-8 lg:px-8 w-fit ">
        <div className="flex  px-8 flex-col items-start gap-12">
          <Link className="pb-3" href="/about">
            About
          </Link>
        </div>
        <FeaturedPosts data={posts} />
      </main>
    </div>
  );
}
