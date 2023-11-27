import SocialBtn from "./SocialBtn";

export default function ProjectCard(props) {
  console.log(props.demoLink);
  return (
    <div className="project_card">
      <img className="project_demo_img" src={props.imgSrc}></img>
      <h3 className="project_name">{props.projectName}</h3>
      <p className="project_desc">{props.desc}</p>
      <div className="btn">
        <SocialBtn link={""} type={"github"} />
        {props.demoLink && <SocialBtn link={""} type={"demo"} />}
      </div>
    </div>
  );
}
