import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLaptop } from "react-icons/fa";
import { Project } from "./store/projects";
import { projects } from "./store/projects";

const ProjectCard = ({
  name,
  img_link,
  description,
  demo_link,
  github_link,
}: Project) => {
  return (
    <div className="flex flex-col max-w-[450px] h-[420px]">
      <div>
        <Image
          src={img_link}
          width={450}
          height={263}
          alt={name}
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[368px] h-[208px] mt-[-50px] bg-white mx-auto p-[22px] text-center">
        <div className="font-caslon text-[34px] leading-none mb-[11px]">
          {name}
        </div>
        <div className="mb-[11px]">{description}</div>
        <div className="flex justify-center gap-[30px]">
          <Link
            className="text-blue-gray hover:text-gray-light"
            href={demo_link}
          >
            <FaLaptop size={24} />
          </Link>
          <Link
            className="text-blue-gray  hover:text-gray-light"
            href={github_link}
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center py-[70px]">
      <div className="text-center font-halisMedium text-base text-blue-gray tracking-widest uppercase mb-[78px]">
        Projects
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[40px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img_link={project.img_link}
            name={project.name}
            description={project.description}
            demo_link={project.demo_link}
            github_link={project.github_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
