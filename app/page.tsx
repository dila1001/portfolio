import Hero from "./components/modules/home/Hero";
import About from "./components/modules/home/About";
import Experience from "./components/modules/home/Experience";
import Projects from "./components/modules/home/Projects";
import Blog from "./components/modules/home/Blog";
import Navbar from "./components/modules/home/Navbar";

export default function Home() {
  return (
    <main className="mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
    </main>
  );
}
