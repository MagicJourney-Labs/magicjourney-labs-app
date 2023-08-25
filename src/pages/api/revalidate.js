export const handler = async (req, res) => {
  if (req.query.secret !== process.env.HYGRAPH_POSTS_WEBHOOK_KEY) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};
