"use client";
import { Button } from "@/app/components/ui/Button";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

// export function generateStaticParams() {
//   const posts = getSortedPostsData();

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

// export function generateMetadata({ params }: { params: { postId: string } }) {
//   const posts = getSortedPostsData();
//   const { postId } = params;

//   const post = posts.find((post) => post.id === postId);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.title,
//   };
// }

const Post = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  // Error handling
  // if (!posts.find((post) => post.id === postId)) notFound();

  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((response) => response.json())
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <main className="font-halisBook flex flex-col justify-center items-center">
      <div className="grid blogpost:grid-cols-[814px,235px] gap-[40px] my-[36px]">
        {post && (
          <>
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
            <div className=" bg-white hidden blogpost:block px-[30px] py-[40px] h-fit text-center">
              <Image
                className="rounded-full mx-auto mb-[15px]"
                src="/images/adila.jpg"
                width={157}
                height={153}
                alt="Adila Razmi"
                priority={true}
              />
              <p className="mb-[15px] font-oakleyscript text-[48px] leading-none">
                Adila
              </p>
              <p className="mb-[15px]">
                Frontend developer in Stockholm, Sweden.
              </p>
              <Button>More</Button>
            </div>
            <p className="uppercase font-halisMedium text-[13px] tracking-wider text-blue-gray pb-[100px]">
              <Link href="/blog">← Back to posts</Link>
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default Post;
