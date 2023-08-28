import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@ui/Button";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      className="uppercase tracking-widest text-[11px] hover:text-blue-gray"
      href={href}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white border-t-[5px] border-yellow h-[137px] w-full text-blue-black">
      <div className="xl:w-3/4 w-full flex justify-between items-center gap-[10px]">
        <div className="grow justify-between pl-5 hidden lg:flex">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/">About</NavItem>
          <NavItem href="/">Experience</NavItem>
        </div>
        <div className="flex grow justify-center">
          <div className="flex flex-col">
            <Link href="/">
              <h1 className="font-caslon text-[53px] leading-none hover:text-blue-gray">
                adila razmi
              </h1>
            </Link>
            <span className="font-halisMedium uppercase tracking-wider text-[13px] text-center">
              frontend developer
            </span>
          </div>
        </div>
        <div className="grow justify-between items-center pr-5 hidden lg:flex">
          <NavItem href="/">Blog</NavItem>
          <NavItem href="/">Projects</NavItem>
          <Button type="secondary">Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
