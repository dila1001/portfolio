import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="bg-white  max-w-[450px] min-h-[262px] flex flex-col px-[20px] py-[40px] text-center">
      <div className="font-caslon text-blue-black text-[24px] leading-none mb-3">
        When to Use Static Generation vs. Server-side Rendering
      </div>
      <div className="text-[14px]">
        We recommend using Static Generation (with and without data) whenever
        possible because your page can be built once and served by CDN, which
        makes it much faster than having a server render the page on every
        request.
      </div>
      <div className="flex justify-end mt-auto mb-[-10px] mr-2">
        <Link
          className="text-yellow  hover:text-gray-light"
          href="https://github.com/dila1001"
        >
          <FaArrowCircleRight size={24} />
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="bg-gray-light min-h-[453px] flex flex-col pt-[58px] pb-[73px] justify-center">
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
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
