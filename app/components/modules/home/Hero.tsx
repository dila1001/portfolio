"use client";
import Image from "next/image";
import { Button } from "@ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const heroVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="flex min-h-[calc(100vh-137px)] justify-center items-center relative">
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col mb-[50px]"
      >
        <div className="mb-[-10px] tablet-large:ml-[100px] font-oakleyscript text-[64px] leading-none text-blue-gray z-10">
          Hi, Im Adila!
        </div>

        <div className="flex justify-center row items-start h-max">
          <div className="mr-[-50px] z-0 hidden tablet-large:block">
            <Image
              className="rounded-full"
              src="/images/adila.jpg"
              width={255}
              height={255}
              alt="Adila Razmi"
              priority={true}
            />
          </div>

          <div className="max-w-[635px] bg-yellow-light px-[60px] py-[32px] font-caslon text-[40px] leading-[2.6rem] text-blue-black text-center">
            <div className="pb-[23px]">
              I enjoy creating robust & scalable frontend solutions enriched
              with exceptional user experiences.
            </div>
            <Link href="#about-section">
              <Button type="primary">About me</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
