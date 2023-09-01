import { getSortedPostsData } from "@/lib/posts";
import { BlogCard } from "@ui/BlogCard";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="grid grid-cols-1 laptop:grid-cols-2 gap-[40px] mx-auto">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          snippet={post.snippet}
          id={post.id}
          date={post.date}
          type="square"
        />
      ))}
    </section>
  );
}
