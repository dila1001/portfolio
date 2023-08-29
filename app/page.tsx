// Hero, about me, experience, projects, blog posts,

import Posts from "./components/modules/blog/Posts";
import { Button } from "@ui/Button";
import Hero from "./components/modules/home/Hero";
import About from "./components/modules/home/About";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <About />
    </main>
  );
}
