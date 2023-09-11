import Profile from "@/app/components/modules/blog/Profile";
import { server } from "@/config";
import { getFormattedDateShort } from "@/lib/getFormattedDate";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch(server + "/api/posts/");

  const { data: posts }: { data: BlogPost[] } = await res.json();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;
  const res = await fetch(server + `/api/posts/${postId}`);
  const { data: post }: { data: BlogPost } = await res.json();

  return {
    title: `${post.title} | Adila`,
  };
}

const Post = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const getPost = async (): Promise<{ data: BlogPost }> => {
    const res = await fetch(server + `/api/posts/${postId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const { data: post } = await getPost();

  return (
    <main className="font-halisBook flex flex-col justify-center items-center">
      <div className="grid blogpost:grid-cols-[814px,235px] gap-[40px] my-[36px]">
        <div className="bg-white min-h-[203px] flex justify-center items-center text-center">
          <div className="grow px-[36px]">
            <h1 className=" font-caslon text-[40px] leading-none text-blue-black m-0">
              {post.title}
            </h1>
          </div>
          <div className="bg-green-light w-[52px] h-full flex justify-center items-center">
            <p className="font-halisMedium text-base uppercase tracking-wider text-blue-black whitespace-nowrap transform -rotate-90 ">
              {getFormattedDateShort(post.date)}
            </p>
          </div>
        </div>

        <div className="hidden blogpost:block"></div>

        <article className="bg-white prose-lg p-[30px]">
          {post.contentHtml !== undefined ? (
            <section dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          ) : null}
        </article>
        <Profile />
        <p className="uppercase font-halisMedium text-[13px] tracking-wider text-blue-gray pb-[100px]">
          <Link href="/blog">← Back to posts</Link>
        </p>
      </div>
    </main>
  );
};

export default Post;
