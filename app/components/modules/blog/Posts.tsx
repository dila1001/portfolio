"use client";
import { BlogCard } from "@ui/BlogCard";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
