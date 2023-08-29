import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { tv, type VariantProps } from "tailwind-variants";

export const blogCard = tv({
  base: "bg-white  max-w-[450px] min-h-[262px] flex flex-col px-[20px] pb-[40px] pt-[20px] text-center",
  variants: {
    type: {
      rectangle: "max-w-[450px] min-h-[262px]",
      square: "max-w-[350px] min-h-[359px]",
    },
  },
  defaultVariants: {
    type: "rectangle",
  },
});

type BlogCardVariants = VariantProps<typeof blogCard>;

interface BlogCardProps extends BlogCardVariants {
  id: string;
  title: string;
  snippet: string | undefined;
  date: string;
}

export const BlogCard = (props: BlogCardProps) => {
  return (
    <div className={blogCard(props)}>
      <div className="mb-3 uppercase text-[13px] tracking-widest text-blue-gray font-halisMedium">
        {getFormattedDate(props.date)}
      </div>
      <div className="font-caslon text-blue-black text-[24px] leading-none mb-3">
        {props.title}
      </div>
      <div className="text-[14px]">{props.snippet}</div>
      <div className="flex justify-end mt-auto mb-[-10px] mr-2">
        <Link
          className="text-yellow  hover:text-gray-light"
          href={`/blog/posts/${props.id}`}
        >
          <FaArrowCircleRight size={24} />
        </Link>
      </div>
    </div>
  );
};
