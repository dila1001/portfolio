"use client";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@ui/Button";
import { motion } from "framer-motion";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}>
      <Link
        className="uppercase tracking-widest text-[11px] hover:text-blue-gray"
        to={href}
        smooth
        duration={600}
      >
        {children}
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white border-t-[5px] border-yellow h-[137px] w-full text-blue-black relative items-center">
      <div className="w-full flex justify-between items-center gap-[10px] desktop:w-3/4">
        <div className="hidden tablet-large:flex grow justify-between pl-5">
          <NavItem href="/">Home</NavItem>
          <NavItem href="about-section">About</NavItem>
          <NavItem href="experience-section">Experience</NavItem>
        </div>
        <div className="flex grow justify-center">
          <div className="flex flex-col">
            <Link to="/">
              <h1 className="font-caslon text-[53px] leading-none hover:text-blue-gray lowercase">
                Adila Razmi
              </h1>
            </Link>
            <span className="font-halisMedium uppercase tracking-wider text-[13px] text-center">
              Frontend Developer
            </span>
          </div>
        </div>
        <div className="hidden tablet-large:flex grow justify-between items-center pr-5">
          <NavItem href="/">Blog</NavItem>
          <NavItem href="projects-section">Projects</NavItem>
          <Link to="contact-section" smooth duration={500}>
            <Button type="secondary">Contact</Button>
          </Link>
        </div>
      </div>
      <div className="desktop:flex items-center gap-4 absolute right-4 hidden ">
        <Link
          className="text-green-light hover:text-gray-light"
          to="https://www.linkedin.com/in/adila-razmi-878a01177/"
        >
          <FaLinkedin size={19} />
        </Link>
        <Link
          className="text-green-light hover:text-gray-light"
          to="https://github.com/dila1001"
        >
          <FaGithub size={19} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
