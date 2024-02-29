import projects from "./projects.json";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div
      id="projects-container"
      className="projects-container px-10 py-20 bg-slate-950"
      style={{ zIndex: 100, position: "relative" }}
    >
      <h3 className="text-white text-center text-3xl font-bold mb-16">
        Projects
      </h3>

      <div className="project-list flex flex-wrap gap-x-10 gap-y-16 justify-center">
        {/* console.log(projects) */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            Name={project.Name}
            Desc={project.Desc}
            GithubLink={project.GithubLink}
            Demo={project.Demo}
            ImgSrc={project.ImgSrc}
          />
        ))}
      </div>
    </div>
  );
}
