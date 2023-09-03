"use client";
import Hero from "./components/modules/home/Hero";
import About from "./components/modules/home/About";
import Experience from "./components/modules/home/Experience";
import Projects from "./components/modules/home/Projects";
import Blog from "./components/modules/home/Blog";
import Navbar from "./components/modules/home/Navbar";
import { useEffect, useState } from "react";
import Preloader from "./components/ui/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <main className="mx-auto">
          {isLoading && <Preloader />}
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Blog />
        </main>
      )}
    </>
  );
}
