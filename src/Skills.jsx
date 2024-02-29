import skillsData from "./skills.json";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <>
      <div
        id="skill-container"
        className="skill-container pb-20 pt-24 bg-slate-950"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-sky-500 text-center text-3xl font-bold mb-16">
          Skills and <span className="text-white">Tech Stack</span>
        </h3>

        <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
          {skillsData.map((skill, index) => (
            <div key={index} className="w-1/8">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
