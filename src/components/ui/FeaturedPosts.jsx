import graphQLClient from '@/lib/graphql-client';
import { gql } from 'graphql-request';
import Post from './Post';

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
      {posts.map(post => (<Post key={post.id} data={post} />))}
    </>
  )
}
export default FeaturedPosts