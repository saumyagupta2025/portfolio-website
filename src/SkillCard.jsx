export default function SkillCard(props) {
  return (
    <>
      <div
        className="container flex flex-col align-center p-5 justify-center"
        style={{
          borderRadius: "20px",
          border: "0.5px solid #334155",
          minWidth: "8rem",
          maxWidth: "8rem",
          height: "8rem",
        }}
      >
        <img
          src={props.path}
          alt=""
          className="text-white mb-2"
          style={{ height: "3rem", width: "3rem", margin: "8px auto" }}
        />

        <p className="skill-name text-white text-center text-wrap">
          {props.name}
        </p>
      </div>
    </>
  );
}
