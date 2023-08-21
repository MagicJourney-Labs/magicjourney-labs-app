import { gql } from '@apollo/client';
import Post from './Post';
import { getClient } from '@/lib/client';

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

  const client = getClient()
  const data = await client.query(query);
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