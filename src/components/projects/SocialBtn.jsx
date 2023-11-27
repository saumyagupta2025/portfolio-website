export default function SocialBtn(props) {
  if (props.type == "github") {
    return (
      <button className="github_link_btn">
        <a href={props.githubLink}>
          {" "}
          <i class="fa-brands fa-github"></i> Github
        </a>
      </button>
    );
  } else {
    return (
      <button className="github_link_btn">
        <a href={props.demoLink}>
          {" "}
          <i class="fa-solid fa-globe"></i> Demo
        </a>
      </button>
    );
  }
}
