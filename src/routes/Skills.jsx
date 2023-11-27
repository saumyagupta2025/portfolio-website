import SkillTile from "../components/skills/SkillTile";
import "./../styles/skills.css";
export default function Skills() {
  const skillArr = [
    {
      src: "src/assets/HTML.svg",
      alt: "HTML icon",
      skillName: "HTML",
    },
    {
      src: "src/assets/css.svg",
      alt: "CSS icon",
      skillName: "CSS",
    },
    {
      src: "src/assets/javascript.svg",
      alt: "Javascript icon",
      skillName: "Javascript",
    },
    {
      src: "src/assets/react.svg",
      alt: "React icon",
      skillName: "React",
    },
    {
      src: "src/assets/sass.svg",
      alt: "Sass icon",
      skillName: "Sass",
    },
    {
      src: "src/assets/sql.svg",
      alt: "SQL icon",
      skillName: "SQL",
    },
    {
      src: "src/assets/python.svg",
      alt: "Python icon",
      skillName: "Python",
    },
    {
      src: "src/assets/spark.svg",
      alt: "Spark icon",
      skillName: "Spark",
    },
    {
      src: "src/assets/databricks.svg",
      alt: "databricks icon",
      skillName: "Databricks",
    },
    {
      src: "src/assets/java.svg",
      alt: "Java icon",
      skillName: "Java",
    },
    {
      src: "src/assets/azure.svg",
      alt: "Azure icon",
      skillName: "Azure",
    },
    {
      src: "src/assets/docker.svg",
      alt: "docker icon",
      skillName: "Docker",
    },
    {
      src: "src/assets/kubernetes.svg",
      alt: "kubernetes icon",
      skillName: "Kubernetes",
    },
    {
      src: "src/assets/github.svg",
      alt: "guthub icon",
      skillName: "Github",
    },
  ];

  const toolsArr = [
    {
      src: "src/assets/macos.svg",
      alt: "",
      toolName: "MacOS",
    },
    {
      src: "src/assets/visual-studio-code.svg",
      alt: "",
      toolName: "VS Code",
    },
    {
      src: "src/assets/postman.svg",
      alt: "",
      toolName: "Postman",
    },
    {
      src: "src/assets/jupyter.svg",
      alt: "",
      toolName: "Jupyter Notebook",
    },

    {
      src: "src/assets/figma.svg",
      alt: "",
      toolName: "Figma",
    },
  ];

  return (
    <div className="section-container">
      <div className="skill-heading-container">
        <h1 className="skill-heading">
          <span>Professional</span> Skillset
        </h1>
      </div>

      <div className="skill-list-container">
        {skillArr.map((currSkill, index) => {
          return (
            <SkillTile
              key={index}
              src={currSkill.src}
              alt={currSkill.alt}
              skillName={currSkill.skillName}
            />
          );
        })}
      </div>

      <div className="tools-heading-container">
        <h1 className="tools-heading">
          <span>Tools </span>I use
        </h1>
      </div>

      <div className="tool-list-container">
        {/* <div className="tool-container"> */}
        {toolsArr.map((currTool, index) => {
          return (
            <SkillTile
              key={index}
              src={currTool.src}
              alt={currTool.alt}
              skillName={currTool.toolName}
            />
          );
        })}
      </div>
    </div>
    // </div>
  );
}
