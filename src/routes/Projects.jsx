import ProjectCard from "../components/projects/ProjectCard";
import "./../styles/projects.css";
import projectsInfo from "./../components/projects/projectsInfo.js";
export default function Projects() {
  return (
    <>
      <div className="projects_heading_container">
        <h1 className="projects_section_heading">
          <span>My Recent</span> Works
        </h1>
        <p className="projects_subheading">
          <em>Here are the few projects I have worked on recently.</em>
        </p>
      </div>
      <div className="all_projects">
        {projectsInfo.map((currentInfo, index) => {
          return (
            <ProjectCard
              key={index}
              projectName={currentInfo.projectName}
              githubLink={currentInfo.githubLink}
              imgSrc={currentInfo.imgSrc}
              desc={currentInfo.desc}
              demoLink={currentInfo.demoLink}
            />
          );
        })}
      </div>
    </>
  );
}
