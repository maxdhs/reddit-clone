import { prisma } from "@/lib/prisma.js";

export default async function Subreddit({ params }) {
  // i want to show the posts associated with this subreddit

  // how do i access that parameter?

  // subreddit name as a title
  const { subredditId } = params;
  const subreddit = await prisma.subreddit.findFirst({
    where: { id: subredditId },
  });

  const posts = await prisma.post.findMany({ where: { subredditId } });
  console.log(posts);
  return (
    <div>
      <h3>{subreddit.name}</h3>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}
