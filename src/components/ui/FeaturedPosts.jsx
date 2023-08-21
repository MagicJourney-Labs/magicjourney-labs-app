import graphQLClient from '@/lib/graphql-client';
import { gql } from 'graphql-request';

async function getPosts() {
  const query = gql`
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

  const data = await graphQLClient.request(query);
  return data;
}

const FeaturedPosts = async () => {
  const { posts } = await getPosts();
  return (
    <>
      {posts.map(post => {
        return <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.text}</p>
        </div>
      })}
    </>
  )
}
export default FeaturedPosts