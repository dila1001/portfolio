// Blog hero, blog posts list

import BlogHero from "../components/modules/blog/BlogHero";
import Posts from "../components/modules/blog/Posts";

export default function Home() {
  return (
    <section className="bg-gray-light flex flex-col justify-center">
      <BlogHero />
      <Posts />
    </section>
  );
}
