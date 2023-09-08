import FeaturedPosts from "@/components/ui/FeaturedPosts";
import { fetchGraphQL } from "@/lib/graphql-utils";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from 'next/image';


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

async function getHomePage() {
  const query = `
  query HomePage {
    homePage(where: {id: "clm57jgdgo5l70bmm9tjrmhu3"}) {
      buttons {
        name
        page {
          slug
        }
        id
      }
      title
      paragraphs {
        html
      }
      imageUrl {
        url
      }
      pictureAlt
    }
  }
  `;

  const data = await fetchGraphQL(query);
  return data;
}

export default async function Home() {
  const { heroes } = await getProjects();
  const { posts } = await getPosts();
  const { homePage } = await getHomePage();
  
  function paragraphStr(data) {
    const htmlStr = data.map(item => {
    const originalHtml = item.html;
    const modifiedHtml = originalHtml.slice(0, 2) + ' class="mt-6"' + originalHtml.slice(2);

    return modifiedHtml;
  });

  const combinedStr = htmlStr.join(' ');

  return combinedStr;
  }

  const paragraphs = paragraphStr(homePage.paragraphs);
  const paragraphsElement = { __html: `${paragraphs}`};

  return (
    <div>
      
    <div className="overflow-hidden bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{homePage.title}</h1>
              <div dangerouslySetInnerHTML={paragraphsElement} className="mt-6 text-lg leading-8 text-gray-600"/>
              <div className="flex xl:gap-10 md:gap-8 sm:gap-4 gap-2 items-center justify-center py-6">
                {homePage.buttons.map(button => (
                  <Link key={button.id} href={`${button.page ? button.page.slug : "#"}`} className="text-sm font-semibold leading-6 text-gray-900">
                    <Button>{button.name}</Button>
                  </Link>  
                ))}
              </div>
            </div>
          </div>
          <div className="grid justify-self-center self-center">
          <Image
            src={`${homePage.imageUrl.url}`}
            alt={homePage.pictureAlt}
            className="w-[30rem] max-w-none rounded-xl ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
            width={2200}
            height={1400}
          />
          </div>
        </div>
      </div>
    </div>


      <Link href="/about">About</Link>
      <div>MagicJourney Labs</div>
      <FeaturedPosts data={posts} />
      <div>{heroes[0].heroText}</div>
    </div>
  );
}
