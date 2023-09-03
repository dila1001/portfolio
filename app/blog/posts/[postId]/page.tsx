"use client";
import Profile from "@/app/components/modules/blog/Profile";
import { Button } from "@/app/components/ui/Button";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// export function generateStaticParams() {
//   const posts = getSortedPostsData();

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

const Post = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((response) => response.json())
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    document.title = post ? post.title : "Post Not Found";
  }, [post]);

  return (
    <main className="font-halisBook flex flex-col justify-center items-center">
      {error ? (
        <div className="h-[300px] bg-white flex flex-col justify-center items-center my-[36px] w-3/4 gap-[40px]">
          <p>The requested post does not exist.</p>
          <p className="uppercase font-halisMedium text-[13px] tracking-wider text-blue-gray">
            <Link href="/blog">← Back to posts</Link>
          </p>
        </div>
      ) : (
        post && (
          <div className="grid blogpost:grid-cols-[814px,235px] gap-[40px] my-[36px]">
            <div className="bg-white min-h-[203px] flex justify-center items-center flex-col text-center px-10">
              <p className="font-halisMedium text-base uppercase tracking-wider text-blue-gray mb-[12px]">
                {getFormattedDate(post.date)}
              </p>
              <h1 className="font-caslon text-[40px] leading-none text-blue-black m-0">
                {post.title}
              </h1>
            </div>

            <div className="hidden blogpost:block"></div>

            <article className="bg-white prose-lg p-[30px]">
              <section dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </article>
            <Profile />
            <p className="uppercase font-halisMedium text-[13px] tracking-wider text-blue-gray pb-[100px]">
              <Link href="/blog">← Back to posts</Link>
            </p>
          </div>
        )
      )}
    </main>
  );
};

export default Post;
