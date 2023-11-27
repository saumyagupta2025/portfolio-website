import "./../../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">
        <span>Know More</span> About Me!
      </h1>
      <div className="information-container">
        <div className="information-desc">
          <p className="information">
            Based in Bangalore, I'm a results-driven <span>Data Engineer</span>{" "}
            holding a
            <span> B.Tech degree in Computer Science & Engineering. </span>
            My professional journey revolves around transforming raw data into
            impactful insights, and I'm particularly passionate about{" "}
            <span>Data Science, Machine Learning, and Generative AI.</span>{" "}
            <br />
          </p>

          <p className="information">
            Proficient in <span>Java, Python, Spark, and JavaScript</span>, I
            bring a creative touch using <span>HTML and CSS</span> for visual
            appeal. Navigating key Python libraries such as{" "}
            <span>Numpy and Pandas,</span> I craft intelligent solutions with
            tools like
            <span> Scikit-Learn, Tensorflow and Streamlit. </span>
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities. Committed to
            continuous improvement,
            <span> I hold certifications in emerging technologies </span>
            and actively participate in workshops to stay ahead of industry
            trends.
          </p>
        </div>
        <img
          src="src/assets/avatar.png"
          alt="Avatar-img"
          className="avatar_img"
        />
      </div>
    </div>
  );
}
