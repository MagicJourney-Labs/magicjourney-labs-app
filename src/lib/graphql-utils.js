export async function fetchGraphQL(query, options = {}) {
  try {
    const response = await fetch(process.env.HYGRAPH_GRAPHQL_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      ...options,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
