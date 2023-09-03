import { Metadata } from "next";
import BlogHero from "../components/modules/blog/BlogHero";
import Posts from "../components/modules/blog/Posts";

export const metadata: Metadata = {
  title: "Adila Razmi's Blog",
  description: "Adila's blog",
};

export default function Home() {
  return (
    <section className="bg-gray-light flex flex-col justify-center">
      <BlogHero />
      <Posts />
    </section>
  );
}
