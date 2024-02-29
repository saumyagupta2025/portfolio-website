import profileImg from "./assets/1000027331-01.jpg";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between  py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Saumya Gupta <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Based in Bangalore, I'm a results-driven
            <span className="text-sky-500"> Data Engineer</span> holding a
            <span className="text-sky-500">
              {" "}
              B.Tech degree in Computer Science & Engineering.
            </span>{" "}
            My professional journey revolves around transforming raw data into
            impactful insights, and I'm particularly passionate about
            <span className="text-sky-500">
              {" "}
              Data Science, Machine Learning, and Generative AI.
            </span>
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Proficient in{" "}
            <span className="text-sky-500">
              Java, Python, Spark, JavaScript and React
            </span>
            , I bring a creative touch using{" "}
            <span className="text-sky-500">HTML and CSS</span> for visual
            appeal. Navigating key Python libraries such as{" "}
            <span className="text-sky-500">Numpy and Pandas,</span> I craft
            intelligent solutions with tools like
            <span className="text-sky-500">
              {" "}
              Scikit-Learn, Tensorflow and Streamlit.{" "}
            </span>
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities. Committed to
            continuous improvement,
            <span className="text-sky-500">
              {" "}
              I hold certifications in emerging technologies{" "}
            </span>
            and actively participate in workshops to stay ahead of industry
            trends.
          </p>
        </div>
        <img
          src={profileImg}
          alt="saumya-gupta-img"
          className=" text-white img-saumya"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "90%",
            height: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
