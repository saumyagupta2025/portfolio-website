export default function BlogTile(props) {
  return (
    <div className="blog-tile">
      <div className="blog-image-container">
        <img src={props.imgSrc} className="blog-image" />
      </div>
      <div className="blog-info">
        <h4 className="blog-title">{props.title}</h4>
        <p className="blog-desc">{props.desc}</p>
        <button className="blog-link">
          <a href={props.link}>Read More</a>
        </button>
      </div>
    </div>
  );
}
