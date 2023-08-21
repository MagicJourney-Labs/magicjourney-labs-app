import { gql } from '@apollo/client';
import Post from './Post';
import client from '@/lib/client';

async function getPosts() {
  try {
    const result = await client.query({
      query: gql`
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
      `,
    });
    return result.data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null 
  }
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