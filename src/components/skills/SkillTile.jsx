export default function SkillTile(props) {
  return (
    <div className="skill-container">
      <img className="skill-img" src={props.src} alt={props.alt}></img>
      <p className="skill-name">{props.skillName}</p>
    </div>
  );
}
