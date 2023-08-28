import Blogs from "@/components/ui/Blogs";

async function getBlogs() {
    const query = `
        blogs {
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

    const data = await fetchGraphQL(query, { next: { tags: ["blogs"] } });
    return data;
}

export default async function BlogsPage() {
    const { posts } = await getBlogs();
    return (
        <div>
            <h1>Blogs</h1>
            <Blogs data={posts} />
        </div>
    )
}
