"use client";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about-section">
      <section className="bg-pink-light min-h-screen flex items-center justify-center py-[80px] ">
        <div className="flex flex-col items-center w-[775px] text-center">
          <div className="font-caslon text-[48px] text-blue-black leading-none mb-[35px]">
            From photoshop to visual studio code.
          </div>
          <div className="font-halisMedium text-[16px] text-blue-gray uppercase tracking-wider px-2 mb-[45px]">
            I started learning graphic design at age 13 back in 2006 which led
            me to creating my own site for my designs.
          </div>
          <div className="bg-coral h-[5px] w-[256px] mb-[54px]"></div>
          <div className="px-10">
            <p>
              My interest in web development and design took a pause as I
              pursued my studies in English Literature. It wasn&apos;t tuntil
              later, when I had to build an e-commerce site for selling theatre
              tickets as part of a course, that I rekindled my love for web
              development. Funny how things work out!
            </p>
            <br />
            <p>
              After graduating and moving to Stockholm, Sweden, I decided to
              delve deeper into web development and programming, and ultimately
              became a frontend developer. Today, I have worked in several
              projects for known companies such as Assa Abloy and H&M Group
              building reliable and performant web apps from inception to
              deployment.
            </p>
            <br />
            <p>
              In my free time, I love cooking, baking, spending time with my
              husband and 2 daughters, and researching about anything and
              everything.
            </p>
            <br />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
