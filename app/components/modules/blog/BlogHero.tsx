import React from "react";

const BlogHero = () => {
  return (
    <section className="flex flex-col h-[400px] justify-center items-center relative bg-navy-blue">
      <div className="text-center">
        <h2 className="font-oakleyscript text-white text-[96px] leading-none">
          Adilas Blog
        </h2>
      </div>
      <div className="text-center max-w-[533px]">
        <p className="font-halisMedium uppercase text-[13px] text-white tracking-wider">
          This is where I write about all my coding adventures, mainly within
          frontend development
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
