import publications from "./publications.json";
export default function Publications() {
  return (
    <div>
      <div
        id="publications-container"
        className="publication-container bg-slate-900 pb-20 px-20 pt-24"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold mb-14">
          Publications
        </h3>

        <ul className="publication-list" style={{ listStyleType: "none" }}>
          {publications.map((publication, index) => (
            <li
              key={index}
              className="publication-item"
              style={{
                marginBottom: "20px",
                paddingLeft: "20px",
                position: "relative",
              }}
            >
              <h4 className="text-sky-500 font-bold text-lg mt-3">
                {publication.Title}
              </h4>
              <p className="text-white">Authors: {publication.Authors}</p>
              <p className="text-white">Publisher: {publication.Publisher}</p>
              <p className="text-gray-400">
                {publication.Desc}
                {publication.Link && ( // Check if Link exists
                  <a
                    href={publication.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 ml-3"
                  >
                    Read more
                  </a>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
