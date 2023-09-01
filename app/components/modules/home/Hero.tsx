"use client";
import Image from "next/image";
import { Button } from "@ui/Button";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  return (
    <section className="flex min-h-[calc(100vh-137px)] justify-center relative">
      <div ref={ref} style={{ perspective: "500px" }}>
        <motion.div style={{ y }}>
          <div className="flex flex-col mb-[50px]">
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
                <Button type="primary">About me</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
