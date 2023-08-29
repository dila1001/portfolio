import Link from "next/link";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-navy-blue flex flex-col items-center justify-center laptop:px-[175px] py-[116px] relative">
      <div className="bg-white h-[745px] w-full border-yellow border-[10px] flex flex-col justify-center items-center">
        <div className="font-halisMedium uppercase text-blue-gray text-[32px] tracking-widest mb-[25px]">
          Get in touch
        </div>
        <div className="max-w-[644px] px-4 text-center text-[20px] mb-[25px]">
          Want to establish a connection? Just drop me an email! Or if you find
          LinkedIn more convenient, feel free to connect with me there.
        </div>
        <div className="font-halisMedium text-blue-gray text-[20px] flex items-center mb-[25px] gap-2">
          <FaMailBulk className="text-blue-gray" size={25} />
          hello@adilarazmi.com
        </div>
        <div className="text-blue-gray flex items-center hover:text-gray-light gap-4">
          <Link
            className="text-blue-gray hover:text-gray-light"
            href="https://www.linkedin.com/in/adila-razmi-878a01177/"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            className="text-blue-gray  hover:text-gray-light"
            href="https://github.com/dila1001"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[45px] font-halisBook uppercase tracking-[0.4em] text-white text-[12px]">
        COPYRIGHT © 2023 · ADILA RAZMI
      </div>
    </div>
  );
};

export default Footer;
