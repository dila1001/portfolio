import { BlogCard } from "@ui/BlogCard";

export default async function Posts() {
  const getPosts = async (): Promise<{ data: BlogPost[] }> => {
    const res = await fetch("https://adilarazmi.com/api/posts/");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const { data: posts } = await getPosts();

  return (
    <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-[40px] mx-auto py-[120px]">
      {posts &&
        posts.map((post) => (
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
