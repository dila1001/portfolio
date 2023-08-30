import Image from "next/image";
import { Button } from "@ui/Button";

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-137px)] items-center justify-center">
      <div className="flex flex-col mb-[50px]">
        <div className="mb-[-10px] z-10 tablet-large:ml-[100px] font-oakleyscript text-[64px] leading-none text-blue-gray">
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
    </section>
  );
};

export default Hero;
