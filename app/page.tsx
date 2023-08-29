// Hero, about me, experience, projects, blog posts,

import Posts from "./components/modules/blog/Posts";
import { Button } from "@ui/Button";
import Hero from "./components/modules/home/Hero";
import About from "./components/modules/home/About";
import Experience from "./components/modules/home/Experience";
import Projects from "./components/modules/home/Projects";
import Blog from "./components/modules/home/Blog";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
    </main>
  );
}
