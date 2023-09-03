import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/Button";

const Profile = () => {
  return (
    <div className=" bg-white hidden blogpost:block px-[30px] py-[40px] h-fit text-center">
      <Image
        className="rounded-full mx-auto mb-[15px]"
        src="/images/adila.jpg"
        width={157}
        height={153}
        alt="Adila Razmi"
        priority={true}
      />
      <p className="mb-[15px] font-oakleyscript text-[48px] leading-none">
        Adila
      </p>
      <p className="mb-[15px]">Frontend developer in Stockholm, Sweden.</p>
      <Link href="https://adilarazmi.com/#about-section">
        <Button>More</Button>
      </Link>
    </div>
  );
};

export default Profile;
