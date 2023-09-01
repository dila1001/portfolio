import { projects } from "./data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="bg-white min-h-screen flex flex-col items-center justify-center py-[70px]"
    >
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
    </section>
  );
};

export default Projects;
