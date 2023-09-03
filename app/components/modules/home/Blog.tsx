"use client";
import { BlogCard } from "@ui/BlogCard";
import { useEffect, useState } from "react";

const Blog = () => {
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
    <section className="bg-gray-light min-h-[453px] flex flex-col pt-[58px] pb-[73px] justify-center">
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[40px] mx-auto">
        <div className="w-[450px] flex items-center gap-2">
          <span className="font-halisMedium text-blue-gray uppercase text-base tracking-widest">
            Read my
          </span>
          <span className="font-oakleyscript text-blue-gray leading-none text-[36px]">
            thoughts
          </span>
        </div>
        <div className="w-[450px]"></div>
        {posts &&
          posts
            .slice(0, 2)
            .map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                snippet={post.snippet}
                id={post.id}
                date={post.date}
              />
            ))}
      </div>
    </section>
  );
};

export default Blog;
